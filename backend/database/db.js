import mongoose from "mongoose";

const connectDB = async()=>{
        console.log("Connecting to:", process.env.MONGO_URI); // 🧠 Debug line

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log("MongoDB connection error", error);
        
    }
}

export default connectDB;