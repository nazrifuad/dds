const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  database: "dds_db",
});

const dbConnectionMiddleware = (req, res, next) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting database connection:", err);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }

    req.dbConnection = connection;
    next();
  });
};

module.exports = dbConnectionMiddleware;
