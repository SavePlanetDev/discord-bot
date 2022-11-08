const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Plan extends Model {}

Plan.init(
  {
    planId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    planName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    //@NON : Pricing in USDT ?
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  { sequelize, }
);

module.exports = Plan;
