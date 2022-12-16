const Project = require("../models/project.model");

const getAllProjects = async () => {
  const result = await Project.findAll();
  const output = result.map((d) => {
    return d.dataValues;
  });

  return result.length <= 0 ? [] : output;
};

const getProjectByGuildId = async (discordGuildId) => {
  const result = await Project.findOne({ where: { discordGuildId } });
  console.log(result);
  return result ? result.dataValues : null;
};

module.exports = {
  getAllProjects,
  getProjectByGuildId,
};
