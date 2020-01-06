const Sequelize = require('sequelize');
const conn = require('database/conn');

const Users = conn.define(
  'users',
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    id: false,
    createdAt: false,
    updatedAt: false
  }
);

module.exports = Users;
