const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const cors = require("cors");
const crypto = require("crypto");
const userRouter = require("./routes/userRoutes");
const styleguideRouter = require("./routes/styleguideRoutes");

const secret = crypto.randomBytes(64).toString("hex");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    key: "userID",
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/styleguides", styleguideRouter);

module.exports = app;
