const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Tamu = sequelize.define("tamus", {
    name: {
        type: Sequelize.STRING,
    },
    date_in: {
        type: Sequelize.DATE,
    },
    time_out: {
        type: Sequelize.TIME,
    },
    instance: {
        type: Sequelize.STRING,
    },
    purpose: {
        type: Sequelize.STRING,
    },
    
} )