const { Model, DataTypes } = require("sequelize");
const sequelize = require("../");

class Project extends Model {}

Project.init(
  {
    nftAddress: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    ownerDiscordId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    discordGuildId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ownerWalletAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    projectName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    totalSupply: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    symbol: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    website: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    facebook: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    twitter: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    discordInviteLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    etherscan: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    planId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roles: {
      type: DataTypes.ARRAY(DataTypes.STRING(255)),
      allowNull: false,
    },
    messages: {
      type: DataTypes.ARRAY(DataTypes.STRING(255)),
      allowNull: true,
    },
  },
  { sequelize }
);

module.exports = Project;
