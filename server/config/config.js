const Sequelize = require('sequelize');

const connection = new Sequelize('note_archive', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

module.exports = connection;
