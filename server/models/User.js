const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class User {
  static async verifyUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({
        status: "Error",
        message: "No Token",
      });
    } else {
      try {
        const userId = await UserAuthenticator.verifyToken(token);
        req.id = userId;
        next();
      } catch (error) {
        res.status(401).json({
          status: "Error",
          message: "Token Verification Failed",
        });
      }
    }
  }

  static async getUserId(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, "jwt-secret-token", (err, decoded) => {
        if (err) {
          reject("Token Verification Failed");
        } else {
          resolve(decoded.id);
        }
      });
    });
  }
}
module.exports = User;
