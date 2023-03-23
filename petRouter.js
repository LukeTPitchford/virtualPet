import express from "express";
import mongoose from 'mongoose';
    import dotenv from "dotenv";
    dotenv.config();
    
    const connectionString = process.env.MONGO_URL;
    
    const db = await mongoose.connect(connectionString);

    const petSchema = new mongoose.Schema({
        hunger: Number,
        fatigue: Number,
        boredom: Number
    });
    
    const Pet = db.model("pet", petSchema);

export const petRouter = express.Router()
petRouter.post("/", async (request,response)=>{

    
    
   
    const pet = new Pet ({ 
        hunger: 0,
        fatigue: 0,
        boredom: 0});
    
     await pet.save()
     response.send(pet._id)

            
})