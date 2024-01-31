const jwt = require("jsonwebtoken");

exports.getAllStyleGuides = async (req, res) => {
  try {
    const connection = req.dbConnection;
    const token = req.cookies.token;
    console.log(token);
    connection.query("SELECT * FROM styleguide", (err, rows) => {
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

// FIX ME
exports.createStyleGuides = async (req, res) => {
  try {
    const token = req.cookies.token;
    const connection = req.dbConnection;
    const name = req.body.name;
    if (!token) {
      //eror handling
    } else {
      jwt.verify(token, "jwt-secret-token", (err, decoded) => {
        if (err) {
          //eror handling
        } else {
          const userId = decoded.id;
          if (name) {
            connection.query(
              "INSERT INTO `styleguide` ( `user_id`, `name`, `created_at`) VALUES ( ?, ?, CURRENT_TIMESTAMP)",
              [userId, name],
              (err, result) => {
                if (err) {
                  console.log(`Error : ${err.message}`);
                  return res.status(500).json({
                    status: "Error",
                    message: err.message,
                  });
                }

                res.status(201).json({
                  status: "success",
                  message: "Styleguide created successfully",
                  data: result,
                });

                connection.release();
              }
            );
          }
        }
      });
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
