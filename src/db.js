require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env"
})

const mysql = require('mysql');

var connection = mysql.createConnection({
    host : process.env.HOST,
    user  : process.env.USER_DB,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});

exports.connection = connection;