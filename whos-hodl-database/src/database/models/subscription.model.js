const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Subscription extends Model {}

Subscription.init(
  {
    discordGuildId: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    ownerDiscordId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ownerWalletAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    planId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    end: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expired: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = Subscription;
