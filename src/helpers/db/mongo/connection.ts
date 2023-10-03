import mongoose from "mongoose";
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/3B";

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL).then(() => {
      console.log("DB connected");
    });
  } catch (error: any) {
    console.log("Error", error);
    throw Error(error);
  }
};
