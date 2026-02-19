const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./configs/db");
const { clerkMiddleware } = require("@clerk/express");

//initialize the app
const app = express() ;

// Middlewares
app.use(cors()) //Enable cross-origin resource sharing
app.use(express.json()); //  important for req.body
app.use(clerkMiddleware())

// DB Connection
connectDB();




app.get("/",(req,res)=> res.send("Api is working"))


const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
