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
const { responseData } =require("../utils/response");

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
  ).catch((e) => next(new AppError("create user failed.", 403, "createNewHolder")));

  responseData(res,result, 201, 'newHolder', "New Holder Created!");
});


const holder = catchAsync(async (req, res, next) => {
  const result = await getHolder().catch((e) => next(new AppError("cannot get holder", 403, "getHolder")));

  responseData(res,result, 200, "holder", "get holder OK")
});

const holderByWallet = catchAsync(async (req, res, next) => {
  const { wallet, nftAddress } = req.params;
  const result = await getHolderByWallet(wallet, nftAddress).catch((e) => next(new AppError(`cannot get holder with wallet ${wallet}`, 403, "getHolderByWallet")));

  responseData(res,result, 200, "holderByWallet", "get holder by wallet OK");
});

const allHolders = catchAsync(async (req, res, next) => {
  const results = await getAllHolders().catch((e) => next(new AppError("get all holder failed", 403, "getAllHolders")));

  responseData(res,results, 200, "allHolders", "get all holders OK");
});

const allHoldersByNft = catchAsync(async (req, res, next) => {
  const { nftAddress } = req.params;
  const results = await getAllHoldersByNft(nftAddress).catch((e) => next(new AppError(`get all holders by nft ${nftAddress}`, 403, "getAllHolderByNft")));

  responseData(res,results, 200, "allHoldersByNft", `get all holder by ${nftAddress} OK`);
});

const updateHolderById = catchAsync(async (req, res, next) => {
  const { discordId, nftAddress } = req.params;
  const data = req.body;
  await updateHolder(discordId, nftAddress, data).catch((e) =>
  next(new AppError(`update holder with user ${discordId} failed.`, 403, "updateHolder"))
  );

  responseData(res,discordId, 200, "updateHolderById", "holder update OK");
});

const updateVerify = catchAsync(async (req, res, next) => {
  const { discordId, nftAddress } = req.params;
  const { verified } = req.body;
  await updateVerifyStatus(discordId, nftAddress, verified).catch((e) =>
  next(new AppError("update verified status failed", 403, "updateVerifyStatus"))
  );

  responseData(res,discordId, 200, "updateVerify", `holder with id ${discordId} update OK`);
});

const updateBalance = catchAsync(async (req, res, next) => {
  const { discordId, nftAddress } = req.params;
  const { balance } = req.body;
  await updateHolderBalance(discordId, nftAddress, balance).catch((e) =>
  next(new AppError(`update balance of ${discordId} for nft ${nftAddress} failed.`, 403, "updateHolderBalance"))
  );
  responseData(res,discordId, 200, "updateBalance", `update balance of ${discordId} for nft ${nftAddress} tobe ${balance} OK`);
});

const deleteHolderById = catchAsync(async (req, res, next) => {
  const { discordId, nftAddress } = req.params;
  await deleteHolder(discordId, nftAddress).catch((e) =>
    next(new AppError(`delete holder with id ${discordId}, failed.`, 403, "deleteHolder"))
  );
  responseData(res,discordId, 200, "deleteHolderById", `holder id ${discordId} deleted from nft ${nftAddress} OK`);
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
