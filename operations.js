const mysql = require("mysql");

function insert(connection, callback){
    let insertQuery = 
    "INSERT INTO users (name, email) VALUES ('Josue', 'ajosueramos@gmail.com')";
    connection.query(insertQuery, function(err, result){
        if(err) throw err;
        callback(result);
    });
}

module.exports = {insert};