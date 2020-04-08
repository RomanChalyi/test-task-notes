/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('note', {
    'id': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'title': {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'none',
      comment: "null"
    },
    'description': {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: 'none',
      comment: "null"
    }
  }, {
    tableName: 'note'
  });
};
