const express = require("express");
const app = express();
require("dotenv").config();

// Middleware to parse JSON
app.use(express.json());

// Import routes
const accountRoutes = require("./routes/accountdetails");

// Use routes
app.use("/api/account", accountRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
