const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Tamu = sequelize.define("tamus", {
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
} )

module.exports = Tamu;