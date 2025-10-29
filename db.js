import mongoose from "mongoose";
import {configDotenv} from "dotenv";

configDotenv()
// const mongoUrl = process.env.MONGODB_URL_LOCAL
//eshtablishing the MongoDB connection 

const MongoDBUrl = process.env.MONGODB_URL

mongoose.connect(MongoDBUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

//Define event Listeners for Database connections

db.on('connected',()=>{
    console.log("Connected to MongoDB Server...")
})

db.on('error',(err)=>{
    console.log("MongoDB connection error",err)
})

db.on('disconnected',()=>{
    console.log("MongoDB server disconnected..")
})

export default db;