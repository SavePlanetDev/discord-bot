const Holder = require("../database/models/holder.model");

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
  });

  if (created) {
    return newHolder;
  } else {
    return null;
  }
};

const getAllHolders = async () => {
  const results = await Holder.findAll();
  return results.length <= 0 ? [] : results;
};

const getAllHoldersByNft = async (nftAddress) => {
  const results = await Holder.findAll({ where: { nftAddress } });
  return results.length <= 0 ? [] : results;
};

const getHolder = async (discordId, nftAddress) => {
  const result = await Holder.findOne({ where: { discordId, nftAddress } });
  return result;
};

const getHolderByWallet = async (wallet, nftAddress) => {
  const result = await Holder.findOne({ where: { discordId, nftAddress } });
  return result;
};

const updateHolder = async (discordId, nftAddress, data) => {
  const updated = await Holder.update(data, { where: { discordId, nftAddress } });
  return updated <= 0 ? false : true;
};

const updateVerifyStatus = async (discordId, nftAddress, verified) => {
  const updated = await Holder.update({ verified }, { where: { discordId, nftAddress } });
  return updated <= 0 ? false : true;
};

const updateHolderBalance = async (discordId, nftAddress, balance) => {
  const updated = await Holder.update({ balance }, { where: { discordId, nftAddress } });
  return updated <= 0 ? false : true;
};
const deleteHolder = async (discordId, nftAddress) => {
  const deleted = await Holder.delete({ where: { discordId, nftAddress } });
  return deleted <= 0 ? false : true;
};

module.exports = {
  createNewHolder,
  getAllHolders,
  getAllHoldersByNft,
  getHolder,
  getHolderByWallet,
  updateHolderBalance,
  updateVerifyStatus,
  updateHolder,
  deleteHolder,
};
