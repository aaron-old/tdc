let fs = require('fs');
let path = require('path');
let Sequelize = require('sequelize');
let basename = path.basename(module.filename);
let env = process.env.NODE_ENV || 'development';
let db = {};
let config;

if (env === 'test' || env === 'development') {
  config = {
    username: process.env.MYSQL_USER || 'tdc_application',
    password: process.env.MYSQL_PASSWORD || '123',
    database: process.env.MYSQL_DB || 'tdc_dev',
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: process.env.DIALECT || 'mysql',
  }
}
else {
  config = {
    database: process.env.MYSQL_DB,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    dialect: process.env.DIALECT,
  }
}
let sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect,
  host: config.host,
  pool: {
    max: 100,
    min: 0,
    idle: 10000,
  },
});

fs
    .readdirSync(__dirname)
    .filter(function (file) {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
      let model = sequelize['import'](path.join(__dirname, file));
      db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

