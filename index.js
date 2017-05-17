var express = require("express");
var app = express();
var mysql = require("mysql");

// Insert db info here
var connection = mysql.createConnection({
    host     : "",
    user     : "",
    password : "",
    database : ""
});
connection.connect();

var tableName = "cats";

app.use(express.static("public"));

app.get("/cats", function (req, res) {
    connection.query(`SELECT * FROM ${tableName} ORDER BY rand() LIMIT 6`, function (error, results, fields) {
        if (error){
            res.send(error);
            console.log(error);
            return;
        }
        res.json({"data": results});
    });
});
app.listen(3000, function(){
    console.log("App running on port 3000");
});
