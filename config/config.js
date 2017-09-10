module.exports = {

  "development": {
    "username": process.env.MYSQL_USER || "tdc_application",
    "password": process.env.MYSQL_PASSWORD || "123",
    "database": process.env.MYSQL_DB || "tdc_dev",
    "host": process.env.MYSQL_HOST || "localhost",
    "dialect": process.env.DIALECT || "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DB,
    "host": process.env.MYSQL_HOST,
    "dialect": process.env.DIALECT
  }
};
