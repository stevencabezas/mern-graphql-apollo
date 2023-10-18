import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`>>> DB is connected: ${conn.connection.name}`);
    }catch(error){
        console.log("Here the error: "+error.message); 
        process.exit(1);
    }
}
