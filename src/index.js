//require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config(
    {path: './env'

})


connectDB();






    






















/*
import express from 'express';
const app = express();

( async () => {

    try{
   await mongoose.connect(`${process.env.MONGODB_URL}/${AdityaDB}`) 
    
app.on("error",(error)=>{
    console.log("Error connecting to the database", error);
    throw error("Error connecting to the database");
});
    
app.listen(process.env.PORT , ()=>{
    console.log(`App is running on port ${process.env.PORT}`);
    

     }
    catch (error){
        console.error("Error connecting to the database:", error);
        throw err 
    }
    
    })();

*/