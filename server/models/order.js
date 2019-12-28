'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    event_id: DataTypes.INTEGER,
    buyer_id:DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.STRING,
    status: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 'pending'
    },
    attachment: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};