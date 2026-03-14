import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    try {

        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB");
    } catch (error) {
        process.exit(1); // Exit process with failure
        // Status 0 means failed to connect to the database
        // Status 1 means successfully connected to the database
        
    }
};