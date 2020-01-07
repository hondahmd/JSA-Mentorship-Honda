const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: `${process.env.MYSQL_HOST}`,
    port: `${process.env.MYSQL_PORT}`,
    dialect: 'mysql'
  }
);

module.exports = connection;
