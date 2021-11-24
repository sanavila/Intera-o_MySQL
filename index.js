const express = require("express");
const connection = require("./src/db").connection;

const app = express();

app.get("/produtos", function (req, res) {
    connection.query(
        "SELECT * FROM inform LIMIT 10;",
        function (error, results, fields) {
            if (error) throw error; 
            res.json(results)
        }   
    );
});
app.get("/pesquisa/:tabela", function (req, res) {
    connection.query(
        "SELECT * FROM "+req.params.tabela,
        function (error, results, fields) {
            if (error) throw error; 
            res.json(results)
        }   
    );
});
app.listen(3000);