const express = require("express");
require("dotenv").config({ path: "./config/.env" });

// cors
const corsOptions = require("./config/cors.js");

// tools
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const mailRoutes = require("./routes/mail.routes");

const app = express();


app.use(corsOptions);
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.use("/api/mail", mailRoutes);

module.exports = app;
