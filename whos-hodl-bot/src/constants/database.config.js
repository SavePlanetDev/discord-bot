require("dotenv").config();
module.exports = {
  day_in_sec: 86400,
  month_in_sec: 2629743,
  remote_database:
    process.env.production == "PROD"
      ? "http://157.245.152.83:3003/v1"
      : "http://localhost:3003/v1",
};
