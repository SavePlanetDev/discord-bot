const catchAsync = require("../utils/catchAcsync");
const {
  createNewSubscription,
  getAllSubscription,
  getExpiredSubscriptions,
  getUnexpiredSubscriptions,
  getSubscriptionByGuildId,
  getSubscriptionsByDiscordId,
  updateSubscription,
  deleteSubscriptionByGuildId,
  deleteSubscriptionsByDiscordId,
} = require("../services/subscription.service");

const { getPlanById } = require("../services/plan.services");
const AppError = require("../utils/AppError");
const { responseData } = require("../utils/response");

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

const addNewSubscription = catchAsync(async (req, res, next) => {
  const { discordGuildId, ownerDiscordId, ownerWalletAddress, planId, start } =
    req.body;
  const { period } = await getPlanById(planId, ["period"]);
  if (period <= 0) {
    return next(
      new AppError(`planId ${planId} not found`, 404, "addNewSubscription")
    );
  } else {
    const result = await createNewSubscription(
      discordGuildId,
      ownerDiscordId,
      ownerWalletAddress,
      planId,
      period,
      start
    ).catch((e) =>
      next(
        new AppError(
          `create new subscription failed`,
          500,
          "createNewSubscription"
        )
      )
    );

    return !result
      ? next(
          new AppError(
            `cannot add new subscription`,
            403,
            "createNewSubscription"
          )
        )
      : responseData(
          res,
          result,
          200,
          "createNewSubscription",
          "create new subscriotion OK"
        );
  }
});

const getSubscriptions = catchAsync(async (req, res, next) => {
  const results = await getAllSubscription().catch((e) =>
    next(new AppError("get subscription data failed.", 500, "getSubscriptions"))
  );

  return results.length <= 0
    ? next(
        new AppError(`cannot get subscription data`, 403, "getSubscriptions")
      )
    : responseData(
        res,
        results,
        200,
        "getSubscriptions",
        "get all subscription OK"
      );
});

const getSubscriptionByDiscordGuildId = catchAsync(async (req, res, next) => {
  const { discordGuildId } = req.params;
  const subscribe = await getSubscriptionByGuildId(discordGuildId).catch((e) =>
    next(
      new AppError(
        `get subscription by guild Id ${discordGuildId} failed`,
        500,
        "getSubscriptionByDiscordGuilId"
      )
    )
  );

  return !subscribe
    ? next(
        new AppError(
          `subscription of guildId ${discordGuildId} not found`,
          404,
          "getSubscriptionsByDiscordGuildId"
        )
      )
    : responseData(
        res,
        subscribe,
        200,
        "getSubcriptionsByDiscordId",
        "get subscriptions data OK"
      );
});

const getSubscriptionByOwnerDiscordId = catchAsync(async (req, res, next) => {
  const { ownerDiscordId } = req.params;
  const subscribes = await getSubscriptionsByDiscordId(ownerDiscordId).catch(
    next(
      new AppError(
        `get subscription by owner ${ownerDiscordId} failed`,
        500,
        "getSubscriptionsByOwnerDiscordId"
      )
    )
  );

  return subscribes.length <= 0
    ? next(
        new AppError(
          `subscription data of ${ownerDiscordId} not found`,
          404,
          "getSubscriptionsByOwnerDiscordId"
        )
      )
    : responseData(
        res,
        subscribes,
        200,
        "getSubscriptionsByOwnerDiscordId",
        `get scriptions of ${ownerDiscordId} OK`
      );
});

const updateSubscriptionStatus = catchAsync(async (req, res, next) => {
  const { discordGuildId } = req.params;
  const data = req.body;
  await updateSubscription(discordGuildId, data).catch((e) =>
    next(
      new AppError(
        `update subscription failed of guildId ${discordGuildId} failed`,
        500,
        "updateSubscription"
      )
    )
  );

  return !data
    ? next(
        new AppError(
          `cannot update subcription data of ${discordGuildId}`,
          403,
          "updateSubscriptionStatus"
        )
      )
    : responseData(
        res,
        data,
        200,
        "updateSubscriptoinStatus",
        `update subscriptons staus of ${discordGuildId} OK`
      );
});

module.exports = {
  addNewSubscription,
  getSubscriptions,
  getSubscriptionByDiscordGuildId,
  getSubscriptionByOwnerDiscordId,
  updateSubscriptionStatus,
};
