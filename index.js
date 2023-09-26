const express = require("express");
const http = require("http");
const https = require("https");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./server/config/DB");
const userRoutes = require("./server/routes/userRoutes");
const locationRoutes = require("./server/routes/locationRoutes");
const { insertData } = require("./server/seeder/seeder");

const { DEV_PORT, PROD_PORT, ENV } = process.env;

const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// insertData();
app.use("/api/user", userRoutes);
app.use("/api/location", locationRoutes);

if (ENV === "dev") {
  http.createServer(app).listen(DEV_PORT, () => {
    console.log(`HTTP server is listening at ${DEV_PORT}`);
  });
} else {
  const options = {};

  https.createServer(options, app).listen(PROD_PORT, () => {
    console.log(`HTTP server is listening at ${PROD_PORT}`);
  });
}
