const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./.config/db.js");
const cors = require("cors");

const newspaperRoutes = require("./routes/newspaper.route.js");
const userRoutes = require("./routes/user.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ADD THIS ⬇⬇⬇
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.use("/api/newspapers", newspaperRoutes);
app.use("/api/user", userRoutes);


app.listen(PORT, () => {
  connectDB();
  console.log("Server running on port", PORT);
});
