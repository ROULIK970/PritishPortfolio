import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()
import connectDB from './db.js'
import AuthRouter from './Routes/auth.router.js'
import ChatRouter from "./Routes/chat.router.js";
import ContactRouter from "./Routes/contact.router.js";


dotenv.config({ path: "./env" });





app.use(cors());
app.use(express.json());
//routes
app.use("/", ChatRouter);
app.use('/auth', AuthRouter)
app.use('/contact', ContactRouter)



connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at PORT: ${process.env.PORT}`);
    });
  })
  .catch((e) => {
    console.log("Connection failed", e);
  });