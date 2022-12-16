const { Model, DataTypes } = require("sequelize");
const sequelize = require("../");

class HolderDependencies extends Model {}

HolderDependencies.init(
  {
    tokenId: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    wallet: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nftAddress: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = HolderDependencies;
