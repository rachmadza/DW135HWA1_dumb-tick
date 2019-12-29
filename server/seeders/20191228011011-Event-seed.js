'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Events', [
      {
        title: "Raisa",
        categoryId: 2,
        startTime: "2019-12-30 18:00:00",
        endTime: "2019-12-30 23:00:00",
        price: 300000,
        description: "Concert",
        address: "Ciputat Hall",
        urlMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.145812678567!2d106",
        img: "http://someimg.net/haris-astina.png",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Isyana",
        categoryId: 2,
        startTime: "2019-12-30 18:00:00",
        endTime: "2019-12-30 23:00:00",
        price: 200000,
        description: "Concert",
        address: "Bintaro Hall",
        urlMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.145812678567!2d106",
        img: "http://someimg.net/haris-astina.png",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Payung Teduh",
        categoryId: 2,
        startTime: "2019-12-30 18:00:00",
        endTime: "2019-12-30 23:00:00",
        price: 400000,
        description: "Concert",
        address: "Ciputat Hall",
        urlMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.145812678567!2d106",
        img: "http://someimg.net/haris-astina.png",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
