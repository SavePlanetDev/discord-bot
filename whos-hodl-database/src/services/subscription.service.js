const Subscription = require("../database/models/subscription.model");
const config = require("../constants/database.config");

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
  const end = start + planPeriod * config.day_in_sec;
  const [result, created] = await Subscription.findOrCreate({
    where: { discordGuildId },
    defaults: {
      discordGuildId,
      ownerDiscordId,
      ownerWalletAddress,
      planId,
      start,
      end,
      //@NON: started with expired false
      expired: false,
    },
  }).catch((e) => console.log("ERROR !!", e.message));
  if (created) {
    return result;
  } else {
    return null;
  }
};

const getAllSubscription = async () => {
  const results = await Subscription.findAll();
  return results.length <= 0 ? [] : results;
};

const getExpiredSubscriptions = async () => {
  const result = await Subscription.findAll({ where: { expired: true } });
  return result.length <= 0 ? [] : result;
};
const getUnexpiredSubscriptions = async () => {
  const result = await Subscription.findAll({ where: { expired: false } });
  return result.length <= 0 ? [] : result;
};

const getSubscriptionByGuildId = async (discordGuildId) => {
  const result = await Subscription.findOne({ where: { discordGuildId } });
  return result == undefined ? null : result;
};

const getSubscriptionsByDiscordId = async (ownerDiscordId) => {
  const results = await Subscription.findAll({ where: { ownerDiscordId } });
  return results.length <= 0 ? [] : results;
};

const updateSubscription = async (discordGuildId, data) => {
  const result = await Subscription.update(data, { where: { discordGuildId } });
  return result <= 0 ? false : true;
};

const deleteSubscriptionByGuildId = async (discordGuildId) => {
  const result = await Subscription.delete({ where: discordGuildId });
  return result <= 0 ? false : true;
};
const deleteSubscriptionsByDiscordId = async (ownerDiscordId) => {
  const result = await Subscription.delete({ where: ownerDiscordId });
  return result <= 0 ? false : true;
};

module.exports = {
  createNewSubscription,
  getAllSubscription,
  getExpiredSubscriptions,
  getUnexpiredSubscriptions,
  getSubscriptionByGuildId,
  getSubscriptionsByDiscordId,
  updateSubscription,
  deleteSubscriptionByGuildId,
  deleteSubscriptionsByDiscordId,
};
