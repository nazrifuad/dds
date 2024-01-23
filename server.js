const express = require("express");
const mysql = require("mysql");

//const app = express();
const app = require("./app");
const port = process.env.PORT || 3000;

// MYSQL
const pool = mysql.createPool({
  connectionLimit: 10, // Maximum number of connections
  host: "localhost",
  user: "root",
  database: "dds_db",
});

app.set("pool", pool);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
