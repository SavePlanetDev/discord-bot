require("dotenv").config();
const { Sequelize } = require("sequelize");
const { production } = process.env;

const sequelize = new Sequelize("whoshodl", "non", "apolloteam", {
  host: production === "PROD" ? "host.docker.internal" : "157.245.152.83",
  port: 5432,
  dialect: "postgres",
});

module.exports = sequelize;
