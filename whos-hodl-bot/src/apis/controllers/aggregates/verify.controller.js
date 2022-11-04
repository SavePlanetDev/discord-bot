const catchAsync = require("../../utils/catchAcsync");
const client = require("../../../discord/discord.client");
const { createNewHolder } = require("../../services/remotes-db/holder.service");
const { getRolesByGuildId } = require("../../services/remotes-db/role.service");
const {
  getProjectByGuild,
} = require("../../services/remotes-db/project.service");
const { setRole } = require("../../../discord/handlers/role.handler");
const { getContract } = require("../../../blockchain");

const verifyHolder = catchAsync(async ({ body }, res) => {
  const { walletAddress, discordId, discordGuildId } = body;
  const { nftAddress } = await getProjectByGuild(discordGuildId);
  const contract = getContract(nftAddress);
  const balance = (await contract.balanceOf(walletAddress)).toString();

  if (balance <= 0) {
    res.status(403).json({
      result: "Error",
      message: "Invalid balance",
    });
  } else {
    const role = await getRolesByGuildId(discordGuildId);
    await createNewHolder(
      nftAddress,
      discordId,
      walletAddress,
      balance,
      new Date().getTime(),
      true
    );

    console.log("role data", role[0]);
    await setRole(client, discordGuildId, discordId, role[0].role);

    const logs = {
      nftAddress,
      discordGuildId,
      discordId,
      balance,
      role: role[0].role,
    };

    //response
    res.status(200).json({
      result: "OK",
      data: logs,
    });
  }
});

module.exports = {
  verifyHolder,
};
