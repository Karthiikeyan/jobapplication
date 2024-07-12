import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://Karthikeyan:Mongodb@e-commerce.chyiafn.mongodb.net/?retryWrites=true&w=majority&appName=E-Commerce/jobdetails");
      console.log("Connected to MongoDB!");
}