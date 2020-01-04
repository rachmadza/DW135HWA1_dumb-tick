'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    eventId: DataTypes.INTEGER,
    buyerId:DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.STRING,
    status: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'pending'
    },
    attachment: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'buyerId',
      as: 'buyer',
      sourceKey: 'id'
    })
    Order.belongsTo(models.Event, {
      foreignKey: 'eventId',
      as: 'event',
      sourceKey: 'id'
    })
  };
  return Order;
};