require("dotenv").config();
module.exports = {
  plan: {
    FREE: "free",
    NOOB: "noob",
    PRO: "pro",
  },
  verifyUrl:
    process.env.production == "PROD"
      ? "http://157.245.152.83:3002/"
      : "http://localhost:3000",
};
