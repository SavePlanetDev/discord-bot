require("dotenv").config();
const { Sequelize } = require("sequelize");
const { production, postgres_db, postgres_user, postgres_pwd, postgres_port } =
  process.env;

const sequelize = new Sequelize(
  production == "PROD" ? postgres_db : postgres_db,
  postgres_user,
  postgres_pwd,
  {
    host: production === "PROD" ? "host.docker.internal" : "localhost",
    port: postgres_port,
    dialect: "postgres",
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("authenticated"))
  .catch((e) => console.log(e));
sequelize
  .sync()
  .then(() => {
    console.log("DATABASE: Database Connected Successfully");
  })
  .catch((e) => console.log(e));

module.exports = sequelize;
