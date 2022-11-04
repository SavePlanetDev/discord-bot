const catchAsync = require("../../utils/catchAcsync");
const { createNewHolder } = require("../../services/holder.service");
const { getRolesByGuildId } = require("../../services/role.service");
const { getProjectByGuild } = require("../../services/project.service");
const { getContract } = require("../../blockchain");

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
    // const role = await getRolesByGuildId(discordGuildId);
    await createNewHolder(
      nftAddress,
      discordId,
      walletAddress,
      balance,
      new Date().getTime(),
      true
    );

    //set ROLE INSIDE BOT
    // const roleData = parseDataObject(role);
    // console.log("role data", roleData[0].role);
    // await setRole(client, discordGuildId, discordId, roleData[0].role);

    const logs = {
      nftAddress,
      discordGuildId,
      discordId,
      balance,
      role: roleData.role,
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
