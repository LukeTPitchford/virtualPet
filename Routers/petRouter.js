import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { displayMeter } from "../data.js";
dotenv.config();

const connectionString = process.env.MONGO_URL;

const db = await mongoose.connect(connectionString);


const petSchema = new mongoose.Schema({
  name: String,
  hunger: Number,
  fatigue: Number,
  boredom: Number,
});

const Pet = db.model("pet", petSchema);
export let pet = new Pet();
export const petRouter = express.Router();

petRouter.post("/", async (request, response) => {
  pet.name = "Snowball " + pet._id
  pet.hunger = 0;
  pet.fatigue = 0;
  pet.boredom = 0;

  await pet.save();
  run();
  response.send("It's Snowball " + pet._id);
});



const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function run() {
  while (true) {
    await sleep(2000);
    pet.hunger += 10;
    pet.fatigue += 10;
    pet.boredom += 10;
    if (pet.boredom >= 100 || pet.fatigue >= 100 || pet.hunger >= 100) {
        console.log(
        `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
          pet.fatigue
        )} \n Boredom: ${displayMeter(pet.boredom)}`
      );
      await pet.save()
      break;
    }
  }
}


