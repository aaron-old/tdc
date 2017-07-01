const mysql = require("mysql");
const env = process.env.NODE_ENV || 'development';
const config = require("./config.json")[env];

const pool = mysql.createPool({
    connectionLimit: 100,
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database
});

module.exports = pool;