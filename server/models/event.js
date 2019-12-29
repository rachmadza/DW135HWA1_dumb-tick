'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    urlMaps: DataTypes.STRING,
    img: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
      sourceKey: 'id'
    })
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'createdBy',
      sourceKey: 'id'
    })
  };
  return Event;
};