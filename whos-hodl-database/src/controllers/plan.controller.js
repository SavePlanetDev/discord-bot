const catchAsync = require("../utils/catchAcsync");
const {
  createNewPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
  deletePlan,
} = require("../services/plan.services");
const { responseData } = require("../utils/response");
const AppError = require("../utils/AppError");

/**
 * create new plan
 * @param {number} planId
 * @param {string} planName
 * @param {number} price usdt
 * @param {number} period unix timestamp
 * @param {string} description allowNull
 */
const addNewPlan = catchAsync(async (req, res, next) => {
  const { planName, price, period, description } = req.body;
  const newPlan = await createNewPlan(
    planName,
    price,
    period,
    description
  ).catch((e) =>
    next(new AppError(`create new plan error`, 500, "createNewPlan"))
  );

  return !newPlan
    ? next(new AppError(`cannot create new plan`, 403, "addNewPlan"))
    : responseData(res, newPlan, 201, "addNewPlan", "new plan added OK");
});
const getPlanList = catchAsync(async (req, res, next) => {
  const list = await getAllPlans().catch((e) =>
    next(new AppError("get plan list failed", 500, "getPlanList"))
  );

  return list.length <= 0
    ? next(new AppError("no plans", 404, "getPlanList"))
    : responseData(res, list, 200, "getPlanList", "get plan list OK");
});

const getPlan = catchAsync(async (req, res, next) => {
  const { planId } = req.params;
  const plan = await getPlanById(planId).catch((e) =>
    next(new AppError("get plan failed", 500, "getPlan"))
  );

  return !plan
    ? next(new AppError(`plan id ${planId} not found.`, 404, "getPlan"))
    : responseData(res, plan, 200, "getPlan", `get planId ${planId} OK`);
});

module.exports = {
  addNewPlan,
  getPlanList,
  getPlan,
};
