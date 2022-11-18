const axios = require("axios");
const { remote_database } = require("../../../constants/database.config");
const baseRoute = "project";

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
  planId
) => {
  const response = await axios
    .post(`${remote_database}/${baseRoute}/new`, {
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
    })
    .catch((e) => console.log("createNewProject: ", e.message));

  return response.data.data;
};

const getAllProjects = async () => {
  const response = await axios.get(`${remote_database}/${baseRoute}`);
  return response.data.data;
};

const getProjectByGuild = async (discordGuildId) => {
  const response = await axios
    .get(`${remote_database}/${baseRoute}/guild/${discordGuildId}`)
    .catch((e) => console.log("ERROR!", e.message));

  return response.data.data;
};

const getProjectByNftAddress = async (nftAddress) => {
  const response = await axios.get(
    `${remote_database}/${baseRoute}/nft/${nftAddress}`
  );
  return response.data.data;
};

const getProjectsByOwner = async (ownerDiscordId) => {
  const response = await axios.get(
    `${remote_database}/${baseRoute}/owner/${ownerDiscordId}`
  );

  return response.data.data;
};

const getProjectByPlan = async (planId) => {
  const response = await axios.get(
    `${remote_database}/${baseRoute}/plan/${planId}`
  );

  return response.data.data;
};

// const updateProject = async (nftAddress, data) => {
//   await Project.update(data, { where: nftAddress });
// };

// const deleteProject = async (nftAddress) => {
//   await Project.delete({ where: nftAddress });
// };

module.exports = {
  createNewProject,
  getAllProjects,
  getProjectByGuild,
  getProjectByNftAddress,
  getProjectsByOwner,
  getProjectByPlan,
  //   updateProject,
  //   deleteProject,
};
