const { ethers } = require("ethers");
const client = require("../discord/discord.client");
const { setRole, removeRole } = require("../discord/handlers/role.handler");
const {
  getAllProjects,
} = require("../apis/services/remotes-db/project.service");
const {
  getHolderByWallet,
  updateHolder,
} = require("../apis/services/remotes-db/holder.service");

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
  const project = await getAllProjects();
  project.forEach((project) => {
    const contract = getContract(project.nftAddress);
    contract.on("Transfer", async (from, to, tokenId) => {
      if (isMarketPlace(to)) {
        await onTransferUpdateRole(from, contract.address, project);
      } else if (isMarketPlace(from)) {
        await onTransferUpdateRole(to, contract.address, project);
      } else {
        await onTransferUpdateRole(to, contract.address, project);
        await onTransferUpdateRole(from, contract.address, project);
      }
    });
  });
};

async function onTransferUpdateRole(wallet, contract, project) {
  const holderData = await getHolderByWallet(wallet, contract.address);
  const balance = await contract.balanceOf(wallet);
  if (balance > 0 && holderData && holderData.wallet == wallet) {
    console.log(`@${wallet} : is holder.`);
    await setRole(
      client,
      project.discordGuilId,
      holderData.discordId,
      project.roles[0]
    );
    await updateHolder(holderData.discordId, contract.address, {
      nftAddress: contract.address,
      discordId: holderData.discordId,
      balance,
      timestamp: new Date().getTime(),
      verified: true,
    });
  } else if (balance <= 0 && holderData && holderData.wallet == wallet) {
    console.log(`@${wallet} : is NOT holder`);
    await removeRole(
      client,
      project.discordGuildId,
      holderData.discordId,
      project.roles[0]
    );
    await updateHolder(holderData.discordId, contract.address, {
      nftAddress: contract.address,
      discordId: holderData.discordId,
      balance,
      timestamp: new Date().getTime(),
      verified: false,
    });
  } else {
    console.log(`transfer from non-verified holder. @${wallet}`);
  }
}

//check if receiver is marketplace
function isMarketPlace(to) {
  let marketPlaceAddress = [
    "0x874987257374cAE9E620988FdbEEa2bBBf757cA9",
    "0xd7C1b83B1926Cc6971251D0676BAf239Ee7F804e",
  ];

  let middleAddress = "0xA51b0F76f0d7d558DFc0951CFD74BB85a70E2a95";

  const foundMarket = marketPlaceAddress.find((market) => market == to);

  if (to === foundMarket || to === middleAddress) {
    return true;
  } else {
    return false;
  }
}

onTransferEvent();

module.exports = {
  getContract,
};
