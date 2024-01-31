const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    const hashedPassword = await bcrypt.hash(password, 10);

    connection.query(
      "INSERT INTO user (organization_id,email,name,password,created_at) VALUES (1, ?, 1, ?, CURRENT_TIMESTAMP)",
      [email, hashedPassword],
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

exports.login = async (req, res) => {
  try {
    const connection = req.dbConnection;
    const email = req.body.email;
    const password = req.body.password;

    connection.query(
      "SELECT *  FROM `user` WHERE `email` = ?",
      email,
      (err, result) => {
        if (err) {
          console.error(`Error: ${err}`);
          return res.status(404).json({
            status: "Error",
            message: `Wrong username/password combination!`,
          });
        }

        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              const name = result[0].name;
              const token = jwt.sign({ name }, "jwt-secret-token", {
                expiresIn: "1d",
              });
              res.cookie("token", token);
              return res.status(200).json({
                status: "success",
                data: token,
              });
            } else {
              return res.status(404).json({
                status: "Error",
                message: `Wrong username/password combination!`,
              });
            }
          });
        } else {
          return res.status(404).json({
            status: "Error",
            message: `Wrong username/password combination!`,
          });
        }
      }
    );
  } catch (err) {
    //some error handling here
  }
};

exports.getLogin = async (req, res) => {
  try {
    if (req.session.user) {
      res.status(200).json({
        loggedIn: true,
        user: req.session.user,
      });
    } else {
      res.status(401).json({
        loggedIn: false,
      });
    }
  } catch (err) {}
};

exports.verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    console.log("no token");
    res.status(401).json({
      status: "Error",
      message: "No Token",
    });
  } else {
    console.log("got token");
    jwt.verify(token, "jwt-secret-token", (err, decoded) => {
      if (err) {
        console.log("no match");
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};
