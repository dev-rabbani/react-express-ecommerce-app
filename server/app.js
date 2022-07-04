// External Imports

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// config app
const app = express();

//dotenv config
require("dotenv").config();

// use express json default method
app.use(express.json({ limit: "1mb" }));

// db connection
const DB_URI = process.env.DB_URI;
mongoose
  .connect(DB_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log(error));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

// routes middleware
app.use("/api/v1/user", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//default routes
app.get("/", (req, res) => {
  res.send("<h2>Hellow Greetings, Welcome To  Ecommerce world!!</h2>");
});

// No match routes
app.get("*", (req, res) => {
  res.send("<h2>OPPS!! No api found with this route</h2>");
});

// server run
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
