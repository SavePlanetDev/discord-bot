const {
  createNewHolder,
  getHolder,
  getAllHolders,
  getAllHoldersByNft,
  updateHolder,
  updateVerifyStatus,
  updateHolderBalance,
  deleteHolder,
  getHolderByWallet,
} = require("../services/holder.service");
const catchAsync = require("../utils/catchAcsync");
const AppError = require("../utils/AppError");
const { responseData } = require("../utils/response");

/**
 *
 * @param {string} nftAddress
 * @param {string} discordId
 * @param {string} walletAddress
 * @param {string} balance
 * @param {number} timestamp
 * @param {boolean} verified
 * @returns
 */

const newHolder = catchAsync(async (req, res, next) => {
  const { nftAddress, discordId, walletAddress, balance, timestamp, verified } =
    req.body;

  const result = await createNewHolder(
    nftAddress,
    discordId,
    walletAddress,
    balance,
    timestamp,
    verified
  ).catch((e) =>
    next(new AppError("create user failed.", 500, "createNewHolder"))
  );

  return !result
    ? next(new AppError("create user failed", 403, "createNewHolder"))
    : responseData(res, result, 201, "newHolder", "New Holder Created!");
});

const holder = catchAsync(async (req, res, next) => {
  const { discordId, nftAddress } = req.params;
  const result = await getHolder(discordId, nftAddress).catch((e) =>
    next(new AppError("cannot get holder", 500, "getHolder"))
  );

  return !result
    ? next(
        new AppError(
          `holder ${discordId} not found for nft ${nftAddress} `,
          404,
          "getHolder"
        )
      )
    : responseData(res, result, 200, "holder", "get holder OK");
});

const holderByWallet = catchAsync(async (req, res, next) => {
  const { wallet, nftAddress } = req.params;
  const result = await getHolderByWallet(wallet, nftAddress).catch((e) =>
    next(
      new AppError(
        `cannot get holder with wallet ${wallet}, of nft ${nftAddress}`,
        500,
        "getHolderByWallet"
      )
    )
  );

  return !result
    ? next(
        AppError(
          `holder ${wallet} not found for nft ${nftAddress}`,
          404,
          "holderByWallet"
        )
      )
    : responseData(
        res,
        result,
        200,
        "holderByWallet",
        "get holder by wallet OK"
      );
});

const allHolders = catchAsync(async (req, res, next) => {
  const results = await getAllHolders().catch((e) =>
    next(new AppError("get all holder failed", 500, "getAllHolders"))
  );

  return results.length <= 0
    ? next(new AppError("not found.", 404, "getAllHolders"))
    : responseData(res, results, 200, "allHolders", "get all holders OK");
});

const allHoldersByNft = catchAsync(async (req, res, next) => {
  const { nftAddress } = req.params;
  const results = await getAllHoldersByNft(nftAddress).catch((e) =>
    next(
      new AppError(
        `get all holders by nft ${nftAddress}`,
        500,
        "getAllHolderByNft"
      )
    )
  );

  return results.length <= 0
    ? next(
        new AppError(`no holders for nft ${nftAddress}`, 404, "allHoldersByNft")
      )
    : responseData(
        res,
        results,
        200,
        "allHoldersByNft",
        `get all holder by ${nftAddress} OK`
      );
});

const updateHolderById = catchAsync(async (req, res, next) => {
  const { discordId, nftAddress } = req.params;
  const data = req.body;
  const result = await updateHolder(discordId, nftAddress, data).catch((e) =>
    next(
      new AppError(
        `update holder with user ${discordId} failed.`,
        500,
        "updateHolder"
      )
    )
  );

  return !result == false
    ? next(new AppError(`nothing updated ...`, 403, "updateHolderById"))
    : responseData(res, discordId, 200, "updateHolderById", "holder update OK");
});

const updateVerify = catchAsync(async (req, res, next) => {
  const { discordId, nftAddress } = req.params;
  const { verified } = req.body;
  const result = await updateVerifyStatus(
    discordId,
    nftAddress,
    verified
  ).catch((e) =>
    next(
      new AppError("update verified status failed", 500, "updateVerifyStatus")
    )
  );

  return result == false
    ? next(new AppError(`nothing updated ...`, 403, "updateVerify"))
    : responseData(
        res,
        discordId,
        200,
        "updateVerify",
        `holder with id ${discordId} update OK`
      );
});

const updateBalance = catchAsync(async (req, res, next) => {
  const { discordId, nftAddress } = req.params;
  const { balance } = req.body;
  const result = await updateHolderBalance(
    discordId,
    nftAddress,
    balance
  ).catch((e) =>
    next(
      new AppError(
        `update balance of ${discordId} for nft ${nftAddress} failed.`,
        500,
        "updateHolderBalance"
      )
    )
  );
  result == false
    ? next(AppError(`nothing updated ...`, 403, "updateBalance"))
    : responseData(
        res,
        discordId,
        200,
        "updateBalance",
        `update balance of ${discordId} for nft ${nftAddress} tobe ${balance} OK`
      );
});

const deleteHolderById = catchAsync(async (req, res, next) => {
  const { discordId, nftAddress } = req.params;
  const result = await deleteHolder(discordId, nftAddress).catch((e) =>
    next(
      new AppError(
        `delete holder with id ${discordId}, failed.`,
        500,
        "deleteHolder"
      )
    )
  );
  return result == false
    ? next(new AppError("nothing updated ...", 403, "deleteHolderById"))
    : responseData(
        res,
        discordId,
        200,
        "deleteHolderById",
        `holder id ${discordId} deleted from nft ${nftAddress} OK`
      );
});

module.exports = {
  newHolder,
  holder,
  holderByWallet,
  allHoldersByNft,
  allHolders,
  updateHolderById,
  updateVerify,
  updateBalance,
  deleteHolderById,
};
