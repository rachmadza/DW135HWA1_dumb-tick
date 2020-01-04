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
        urlMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63450.244455780085!2d106.68972014763962!3d-6.3108984679845435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f01d4b4ce1fb%3A0x401576d14fed710!2sCiputat%2C%20South%20Tangerang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1577992769712!5m2!1sen!2sid",
        img: "https://cutt.ly/qryHIEG",
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
        urlMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31727.59757051883!2d106.7441703194269!3d-6.270346050385379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0502a91386b%3A0x6f665f54434d2cf6!2sBintaro%2C%20Pesanggrahan%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1577992854947!5m2!1sen!2sid",
        img: "https://cutt.ly/YryHSmD",
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
        urlMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63450.244455780085!2d106.68972014763962!3d-6.3108984679845435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f01d4b4ce1fb%3A0x401576d14fed710!2sCiputat%2C%20South%20Tangerang%20City%2C%20Banten!5e0!3m2!1sen!2sid!4v1577992769712!5m2!1sen!2sid",
        img: "https://cutt.ly/KryHDI9",
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
