const express = require("express");
const {
  getProjects,
  getProjectByGuildId,
  getProjectByNft,
  getProjectsByOwnerId,
  getProjectByPlanId,
  addNewProject,
  updateProjectByGuildId,
  deleteProjectByGuildId,
} = require("../../controllers/project.controller");

const router = express.Router();

//@NON: Project routes

router.get("/", getProjects);
router.get("/nft/:nftAddress", getProjectByNft);
router.get("/guild/:discordGuildId", getProjectByGuildId);
router.get("/owner/:ownerDiscordId", getProjectsByOwnerId);
router.get("/plan/:planId", getProjectByPlanId);
router.put("/guild/:discordGuildId", updateProjectByGuildId);
router.post("/new", addNewProject);

module.exports = router;
