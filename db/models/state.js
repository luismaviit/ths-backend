'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      State.hasMany(models.City, {foreingKey:'id', as:"City"})
      State.belongsTo(models.Country, {foreingKey:'id', as:"Country"})
    }
  };
  State.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};
