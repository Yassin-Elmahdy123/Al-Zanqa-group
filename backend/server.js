const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./.config/db.js");
const cors = require("cors");
const axios = require("axios");

const newspaperRoutes = require("./routes/newspaper.route.js");
const userRoutes = require("./routes/user.js");

const app = express();
const PORT = process.env.PORT || 5000;

console.log("LOADED MONGO_URI:", process.env.MONGO_URI);
console.log("MONGO_URI =>", process.env.MONGO_URI);

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.use("/api/products/newspapers", newspaperRoutes);
app.use("/api/user", userRoutes);

connectDB();
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
const API_KEY = '240992b7cf1348c18e21803ab18fee41';

function fetchNews(url, res) {
  axios.get(url)
    .then(response => {
      if (response.data.totalResults > 0) {
        res.json({
          status: 200,
          success: true,
          message: "Successfully fetched the data",
          data: response.data
        });
      } else {
        res.json({
          status: 200,
          success: true,
          message: "No more results to show"
        });
      }
    })
    .catch(error => {
      res.json({
        status: 500,
        success: false,
        message: "Failed to fetch data from the API",
        error: error.message
      });
    });
}
// All News
app.get("/all-news", (req, res) => {
  let pageSize = parseInt(req.query.pagesize) || 40;
  let page = parseInt(req.query.page) || 1;

  let url = `https://newsapi.org/v2/everything?q=apple&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  fetchNews(url, res);
});

// top-headlines
app.options("/top-headlines", cors());
app.get("/top-headlines", (req, res) => {
    let pagesize = parseInt(req.query.pagesize) || 80;
    let page = parseInt(req.query.page) || 1;
    let category = req.query.category || "business";

    let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pagesize}&apiKey=${API_KEY}`;

    fetchNews(url, res);
})
// /country
app.options("/country/:iso", cors());
app.get("/country/:iso", (req, res) => {
    let pagesize = parseInt(req.query.pagesize) || 80;
    let page = parseInt(req.query.page) || 1;
    const country = req.params.iso;

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apikey=${API_KEY}&page=${page}&pagesize=${pagesize}`;

    fetchNews(url, res);
});

// Port
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
