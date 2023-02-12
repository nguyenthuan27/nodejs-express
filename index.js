require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routers/auth");
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yitgnzn.mongodb.net/?retryWrites=true&w=majority`,
      () => {
        console.log("Connected to MongoDB");
      }
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);
const port = process.env.PORT || 3000;
console.log("port", port);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
