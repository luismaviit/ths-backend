'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.State, {foreingKey:'id', as:"State"})
      City.hasMany(models.User, {foreingKey:'id', as:"User"})
    }
  };
  City.init({
    name: DataTypes.STRING,
    postal_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
