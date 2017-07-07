// This is the repository for the user. This will be used to handle representing queries directly to the database.

const db = require("../../dal/connection");

const table = {
    tableName: "user",
    columns: {
        userId: "user_id",
        email: "email",
        firstName: "first_name",
        lastName: "last_name",
        password: "password"
    }
};



exports.index = (res) => {
    let query = `SELECT * FROM ${table.tableName}`;
    db.query({sql: query}, (data) => {
        if(data.length > 0) {
            // TODO: Clean the user object.
            return res.status(200).json(data);
        }
        return res.status(404).json(data);
    });
};

exports.find = (id, res) => {
    let sql = `SELECT * FROM ${table.tableName} WHERE ${table.columns.userId} = ?`;
    let params = [id];
    db.query({sql: sql, params: params}, (data) => {
        if(data.length > 0) {
            // TODO:  Clean the user object.
            return res.status(200).json(data);
        }
        else {
            return res.status(404).json(data);
        }
    })
};

exports.create = (user, res) => {

    // validate the user object.
    let sql = `INSERT INTO ${table.tableName} SET ?`;
    let params = user;
    db.query({sql: sql, params: params}, (data) => {
        console.log(data);
        res.status(201);
    })
};