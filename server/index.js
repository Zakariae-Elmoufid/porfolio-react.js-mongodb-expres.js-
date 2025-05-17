// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB connection

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error(" MongoDB connection error:", err));





const PORT = process.env.PORT || 5001; 
app.use('/api/auth', require('./routes/auth'));
app.use("/api/admin" , require('./routes/admin'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

