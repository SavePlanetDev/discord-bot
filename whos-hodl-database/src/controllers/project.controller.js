const catchAsync = require("../utils/catchAcsync");
const {
  createNewProject,
  getAllProjects,
  getProjectByNftAddress,
  getProjectsByOwner,
  getProjectByGuild,
  getProjectByPlan,
  updateProject,
  deleteProject,
} = require("../services/project.service");
const AppError = require("../utils/AppError");
const { responseData } = require("../utils/response");

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
 * @param {string} twitter
 * @param {string} discordInviteLink
 * @param {string} etherscan
 */

const addNewProject = catchAsync(async (req, res, next) => {
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
  } = req.body;
  console.log({
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
    messages,
  });
  const result = await createNewProject(
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
    messages
  ).catch((e) =>
    next(new AppError(`add new project failed.`, 403, "addNewProject"))
  );

  responseData(res, result, 201, "addNewProject", "add new project OK");
});

const getProjects = catchAsync(async (req, res, next) => {
  const results = await getAllProjects().catch((e) =>
    next(new AppError(`get all project failed.`, 403, "getProjects"))
  );

  return results.length <= 0
    ? next(new AppError("not found any project", 404, "getProjects"))
    : responseData(res, results, 200, "getProjects", "get all projects OK");
});

const getProjectByNft = catchAsync(async (req, res, next) => {
  const { nftAddress } = req.params;
  const result = await getProjectByNftAddress(nftAddress).catch((e) =>
    next(
      new AppError(
        `project with ${nftAddress} not found`,
        404,
        "getProjectByNft"
      )
    )
  );

  return !result
    ? next(new AppError(`not found.`, 404, "getProejctByNftAddress"))
    : responseData(
        res,
        result,
        200,
        "getProjectByNft",
        `get project by ${nftAddress} OK`
      );
});

const getProjectsByOwnerId = catchAsync(async (req, res, next) => {
  const { ownerDiscordId } = req.params;
  const results = await getProjectsByOwner(ownerDiscordId).catch((e) =>
    next(
      new AppError(
        `get proejct by owner id ${ownerDiscordId} failed`,
        404,
        "getProjectsByOwnerId"
      )
    )
  );

  return results.length <= 0
    ? next(
        new AppError(
          `project of owner ${ownerDiscordId} not found`,
          404,
          "getProjectByOwnerId"
        )
      )
    : responseData(
        res,
        results,
        200,
        "getProjectByOwnerId",
        `get project by owner id ${ownerDiscordId} OK`
      );
});

const getProjectByGuildId = catchAsync(async (req, res, next) => {
  const { discordGuildId } = req.params;
  const result = await getProjectByGuild(discordGuildId).catch((e) =>
    next(
      new AppError(
        `get proejct by guild id ${discordGuildId} not failed.`,
        500,
        "getProjectByGuildId"
      )
    )
  );
  return !result
    ? next(
        new AppError(
          `get project by guild id ${discordGuildId} not found`,
          404,
          "getProjectByGuildId"
        )
      )
    : responseData(
        res,
        result,
        200,
        "getProjectByGuildId",
        `get project of id ${discordGuildId}`
      );
});

const getProjectByPlanId = catchAsync(async (req, res, next) => {
  const { planId } = req.params;
  const results = await getProjectByPlan(planId).catch((e) =>
    next(
      new AppError(
        `get project id by plan id ${planId} failed`,
        500,
        "getProjectByPlanId"
      )
    )
  );
  return results.length <= 0
    ? next(
        new AppError(
          `get project id by planId ${planId} not found`,
          404,
          "getProjectByPlanId"
        )
      )
    : responseData(
        res,
        results,
        200,
        "getProjectByPlanId",
        `get project by plan Id ${planId} OK`
      );
});

const updateProjectByGuildId = catchAsync(async (req, res, next) => {
  const { discordGuildId } = req.params;
  const data = req.body;
  const result = await updateProject(discordGuildId, data).catch((e) =>
    next(
      new AppError(
        `update project by guildId ${discordGuildId} failed`,
        500,
        "updateProjectByGuildId"
      )
    )
  );
  return result <= 0
    ? next(
        AppError(
          `cannot update project by guildId ${discordGuildId}`,
          403,
          "updateProjectByGuildId"
        )
      )
    : responseData(
        res,
        result,
        200,
        "updateProjectByGuildId",
        `project of guildId ${discordGuildId} updated`
      );
});

const deleteProjectByGuildId = catchAsync(async (req, res, next) => {
  const { discordGuildId } = req.params;
  const result = await deleteProject(discordGuildId).catch((e) =>
    next(
      new AppError(
        `delete project of ${discordGuildId} failed`,
        500,
        "deleteProjectByGuildId"
      )
    )
  );
  return result <= 0
    ? next(
        new AppError(
          `cannot delete project of ${discordGuildId}.`,
          403,
          "deleteProjectByGuildId"
        )
      )
    : responseData(
        res,
        result,
        200,
        "deleteProjectByGuildId",
        `project of ${discordGuildId} deleted`
      );
});

module.exports = {
  addNewProject,
  getProjects,
  getProjectByNft,
  getProjectsByOwnerId,
  getProjectByGuildId,
  getProjectByPlanId,
  updateProjectByGuildId,
  deleteProjectByGuildId,
};
