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
        },
      },
      ifNotExists: true,
    },
    callback
  ).then(() => {
    db.runSql(
      `INSERT INTO note (title) values('make a test task');
       INSERT INTO note (title) values('save the world');
       INSERT INTO note (title) values('eat a sandwich')`,
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
