const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const userRouter = require("./routes/userRoutes");
app.use("/api/v1/users", userRouter);

module.exports = app;
