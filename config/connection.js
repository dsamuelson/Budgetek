const Sequelize = require("sequelize");

// using dotenv to help hide sensitive information

require('dotenv').config();

// if jawsDb is available use that otherwise use the .env variables

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

module.exports = sequelize;