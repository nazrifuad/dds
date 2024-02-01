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

// exports.login = async (req, res) => {
//   try {
//     const connection = req.dbConnection;
//     const email = req.body.email;
//     const password = req.body.password;

//     connection.query(
//       "SELECT *  FROM `user` WHERE `email` = ?",
//       email,
//       (err, result) => {
//         if (err) {
//           console.error(`Error: ${err}`);
//           return res.status(404).json({
//             status: "Error",
//             message: `Wrong username/password combination!`,
//           });
//         }

//         if (result.length > 0) {
//           bcrypt.compare(password, result[0].password, (error, response) => {
//             if (response) {
//               const id = result[0].id;
//               const organization_id = result[0].organization_id;
//               const token = jwt.sign(
//                 { id, organization_id },
//                 "jwt-secret-token",
//                 {
//                   expiresIn: "1d",
//                 }
//               );
//               res.cookie("token", token);
//               return res.status(200).json({
//                 status: "success",
//                 data: token,
//               });
//             } else {
//               return res.status(404).json({
//                 status: "Error",
//                 message: `Wrong username/password combination!`,
//               });
//             }
//           });
//         } else {
//           return res.status(404).json({
//             status: "Error",
//             message: `Wrong username/password combination!`,
//           });
//         }
//       }
//     );
//   } catch (err) {
//     //some error handling here
//   }
// };

exports.login = async (req, res) => {
  try {
    const connection = req.dbConnection;
    const email = req.body.email;
    const password = req.body.password;

    if (!connection) {
      return res.status(500).json({
        status: "error",
        message: "Connection Error",
      });
    }
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "No email or password provided",
      });
    }

    const user = await new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM `user` WHERE `email` = ?",
        email,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });

    if (user.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Wrong username/password combination",
      });
    }

    bcrypt.compare(password, user[0].password, (error, response) => {
      if (error) {
        return res.status(500).json({
          status: "error",
          message: "Error comparing passwords",
        });
      }
      if (!response) {
        return res.status(401).json({
          status: "error",
          message: "Wrong username/password combination",
        });
      }

      const id = user[0].id;
      const organization_id = user[0].organization_id;
      const token = jwt.sign({ id, organization_id }, "jwt-secret-token", {
        expiresIn: "1d",
      });

      res.cookie("token", token);
      res.status(200).json({
        status: "success",
        data: token,
      });
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({
      status: "Error",
      message: "No Token",
    });
  } else {
    jwt.verify(token, "jwt-secret-token", (err, decoded) => {
      if (err) {
        res.status(401).json({
          status: "Error",
          message: "Token Doesnt Match",
        });
      } else {
        req.id = decoded.id;
        next();
      }
    });
  }
};

exports.verifyNotLoggedIn = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    return res.status(403).json({
      status: "Error",
      message: "Already logged in",
    });
  } else {
    next();
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      status: "success",
    });
  } catch (err) {
    return res.status(404).json({
      status: "Error",
      message: `${err.message}`,
    });
  }
};

exports.getLogin = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({
        logged: false,
        status: "Error",
        message: "No Token",
      });
    } else {
      jwt.verify(token, "jwt-secret-token", (err, decoded) => {
        if (err) {
          res.status(401).json({
            logged: false,
            status: "Error",
            message: "Token Doesnt Match",
          });
        } else {
          req.id = decoded.id;
          res.status(200).json({
            logged: true,
            status: "success",
            user: req.id,
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
};
