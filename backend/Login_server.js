const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./.config/db.js");

const newspaperRoutes = require("./routes/newspaper.route.js");
const userRoutes = require("./routes/user.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products/newspapers", newspaperRoutes);
app.use("/api/products/users", userRoutes);

app.listen(PORT, () => {
  connectDB();
});
