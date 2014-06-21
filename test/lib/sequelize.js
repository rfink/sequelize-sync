
var Sequelize = require('sequelize');
var sequelize = module.exports = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite'
});

sequelize.define('TestTable1', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

sequelize.define('TestTable2', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

sequelize.define('TestTable3', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});
