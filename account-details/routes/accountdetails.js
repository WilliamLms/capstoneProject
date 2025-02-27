const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../prisma");
require("dotenv").config();

// Dummy user database (Replace with actual DB calls)
const users = [];

// Register Route
router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email: email } });
    if (existingUser) {
        return res.status(400).json({ message: "Email already registered." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { firstname:firstName, lastname:lastName, email, password: hashedPassword };

    // Save user (Replace this with actual database storage)
    await prisma.user.create({ data: newUser });

    // Generate token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(201).json({ message: "User registered successfully", token });
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email: email } });
    console.log(user)
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ 
        message: "Login successful", 
        token, 
        user: { firstName: user.firstname, lastName: user.lastname, email: user.email }
    });
});

// Get User Details Route
router.get("/account", (req, res) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = users.find(u => u.email === decoded.email);
        
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ firstName: user.firstName, lastName: user.lastName, email: user.email });
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
});

module.exports = router;

