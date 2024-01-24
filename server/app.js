const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const styleguideRouter = require("./routes/styleguideRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/styleguides", styleguideRouter);

module.exports = app;
