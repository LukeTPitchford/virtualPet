import express from "express";
import { pet } from "./server.js";
import { displayMeter } from "./functions.js";

export const feedRouter = express.Router();
feedRouter.post("/", (request, response) => {
  pet.hunger -= 20;
  pet.boredom += 10;
  pet.fatigue += 10;
  response.send(`Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(pet.fatigue)} \n Boredom: ${displayMeter(pet.boredom)}`);
});
