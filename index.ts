import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3300;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test";

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.json({ message: "API working fine" });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
