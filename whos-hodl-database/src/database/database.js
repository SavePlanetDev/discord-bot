require("dotenv").config();
// const basePath = process.cwd();
const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: `${basePath}/src/database/db-files/db.sqlite`,
// });

const sequelize = new Sequelize("whoshodl", "non", "apolloteam", {
  host: "host.docker.internal",
  port: 5432,
  dialect: "postgres"
});

module.exports = sequelize;
