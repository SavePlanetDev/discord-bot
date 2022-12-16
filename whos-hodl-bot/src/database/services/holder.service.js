const Holder = require("../models/holder.model");

const createNewHolder = async (
  nftAddress,
  discordId,
  walletAddress,
  balance,
  timestamp,
  verified
) => {
  const [newHolder, created] = await Holder.findOrCreate({
    where: { discordId, nftAddress },
    defaults: {
      nftAddress,
      discordId,
      walletAddress,
      balance,
      timestamp,
      verified,
    },
  }).catch((e) => console.log("Error", e.message));

  if (created) {
    return newHolder;
  } else {
    return null;
  }
};

const getHolderByWallet = async (wallet, nftAddress) => {
  console.log({ wallet, nftAddress });
  const result = await Holder.findOne({
    where: { walletAddress: wallet, nftAddress },
  });

  return result === undefined ? null : result.dataValues;
};

const isExisted = async (discordId, nftAddress) => {
  const result = await Holder.findOne({ where: { discordId, nftAddress } });
  return !result ? false : true;
};

const apiUpdateVerificationState = async (
  nftAddress,
  discordId,
  balance,
  walletAddress,
  verified
) => {
  const result = await Holder.update(
    { balance, verified, walletAddress, timestamp: new Date().getTime() },
    { where: { nftAddress, discordId } }
  );

  return result < 0 ? false : true;
};

module.exports = {
  isExisted,
  createNewHolder,
  apiUpdateVerificationState,
  getHolderByWallet,
};
