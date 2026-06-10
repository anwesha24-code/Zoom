import express from 'express';
import {createServer} from 'node:http';

import {Server} from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import {connectToSocket} from './controllers/socketManager.js';
const app=express();
const server=createServer(app);
const io=connectToSocket(server)

app.set("port",(process.env.PORT||8000))
app.get('/home',(req,res)=>{
    res.send("Hello World");
})
const start=async()=>{
    const connectionDb=await mongoose.connect("mongodb+srv://anweshapal2006_db_user:nma3KHO1h92xEHaC@cluster0.zzuj4p7.mongodb.net/")
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
console.log("Server is running on port 8000");
    });
}
start();