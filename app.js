//Package Decleration
const express = require("express");
const app = express();
const productRouter = require('./router/productRoute')
const orderRouter = require('./router/orderRoute')
const dotenv = require("dotenv");
const db_connection = require("./db_connection/connection")

//Defiened Middleware
app.use(express.json())

//Environment Config
dotenv.config()

//Custome Functions for DB Connection
db_connection()

//Router Middleware
app.use("/",productRouter)
app.use("/order",orderRouter)

//Export Module
module.exports = app;