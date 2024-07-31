import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://Karthikeyan:Mongodb@e-commerce.chyiafn.mongodb.net/JobApplication");
      console.log("Connected to MongoDB!");
}