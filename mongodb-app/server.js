const express = require("express");
const app = express();
let dbConnect = require("./dbConnect");
require("dotenv").config();

let userRoutes = require("./routes/userRoutes");
app.use('/api/users', userRoutes);

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port
${PORT}.`);
});