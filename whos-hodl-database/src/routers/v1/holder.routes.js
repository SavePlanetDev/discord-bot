const express = require("express");
const {
  newHolder,
  holder,
  allHolders,
  allHoldersByNft,
  updateHolderById,
  updateVerify,
  updateBalance,
  deleteHolderById,
  holderByWallet,
} = require("../../controllers/holder.controller");

const {
  verifyHolder,
} = require("../../controllers/aggregates/verify.controller");

const router = express.Router();

//@NON: holder routes

router.get("/", allHolders);
//NEW
router.get("/wallet/:wallet/:nftAddress", holderByWallet);
router.get("/:nftAddress", allHoldersByNft);
router.get("/:nftAddress/:discordId", holder);
router.put("/:nftAddress/:discordId", updateHolderById);
router.delete("/:nftAddress/:discordId", deleteHolderById);
router.post("/new", newHolder);
router.post("/verify", verifyHolder);
router.put("/verify/:nftAddress/:discordId", updateVerify);
router.put("/balance/:nftAddress/:discordId", updateBalance);

module.exports = router;
