const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./configs/db");

// Middlewares
app.use(cors()) //Enable cross-origin resource sharing
app.use(express.json()); //  important for req.body

// DB Connection
connectDB();

const app = express() ;


app.get("/",(req,res)=> res.send("Api is working"))


const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
