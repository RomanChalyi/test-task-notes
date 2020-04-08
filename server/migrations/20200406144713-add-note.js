'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    'note',
    {
      columns: {
        id: {
          type: type.INTEGER,
          notNull: true,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: type.STRING,
          length: 50,
          notNull: true,
          defaultValue: 'none',
        },
        description: {
          type: type.STRING,
          length: '1000',
          defaultValue: 'none',
        },
      },
      ifNotExists: true,
    },
    callback
  ).then(() => {
    db.runSql(
      `INSERT INTO note (title, description) values('Make a test task', 'no problems');
       INSERT INTO note (title, description) values('Save the world', 'invent a vaccine against COVID19');
       INSERT INTO note (title) values('Eat a sandwich')`,
      [],
      callback
    );
  });
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};
