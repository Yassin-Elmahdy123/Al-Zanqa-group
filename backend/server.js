const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./.config/db.js");

const newspaperRoutes = require("./routes/newspaper.route.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/newspapers", newspaperRoutes);

app.listen(PORT, () => {
  connectDB();
});
