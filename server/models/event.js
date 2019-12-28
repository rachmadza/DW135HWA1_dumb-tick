'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    url_maps: DataTypes.STRING,
    image: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
      sourceKey: 'id'
    })
    Event.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'createdBy',
      sourceKey: 'id'
    })
  };
  return Event;
};