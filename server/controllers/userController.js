// userController.js
exports.getAllUsers = async (req, res) => {
  try {
    const connection = req.dbConnection;
    connection.query("SELECT * FROM user", (err, rows) => {
      if (err) {
        console.error("Error executing query:", err);
        return res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }

      res.status(200).json({
        status: "success",
        data: rows,
      });

      connection.release();
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
