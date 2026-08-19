const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect(process.env.DBURL)
    .then(() => {
      console.log("MongoDB is working");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
    });
};

module.exports = connectDB;
