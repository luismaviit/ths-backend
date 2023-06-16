'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  User.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    company: DataTypes.STRING,
    work_department: DataTypes.STRING,
    born_date: DataTypes.DATE,
    enable: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate( async user =>{
    user.password = await user.generatePasswordHash();
  });

  User.beforeUpdate( async (user, options) =>{
    if(user.password != user._previousDataValues.password){
      user.password = await user.generatePasswordHash();
    }
  });

  User.prototype.generatePasswordHash = function () {
    if (this.password) {
      return bcrypt.hash(this.password, 10);
    }
  };

  return User;
};
