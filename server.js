const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const accountRoutes = require("./routes/accountRoutes");

const app = express();

app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"));

app.use("/api/auth",authRoutes);
app.use("/api/account",accountRoutes);

app.listen(5000,()=>{
 console.log("Server running on port 5000");
});