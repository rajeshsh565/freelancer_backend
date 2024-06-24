import "express-async-errors";
import * as dotenv from "dotenv"
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
import CookieParser from "cookie-parser";

import errorHandlerMiddleware from "./Middlewares/errorHandlerMiddleware.js";
import authRouter from "./routes/authRouter.js"
import projectRouter from "./routes/projectRouter.js"

import { validateUser } from "./Middlewares/authMiddleware.js";

app.use(CookieParser());
app.use(express.json());

app.get("/api/v1", (req,res)=>{
    res.send("hello world!");
})
app.use("/api/v1/project",validateUser, projectRouter);
app.use("/api/v1/auth", authRouter);


app.use(errorHandlerMiddleware);

let connect;
try{
    connect = await mongoose.connect(process.env.MONGODB_URI);
} catch(error){
    console.log(error);
}

if(connect){
    app.listen(5000, ()=>{
        console.log("server listening to port 5000")
    })
}