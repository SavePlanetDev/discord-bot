const axios = require("axios");
const { remote_database } = require("../../../constants/database.config");
const baseRoute = "subscription/plan";
/**
 * create new plan
 * @param {number} planId
 * @param {string} planName
 * @param {number} price usdt
 * @param {number} period unix timestamp
 * @param {string} description allowNull
 */

const getPlanById = async (planId) => {
  const response = await axios
    .get(`${remote_database}/${baseRoute}/${planId}`)
    .catch((e) => console.log("getPlanById: ", e.message));

  return response.data.data;
};

module.exports = {
  getPlanById,
};
