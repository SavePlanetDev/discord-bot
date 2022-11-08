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
const addNewPlan = catchAsync(async (req, res) => {
  const { planName, price, period, description } = req.body;
  const newPlan = await createNewPlan(planName, price, period, description).catch(e => next(new AppError(`create new plan error`, 403, "createNewPlan")));

  responseData(res, newPlan, 201, "addNewPlan", "new plan added OK");
});
const getPlanList = catchAsync(async (req, res) => {
  const list = await getAllPlans();
  res.status(200).json({
    result: "OK",
    count: list.length,
    data: list,
  });
  
});

const getPlan = catchAsync(async (req, res) => {
  const { planId } = req.params;
  const plan = await getPlanById(planId);
  res.status(200).json({
    result: "OK",
    data: plan,
  });
});

module.exports = {
  addNewPlan,
  getPlanList,
  getPlan,
};
