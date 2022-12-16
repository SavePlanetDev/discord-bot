const HolderDependencies = require("../models/holder.d.model");

const addToDependency = async (address, wallet, nftAddress, tokenId) => {
  const [result, created] = await HolderDependencies.findOrCreate({
    where: { tokenId },
    defaults: {
      tokenId,
      wallet,
      address,
      nftAddress,
      timestamp: new Date().getTime(),
    },
  });
  if (created) {
    return result;
  } else {
    return null;
  }
};

const removeFromDependency = async (tokenId) => {
  const result = await HolderDependencies.destroy({ where: { tokenId } });
  return result <= 0 ? false : true;
};

const getHowManyInSideOf = async (address, wallet) => {
  const result = await HolderDependencies.count({ where: { address, wallet } });
  return result;
};

module.exports = {
  addToDependency,
  removeFromDependency,
  getHowManyInSideOf,
};
