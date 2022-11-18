const catchAsync = require("../../utils/catchAcsync");
const client = require("../../../discord/discord.client");
const { createNewHolder } = require("../../services/remotes-db/holder.service");
const { getRolesByGuildId } = require("../../services/remotes-db/role.service");
const {
  getProjectByGuild,
} = require("../../services/remotes-db/project.service");
const { setRole } = require("../../../discord/handlers/role.handler");
const { getContract } = require("../../../blockchain");
const AppError = require("../../utils/AppError");
const { responseData } = require("../../utils/response");

const verifyHolder = catchAsync(async ({ body }, res, next) => {
  const { walletAddress, discordId, discordGuildId } = body;
  const { nftAddress, roles } = await getProjectByGuild(discordGuildId).catch(
    (e) =>
      next(
        new AppError(`get project by guild Id ${discordGuildId} failed`),
        500,
        "verifyHolder"
      )
  );
  const contract = getContract(nftAddress);
  const balance = (await contract.balanceOf(walletAddress)).toString();

  if (balance <= 0) {
    return next(
      new AppError(
        `no balace of nft ${nftAddress} in wallet ${walletAddress}`,
        404,
        "verifyHolder"
      )
    );
  } else {
    const holder = await createNewHolder(
      nftAddress,
      discordId,
      walletAddress,
      balance,
      new Date().getTime(),
      true
    ).catch((e) =>
      next(new AppError(`create new holder failed.`, 500, "verifyHolder"))
    );

    await setRole(client, discordGuildId, discordId, roles[0]).catch((e) =>
      next(new AppError("set Role failed", 500, "verifyHolder"))
    );

    const logs = {
      nftAddress,
      discordGuildId,
      discordId,
      balance,
      role: roles[0],
    };

    //response
    return !holder
      ? next(new AppError("cannot create new holder", 403, "verifyHolder"))
      : responseData(
          res,
          logs,
          201,
          "verifyHolder",
          `holder ${discordId} verfied with nft ${nftAddress}`
        );
  }
});

module.exports = {
  verifyHolder,
};
