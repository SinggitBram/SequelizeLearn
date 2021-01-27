"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john.doe@gmail.com",
          role: "admin",
          uuid: "1ae22a30-9ede-42c7-965f-e28ca2f900b5",
          createdAt: "2021-01-27 03:46:20",
          updatedAt: "2021-01-27 03:46:20",
        },
        {
          name: "Jane Doe",
          email: "jane.doe@gmail.com",
          role: "admin",
          uuid: "1ae21a30-9ede-42c7-965f-e28ca2f900b5",
          createdAt: "2021-01-27 03:46:20",
          updatedAt: "2021-01-27 03:46:20",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
