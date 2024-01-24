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

exports.createUser = async (req, res) => {
  try {
    const connection = req.dbConnection;

    const email = req.body.email;
    const password = req.body.password;

    connection.query(
      "INSERT INTO user (organization_id,email,name,password,created_at) VALUES (1, ?, 1, ?, CURRENT_TIMESTAMP)",
      [email, password],
      (err, result) => {
        if (err) {
          console.error(`Error: ${err}`);
          return res.status(500).json({
            status: "Error",
            message: `Internal Server Error ${err.message}`,
          });
        }

        res.status(201).json({
          status: "success",
          message: "User inserted successfully",
          data: {},
        });

        connection.release();
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
