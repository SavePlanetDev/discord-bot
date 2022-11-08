const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class NFTData extends Model {}

NFTData.init(
  {
    nftAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tokenId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize }
);

module.exports = NFTData;
