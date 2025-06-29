const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
//const testRoutes = require("./routes/testRoutes");

dotenv.config();

const app = express();

// ✅ Add BOTH of these
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Serve static files from 'uploads'
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
//app.use("/api/test", testRoutes);

const db = require("./models/db");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
