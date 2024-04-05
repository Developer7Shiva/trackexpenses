//packages importing
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require('./config/db');

//Js Files Importing
const transactions = require('./routes/transaction');

//Dotenv configuration
dotenv.config({ path: "./config/config.env" });

//DB Connecting here
connectDB();

const app = express();
//Body Parser using express inbuilt json parser
app.use(express.json());

//Morgan works
if(process.env.NODE_ENV ==='development') {
  app.use(morgan('dev'));
  
}

// app.get("/", (req, res) => res.send("Hello, Server is working with Root Dir"));
app.use('/api/v1/transactions', transactions)
app.listen(
  process.env.PORT,
  console.log(`SERVER IS RUNNING ON http://localhost:${process.env.PORT}`.yellow)
);
