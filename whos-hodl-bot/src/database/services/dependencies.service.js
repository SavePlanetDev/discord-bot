const Dependencies = require("../models/dependencies.model");

const getAllDependencies = async () => {
  const result = await Dependencies.findAll();
  return result.length <= 0 ? [] : result;
};

const getDependencyByAddress = async (address) => {
  const result = await Dependencies.findOne({ where: { address: address } });
  return result == undefined ? null : result.dataValues;
};

module.exports = {
  getAllDependencies,
  getDependencyByAddress,
};
