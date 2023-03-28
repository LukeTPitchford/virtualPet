import express from "express";
import { pet } from "./petRouter.js";
import { stateOfBeing } from "../data.js";

export const litterBox = express.Router();
litterBox.use(express.json());

litterBox.post("/", (request, response) => {
  pet.litterBox -= 20;
  if (
    pet.boredom >= 100 ||
    pet.fatigue >= 100 ||
    pet.hunger >= 100 ||
    pet.litterBox >= 100
  ) {
  }

  response.send(stateOfBeing());
});
