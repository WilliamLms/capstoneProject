const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config(); 

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000; 
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

app.use(cors({
  origin: ["http://localhost:5173", "https://capstoneproject-l7xd.onrender.com"], 
  credentials: true,
}));
app.use(express.json());

// REGISTER ROUTE
app.post("/api/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user in database
    const newUser = await prisma.user.create({
      data: { firstName, lastName, email, password: hashedPassword },
    });

    // Generate JWT token
    const token = jwt.sign({ userId: newUser.id, email: newUser.email }, SECRET_KEY, { expiresIn: "1d" });

    res.status(201).json({ message: "User registered successfully!", token });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
});

// LOGIN ROUTE
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    // Find user in database
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1d" });

    res.json({ 
      message: "Login successful!", 
      token, 
      user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
});

// GET USER ACCOUNT ROUTE (For fetching user data after login)
app.get("/api/account", async (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    // Find user in database
    const user = await prisma.user.findUnique({ where: { email: decoded.email } });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email });
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
