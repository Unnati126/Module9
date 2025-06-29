/*const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const path = require("path");
const db = require("./models/db");

dotenv.config();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/

const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

dotenv.config();

// DB connection
require("./models/db");

// Routes
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

// 👇 Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 👇 Mount routes BEFORE express.json()
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// 👇 JSON parsing LAST
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
