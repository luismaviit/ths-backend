'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      Country.hasMany(models.State, {foreingKey:'id', as:"State"})
    }
  };
  Country.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};
