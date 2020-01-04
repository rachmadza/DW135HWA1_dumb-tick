'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      as: 'events'
    })
    User.hasMany(models.Order, {
      foreignKey: 'buyerId',
      as: 'orders'
    })
  };
  return User;
};