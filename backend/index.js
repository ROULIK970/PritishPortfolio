import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
import connectDB from './db.js'
import AuthRouter from './Routes/auth.router.js'
import ChatRouter from "./Routes/chat.router.js";
import ContactRouter from "./Routes/contact.router.js";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config({ path: "./env" });



const httpServer = createServer(app); // HTTP server for Socket.IO
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Allow all origins for now
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());
//routes
app.use("/", ChatRouter);
app.use('/auth', AuthRouter)
app.use('/contact', ContactRouter)

// Socket.IO Chat Logic
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  // Store the owner ID when the owner connects
  let ownerSocketId = null;

  socket.on("registerOwner", () => {
    ownerSocketId = socket.id;
    console.log("Owner registered with socket ID:", ownerSocketId);
  });


    socket.on("chatMessage", (data) => {
      const { message, senderId } = data;

      if (socket.id !== ownerSocketId) {
        // Send the client's message to the owner
        if (ownerSocketId) {
          io.to(ownerSocketId).emit("chatMessage", { senderId, message });
        }
      } else {
        // Broadcast the owner's message to a specific client
        io.to(senderId).emit("chatMessage", { senderId: "owner", message });
      }
    });

  // Handle client disconnect
    socket.on("disconnect", () => {
      if (socket.id === ownerSocketId) {
        console.log("Owner disconnected:", socket.id);
        ownerSocketId = null;
      } else {
        console.log("Client disconnected:", socket.id);
      }
    });
});


connectDB()
  .then(() => {
    httpServer.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at PORT: ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log("Connection failed", e);
  });