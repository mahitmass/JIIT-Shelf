import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.warn("⚠️ MONGO_URI is missing from .env! Database connection skipped locally.");
            return;
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    } catch (error) {
        console.error("⚠️ Database connection failed:", error.message);
        // Do not process.exit(1) locally so the server can still run other endpoints
    }
}

export default connectDB;