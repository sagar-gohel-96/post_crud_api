const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

//mongodb connection
connectDB();

//middleware
const morgan = require("morgan");
const { response } = require("express");
app.use(morgan("dev"));

//routes
app.use("/posts", postRoutes);

const server = app.listen(PORT, console.log(`Server is running in on ${PORT}`));

//handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  server.close(() => process.exit(1));
});
