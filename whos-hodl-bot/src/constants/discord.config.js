require("dotenv").config();
module.exports = {
  plan: {
    FREE: "free",
    NOOB: "noob",
    PRO: "pro",
  },
  verifyUrl:
    process.env.production == "PROD"
      ? "http://68.183.176.4:3002/"
      : "http://localhost:3000",
};
