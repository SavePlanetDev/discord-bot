require("dotenv").config();
const { Sequelize } = require("sequelize");
const { production, postgres_db, postgres_user, postgres_pwd, postgres_port } =
  process.env;

const sequelize = new Sequelize(
  production == "PROD" ? postgres_db : postgres_db,
  postgres_user,
  postgres_pwd,
  {
    host:
      production === "PROD" ? "host.docker.internal" : "host.docker.internal",
    port: postgres_port,
    dialect: "postgres",
  }
);

module.exports = sequelize;
