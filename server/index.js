// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000; 
const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

app.get("/test", (req, res) => {
  res.json({ message: "✅ API working!" });
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Unhandled error:', err);
  process.exit(1); // Exit the process after logging the error
});
