
var sqlite = require('sqlite3');
var Sequelize = require('sequelize');
var sequelize = module.exports = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite'
});

sequelize.define('testTable1', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

sequelize.define('testTable2', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

sequelize.define('testTable3', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});
