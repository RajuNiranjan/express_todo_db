import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_Connect = async (req, res, next) => {
  try {
    const db_uri = process.env.DB_URI;

    await mongoose
      .connect(db_uri)
      .then(() => console.log("server connected to data base"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

DB_Connect();
