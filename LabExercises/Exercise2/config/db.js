const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blogdb');
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", err);
        process.exit(1); 
    }
};

module.exports = connectDB;