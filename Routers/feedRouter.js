import express from "express";
import { pet } from "./petRouter.js";
import { foodTypes, stateOfBeing } from "../data.js";

export const feedRouter = express.Router();
feedRouter.use(express.json());

feedRouter.post("/", (request, response) => {
  pet.hunger -= 10;
  pet.boredom += 5;
  pet.fatigue += 5;
  pet.litterBox += 10;
  if (pet.boredom >= 100 || pet.fatigue >= 100 || pet.hunger >= 100) {
  }

  response.send(stateOfBeing());
});

feedRouter.post("/foodWeightAmount", (request, response) => {
  const newFoodId = parseInt(request.body.id);
  const food = foodTypes.find((id) => id.id === newFoodId);
  pet.hunger -= food.foodWeight;
  pet.boredom += food.foodWeight * .4;
  pet.fatigue += food.foodWeight * .2;
  pet.litterBox += food.junk * 1.1;
  if (pet.boredom >= 100 || pet.fatigue >= 100 || pet.hunger >= 100) {
  }
  response.send(stateOfBeing());
});

feedRouter.post("/", (request, response) => {
  const foodReceived = request.body;
  foodReceived.foodName;
});
