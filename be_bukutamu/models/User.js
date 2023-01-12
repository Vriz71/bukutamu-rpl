const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("users", {
    name: {
        type: Sequelize.STRING,
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
});

module.exports = User;