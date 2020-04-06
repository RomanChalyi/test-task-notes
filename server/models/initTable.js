const sequelize = require('sequelize');
const connection = require('../config/config');
const note = require('./tables/note');

const dataTypes = {
  INTEGER: sequelize.INTEGER,
  STRING: sequelize.STRING,
};

module.exports = note(connection, dataTypes);
