const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const User = require("../models/User");


// Protected Route
router.get("/balance", auth, async (req,res)=>{

 const user = await User.findById(req.user.id);

 res.json({
   name:user.name,
   balance:user.balance
 });

});

module.exports = router;