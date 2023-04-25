const express = require("express");
const app = express();
const mysql = require("mysql");
require("dotenv").config();

app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

connection.connect((err) => {
  if(err) throw err;
  console.log("Connected to database");

})

app.get("/", (req, res) => {
  res.send("Hola Mundo")
})

app.listen(3000, () => {
  console.log("Servidor en el puerto 3000...");
})