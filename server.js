const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const accountRoutes = require("./routes/accountRoutes");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("🚀 Banking JWT API is running...");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth",authRoutes);
app.use("/api/account",accountRoutes);

// FIXED PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
 console.log(`Server running on port ${PORT}`);
});