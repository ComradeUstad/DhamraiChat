import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Connected to MongoDB");
    } catch (error) {
        process.exit(1); // Exit process with failure
        // Status 0 means failed to connect to the database
        // Status 1 means successfully connected to the database
    }
};