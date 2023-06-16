'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Company extends Model {
    static associate(models) {
      Company.belongsTo(models.City, {foreingKey:'id', as:"City"})
      Company.belongsTo(models.Status, {foreingKey:'id', as:"Status"})
      Company.belongsToMany(models.User,{through:models.CompanyUser})
    }
  };
  Company.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
