const axios = require("axios");
const { remote_database } = require("../../../constants/database.config");
const baseRoute = "role";

/**
 *
 * @param {string} discordGuildId
 * @param {string} roleName
 * @param {number} level
 * @returns
 */

const createRole = async (discordGuildId, roleName, level) => {
  const response = await axios.post(`${remote_database}/${baseRoute}/new`, {
    discordGuildId,
    roleName,
    level,
  });

  return response.data.data;
};

const getRolesByGuildId = async (discordGuildId) => {
  const response = await axios.get(
    `${remote_database}/${baseRoute}/${discordGuildId}`
  );

  return response.data.data;
};

const updateRole = async (discordGuildId, roleName, data) => {
  const response = await axios.put(
    `${remote_database}/${baseRoute}/${discordGuildId}`,
    { discordGuildId, roleName, data }
  );

  return response.data;
};

// const deleteRole = async (discordGuildId, roleName) => {
//   await Role.deleteRole({ where: { discordGuildId, roleName } });
// };

module.exports = {
  createRole,
  getRolesByGuildId,
  updateRole,
  //   deleteRole,
};
