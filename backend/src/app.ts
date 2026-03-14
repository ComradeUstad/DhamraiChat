import express from 'express';

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import messageRoutes from "./routes/messageRoutes";
import chatRoutes from "./routes/chatRoutes";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message:"Service is running" });
});


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 1000;
export default app;