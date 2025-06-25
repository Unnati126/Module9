const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await //mongoose.connect(process.env.MONGO_URI);
        mongoose.connect('mongodb://127.0.0.1:27017/blogdb');
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;