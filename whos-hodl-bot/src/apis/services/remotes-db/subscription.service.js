const axios = require("axios");
const {
  day_in_sec,
  remote_database,
} = require("../../../constants/database.config");
const baseRoute = "/subscription/subscribe";

/**
 *
 * @param {string} discordGuildId
 * @param {string} ownerDiscordId
 * @param {string} ownerWallet
 * @param {number} planId
 * @param {number} start
 * @param {number} end
 * @param {bool} expired
 */

const createNewSubscription = async (
  discordGuildId,
  ownerDiscordId,
  ownerWalletAddress,
  planId,
  planPeriod,
  start
) => {
  //@NON: calcuate unixtime stamp of next ending period of the package
  const end = start + planPeriod * day_in_sec;
  const response = await axios
    .post(`${remote_database}/${baseRoute}/new`, {
      discordGuildId,
      ownerDiscordId,
      ownerWalletAddress,
      planId,
      start,
      end,
      //@NON: started with expired false
      expired: false,
    })
    .catch((e) => console.log("createNewSubscription: ", e.message));

  console.log("createNewSubscription ", response);

  return response.data.data;
};

// const getAllSubscription = async () => {
//   const results = await Subscription.findAll();
//   return results;
// };

// const getExpiredSubscriptions = async () => {
//   const result = await Subscription.findAll({ where: { expired: true } });
//   return result;
// };
// const getUnexpiredSubscriptions = async () => {
//   const result = await Subscription.findAll({ where: { expired: false } });
//   return result;
// };

// /**
//  *
//  * @param {string} discordGuildId
//  */
// const getSubscriptionByGuildId = async (discordGuildId) => {
//   const result = await Subscription.findOne({ where: { discordGuildId } });
//   return result;
// };
// /**
//  *
//  * @param {string} ownerDiscordId
//  */
// const getSubscriptionsByDiscordId = async (ownerDiscordId) => {
//   const results = await Subscription.findAll({ where: { ownerDiscordId } });
//   return results;
// };

// const updateSubscription = async (discordGuildId, data) => {
//   await Subscription.update(data, { where: { discordGuildId } });
// };

// const deleteSubscriptionByGuildId = async (discordGuildId) => {
//   await Subscription.delete({ where: discordGuildId });
// };
// const deleteSubscriptionsByDiscordId = async (ownerDiscordId) => {
//   await Subscription.delete({ where: ownerDiscordId });
// };

module.exports = {
  createNewSubscription,
  //   getAllSubscription,
  //   getExpiredSubscriptions,
  //   getUnexpiredSubscriptions,
  //   getSubscriptionByGuildId,
  //   getSubscriptionsByDiscordId,
  //   updateSubscription,
  //   deleteSubscriptionByGuildId,
  //   deleteSubscriptionsByDiscordId,
};
