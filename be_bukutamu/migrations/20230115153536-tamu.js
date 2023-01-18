'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('tamus', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        date_in: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        time_in: {
          type: Sequelize.TIME,
          allowNull: false,
        },
        instance: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        purpose: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        appointment_with: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        time_out: {
            type: Sequelize.TIME,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('NOW()'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('NOW()'),
          onUpdate: 'NOW()',
        }
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('tamu');
  }
};
