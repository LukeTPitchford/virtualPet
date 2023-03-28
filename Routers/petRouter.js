import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.MONGO_URL;

const db = await mongoose.connect(connectionString);

const petSchema = new mongoose.Schema({
  name: String,
  hunger: Number,
  fatigue: Number,
  boredom: Number,
  litterBox: Number,
});

const Pet = db.model("pet", petSchema);
export const PetModel = mongoose.model("Pet", petSchema);
export let pet = new Pet();
export const petRouter = express.Router();

petRouter.post("/", async (request, response) => {
  pet.name = "Snowball " + pet._id;
  pet.hunger = 0;
  pet.fatigue = 0;
  pet.boredom = 0;
  pet.litterBox = 0;

  await pet.save();
  run();
  response.send("It's Snowball " + pet._id);
});

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function run() {
  while (true) {
    await sleep(5000);
    pet.hunger += 10;
    pet.fatigue += 10;
    pet.boredom += 10;
    pet.litterBox += 5;
    if (pet.boredom >= 100 || pet.fatigue >= 100 || pet.hunger >= 100 ||
      pet.litterBox >= 100) {
      await pet.save();
      break;
    }
  }
}

petRouter.delete("/:name", async (req, res) => {
  try {
    const pet = await PetModel.findOne({ name: req.params.name });
    if (!pet) {
      return res.status(404).json({ message: "pet not found" });
    }
    await PetModel.deleteOne({ name: req.params.name });
    return res.status(200).json({ message: "pet has been deleted!" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
