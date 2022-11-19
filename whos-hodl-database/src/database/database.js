require("dotenv").config();
const { Sequelize } = require("sequelize");
const { production } = process.env;

const sequelize = new Sequelize(
  production == "PROD" ? "whos-hodl" : "whos-hodl",
  "non",
  "apollo2022team@-<A",
  {
    host:
      production === "PROD" ? "host.docker.internal" : "host.docker.internal",
    port: 5432,
    dialect: "postgres",
  }
);

module.exports = sequelize;
