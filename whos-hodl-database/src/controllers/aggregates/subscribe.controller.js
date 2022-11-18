const catchAsync = require("../../utils/catchAcsync");
const { getPlanById } = require("../../services/plan.services");
const { createNewProject } = require("../../services/project.service");
const {
  createNewSubscription,
} = require("../../services/subscription.service");

const { parseDataObject } = require("../../utils/parseSqliteObject");
const AppError = require("../../utils/AppError");
const { responseData } = require("../../utils/response");

const createSubscription = catchAsync(async ({ params, body }, res, next) => {
  const {
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
    roles,
    messages = [],
  } = body;
  //get plan data
  const plan = await getPlanById(planId).catch((e) =>
    next(new AppError(`get plan of ${plan} failed.`, 500, "createSubscription"))
  );

  console.log(body);

  const planResult = parseDataObject(plan);

  //create proejct
  const project = await createNewProject(
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
    planResult.planId,
    JSON.parse(roles),
    messages
  ).catch((e) =>
    next(
      new AppError(
        `create project for subscription failed`,
        500,
        "createNewSubscription"
      )
    )
  );

  //create subscription
  const subscription = await createNewSubscription(
    discordGuildId,
    ownerDiscordId,
    ownerWalletAddress,
    planResult.planId,
    planResult.period,
    new Date().getTime()
  ).catch((e) =>
    next(
      new AppError(
        `create new subscription failed`,
        500,
        "createNewSubscription"
      )
    )
  );
  //add role
  const subResult = parseDataObject(subscription);
  const projResult = parseDataObject(project);

  const logs = {
    ...projResult,
    ...subResult,
    ...planResult,
  };

  return !subscription
    ? next(
        new AppError("create subscription failed", 500, "createNewSubscription")
      )
    : responseData(res, logs, 201, "createNewSubscription");
});

module.exports = {
  createSubscription,
};
