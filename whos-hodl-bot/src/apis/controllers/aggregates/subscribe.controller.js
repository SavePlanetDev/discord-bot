const catchAsync = require("../../utils/catchAcsync");
const { getPlanById } = require("../../services/remotes-db/plan.services");
const {
  createNewProject,
} = require("../../services/remotes-db/project.service");
const {
  createNewSubscription,
} = require("../../services/remotes-db/subscription.service");

const createSubscription = catchAsync(async ({ params, body }, res) => {
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
  } = body;

  //get plan data
  const plan = await getPlanById(planId).catch((e) =>
    next(new AppError(`get plan of ${plan} failed.`, 500, "createSubscription"))
  );

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
    plan.planId,
    roles
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
    plan.planId,
    plan.period,
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
  // const subResult = parseDataObject(subscription);
  // const projResult = parseDataObject(project);
  // const planResult = parseDataObject(plan);

  const logs = {
    ...subscription,
    ...project,
    ...plan,
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
