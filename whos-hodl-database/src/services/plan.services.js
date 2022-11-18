const Plan = require("../database/models/plan.model");

/**
 * create new plan
 * @param {number} planId
 * @param {string} planName
 * @param {number} price usdt
 * @param {number} period unix timestamp
 * @param {string} description allowNull
 */
const createNewPlan = async (planName, price, period, description) => {
  const [newPlan, created] = await Plan.findOrCreate({
    where: { planName },
    defaults: {
      planName,
      price,
      period,
      description,
    },
  }).catch((e) => console.log(e.message));
  if (created) {
    return newPlan;
  } else {
    return null;
  }
};

const getAllPlans = async (
  attributes = ["planId", "planName", "price", "period", "description"]
) => {
  const plans = await Plan.findAll({
    attributes,
  });
  return plans.length <= 0 ? [] : plans;
};

const getPlanById = async (
  planId,
  attributes = ["planId", "planName", "price", "period", "description"]
) => {
  const plan = await Plan.findOne({ where: { planId } }, attributes);
  return plan === undefined ? null : plan;
};

const updatePlan = async (planId, data) => {
  const result = await Plan.update(data, { where: { planId } });
  return result <= 0 ? false : true;
};

const deletePlan = async (planId) => {
  const result = await Plan.delete({ where: { planId } });
  return result <= 0 ? false : true;
};

module.exports = {
  createNewPlan,
  getAllPlans,
  getPlanById,
  updatePlan,
  deletePlan,
};
