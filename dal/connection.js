const config = require("../config/config.json")[process.env.NODE_ENV || "development"];
const pool = require("mysql").createPool(config);


module.exports = {

    query: (query, callback) => {

        pool.getConnection((err, connection) => {
            if(err) {
                console.log(err);
                callback({});
            }
            connection.query(query.sql, query.params, (err, results) => {
                connection.release();
                if(err) {
                    console.log(err);
                    callback({});
                }
                callback(results);
            })
        })
    }
};


