const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect:'mysql',
    timezone: '+07:00',
})

sequelize.authenticate().then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log(error);
})

module.exports = sequelize;