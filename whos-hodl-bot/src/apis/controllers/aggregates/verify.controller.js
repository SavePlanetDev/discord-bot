const catchAsync = require("../../utils/catchAcsync");
const client = require("../../../discord/discord.client");

const {
  createNewHolder,
} = require("../../../database/services/holder.service");
const {
  getProjectByGuildId,
} = require("../../../database/services/project.service");
const { setRole } = require("../../../discord/handlers/role.handler");
const { getContract } = require("../../../blockchain");
const AppError = require("../../utils/AppError");
const { responseData } = require("../../utils/response");
const {
  isExisted,
  apiUpdateVerificationState,
} = require("../../../database/services/holder.service");

const verifyHolder = catchAsync(async ({ body }, res, next) => {
  const { walletAddress, discordId, discordGuildId } = body;
  const { nftAddress, roles } = await getProjectByGuildId(discordGuildId).catch(
    (e) =>
      next(
        new AppError(`get project by guild Id ${discordGuildId} failed`),
        500,
        "verifyHolder"
      )
  );

  const contract = getContract(nftAddress);
  const balance = (await contract.balanceOf(walletAddress)).toString();
  const existed = await isExisted(discordId, nftAddress);

  if (balance <= 0) {
    return next(
      new AppError(
        `no balace of nft ${nftAddress} in wallet ${walletAddress}`,
        404,
        "verifyHolder"
      )
    );
  } else if (!existed && balance > 0) {
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
  } else {
    const updateLogs = {
      nftAddress,
      discordGuildId,
      discordId,
      balance,
      role: roles[0],
    };

    const result = apiUpdateVerificationState(
      nftAddress,
      discordId,
      balance,
      walletAddress,
      true
    );

    if (!result) {
      return next(
        new AppError("cannot update verification status", 500, "verifyHolder")
      );
    }
    await setRole(client, discordGuildId, discordId, roles[0]).catch((e) =>
      next(new AppError("set Role failed", 500, "verifyHolder"))
    );
    return !result
      ? next(new AppError("cannot create new holder", 403, "verifyHolder"))
      : responseData(
          res,
          updateLogs,
          200,
          "verifyHolder",
          `holder ${discordId} verification status updated with nft ${nftAddress}`
        );
  }
});

module.exports = {
  verifyHolder,
};
