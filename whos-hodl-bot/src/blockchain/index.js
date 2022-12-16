const { ethers } = require("ethers");
const client = require("../discord/discord.client");
const { setRole, removeRole } = require("../discord/handlers/role.handler");
const { getAllProjects } = require("../database/services/project.service");
const {
  getHolderByWallet,
  apiUpdateVerificationState,
} = require("../database/services/holder.service");
const {
  addToDependency,
  getHowManyInSideOf,
  removeFromDependency,
} = require("../database/services/holder.d.service");
const {
  getDependencyByAddress,
} = require("../database/services/dependencies.service");

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.bitkubchain.io"
);

const getContract = (address) => {
  const abi = [
    "function tokenURI(uint256 tokenId) public view returns(string memory)",
    "function balanceOf(address owner) public view returns(uint256)",
    "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  ];
  const contract = new ethers.Contract(address, abi, provider);
  return contract;
};

const onTransferEvent = async () => {
  // Get all Projects address and see if any transfering occurred
  const project = await getAllProjects();

  project.forEach((project) => {
    const contract = getContract(project.nftAddress);
    // TRANSFER EVENT HERE
    contract.on("Transfer", async (from, to, _tokenId) => {
      //PARSE TOKEN ID TO NUMBER
      let tokenId = parseInt(_tokenId.toString());
      //CHECKING THE DEPENDENCIES AND SET ROLE
      //-- 1. if (to) address is the dependency address?, that's mean some one transfering token to the denpendency of the nft (eg. mining pool)
      if ((await checkDependencies(to)).result) {
        // -- get the dependency data
        const dependency = await checkDependencies(to);
        // -- onTransfer Core process
        await onTransferUpdateRole(
          from,
          contract,
          tokenId,
          project,
          dependency,
          0
        );
      } else if ((await checkDependencies(from)).result) {
        const dependency = await checkDependencies(from);
        await onTransferUpdateRole(
          to,
          contract,
          tokenId,
          project,
          dependency,
          1
        );
      } else {
        await onTransferUpdateRole(to, contract, tokenId, project);
        await onTransferUpdateRole(from, contract, tokenId, project);
      }
    });
  });
};

async function onTransferUpdateRole(
  wallet,
  contract,
  tokenId,
  project,
  dependency,
  direction
) {
  const holderData = await getHolderByWallet(wallet, project.nftAddress);
  let balance = await contract.balanceOf(wallet);
  let dependencyBal = await getHowManyInSideOf(
    dependency.address,
    holderData.walletAddress
  );
  balance = parseInt(balance.toString());

  if (balance > 0 && holderData && holderData.walletAddress == wallet) {
    console.log(`@${wallet} : is holder.`);
    dependency.result
      ? console.log(
          `transfer ${direction == 0 ? "to" : "from"} ${dependency.name} ${
            direction == 0 ? "from" : "to"
          } ${wallet}`
        )
      : null;

    /** @NOTICE in the case of holder send their token to dependency with type of 2 (not market) */
    if (direction == 0 && dependency.result && dependency.type == 2) {
      //1. set dependency role
      await setRole(
        client,
        project.discordGuildId,
        holderData.discordId,
        dependency.result ? dependency.role : project.roles[0]
      );
      //2. add data to the dependency table
      await addToDependency(
        dependency.address,
        holderData.walletAddress,
        project.nftAddress,
        tokenId
      );
    } else if (direction == 1 && dependency.result && dependency.type == 2) {
      /**
       * @Notice in the case of come back from dependency
       */
      console.log("dependency bal : ", dependencyBal);

      if (dependencyBal <= 1) {
        await removeRole(
          client,
          project.discordGuildId,
          holderData.discordId,
          dependency.role
        );
        await removeFromDependency(tokenId);
      } else {
        await removeFromDependency(tokenId);
      }
    } else {
      await setRole(
        client,
        project.discordGuildId,
        holderData.discordId,
        project.roles[0]
      );
    }

    await apiUpdateVerificationState(
      contract.address,
      holderData.discordId,
      balance,
      holderData.wallet,
      true
    );
  } else if (balance <= 0 && holderData && holderData.walletAddress == wallet) {
    console.log(`@${wallet} : is NOT holder`);
    /**
     * @Notice in the case of 0 balance with dependency is holder send all of their token to dependency
     */

    dependency.result
      ? console.log(
          `transfer ${direction == 0 ? "to" : "from"} ${dependency.name} ${
            direction == 0 ? "from" : "to"
          } ${wallet}`
        )
      : null;

    /**
     * @Notice in the case of send to dependency!
     *
     */
    if (direction == 0 && dependency.result && dependency.type == 2) {
      //1. remove standard role as has no balance in the wallet
      await removeRole(
        client,
        project.discordGuildId,
        holderData.discordId,
        project.roles[0]
      );
      //2. set to dependency role in stead
      await setRole(
        client,
        project.discordGuildId,
        holderData.discordId,
        dependency.role
      );
      await addToDependency(
        dependency.address,
        holderData.walletAddress,
        project.nftAddress,
        tokenId
      );
    } else if (direction == 1 && dependency.result && dependency.type == 2) {
      if (dependencyBal <= 0) {
        await removeRole(
          client,
          project.discordGuildId,
          holderData.discordId,
          dependency.role
        );
      } else {
        await removeFromDependency(tokenId);
      }
    } else {
      await removeRole(
        client,
        project.discordGuildId,
        holderData.discordId,
        project.roles[0]
      );
      await apiUpdateVerificationState(
        contract.address,
        holderData.discordId,
        balance,
        holderData.wallet,
        false
      );
    }
  } else {
    console.log(`transfer from non-verified holder. @${wallet}`);
  }
}

//check if receiver is marketplace
async function checkDependencies(to) {
  // const foundDependency = dependencies.find((d) => d.address == to);
  const foundDependency = await getDependencyByAddress(to);

  if (foundDependency) {
    return {
      result: true,
      ...foundDependency,
    };
  } else {
    return {
      result: false,
    };
  }
}

onTransferEvent();

module.exports = {
  getContract,
};
