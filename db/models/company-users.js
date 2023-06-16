'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyUser extends Model {
    static associate(models) {
      // define association here
      CompanyUser.belongsTo(models.User)
      CompanyUser.belongsTo(models.Company)
    }
  };
    
  CompanyUser.init({
    
  }, {
    sequelize,
    modelName: 'CompanyUser',
  });
  return CompanyUser;
};