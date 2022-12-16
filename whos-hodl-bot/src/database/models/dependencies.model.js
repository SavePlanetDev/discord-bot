const { Model, DataTypes } = require("sequelize");
const sequelize = require("../");

class Dependencies extends Model {}

Dependencies.init(
  {
    address: {
      type: DataTypes.STRING(255),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  { sequelize }
);

module.exports = Dependencies;
