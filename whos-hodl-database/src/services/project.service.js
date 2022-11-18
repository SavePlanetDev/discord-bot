const Project = require("../database/models/project.model");

/**
 *
 * @param {string} nftAddress
 * @param {string} ownerDiscordId
 * @param {string} discordGuildId
 * @param {string} ownerWalletAddress
 * @param {string} projectName
 * @param {number} totalSupply
 * @param {string} symbol
 * @param {string} website
 * @param {string} facebook
 * @param {string} discordInviteLink
 * @param {string} etherscan
 * @param {integer} planId
 * @param {Array(string)} roles[]
 * @param {Array(string)} messages[]
 */

const createNewProject = async (
  nftAddress,
  ownerDiscordId,
  discordGuildId,
  ownerWalletAddress,
  projectName,
  totalSupply,
  symbol,
  website,
  facebook,
  twitter,
  discordInviteLink,
  etherscan,
  planId,
  //new
  roles,
  messages = []
) => {
  const [newProject, created] = await Project.findOrCreate({
    where: { discordGuildId },
    defaults: {
      nftAddress,
      ownerDiscordId,
      discordGuildId,
      ownerWalletAddress,
      projectName,
      totalSupply,
      symbol,
      website,
      facebook,
      twitter,
      discordInviteLink,
      etherscan,
      planId,
      //new
      roles,
      messages,
    },
  });
  if (created) {
    return newProject;
  }
};

const getAllProjects = async () => {
  const results = await Project.findAll();
  return results.length <= 0 ? [] : results;
};

const getProjectByGuild = async (discordGuildId) => {
  const results = await Project.findOne({ where: { discordGuildId } });
  return results === undefined ? [] : results;
};

const getProjectByNftAddress = async (nftAddress) => {
  const results = await Project.findOne({ where: { nftAddress } });
  return results === undefined ? [] : results;
};

const getProjectsByOwner = async (ownerDiscordId) => {
  const results = await Project.findAll({ where: { ownerDiscordId } });
  return results.length <= 0 ? [] : results;
};

const getProjectByPlan = async (planId) => {
  const results = await Project.findAll({ where: { planId } }).catch(
    (e) => e.message
  );
  return results.length <= 0 ? [] : results;
};

//@NON get all roles
const getRolesByNftAddress = async (nftAddress) => {
  const results = await Project.findAll({ roles }, { where: { nftAddress } });
  return results.length ? [] : results;
};

//@NON get all roles
const getRolesByGuildId = async (discordGuildId) => {
  const result = await Project.find({ roles }, { where: { discordGuildId } });
  return result === undefined ? [] : result;
};

const updateProject = async (nftAddress, data) => {
  const result = await Project.update(data, { where: { nftAddress } });
  return result <= 0 ? false : true;
};

const deleteProject = async (nftAddress) => {
  const result = await Project.delete({ where: { nftAddress } });
  return result <= 0 ? false : true;
};

module.exports = {
  createNewProject,
  getAllProjects,
  getProjectByGuild,
  getProjectByNftAddress,
  getProjectsByOwner,
  getProjectByPlan,
  getRolesByGuildId,
  getRolesByNftAddress,
  updateProject,
  deleteProject,
};
