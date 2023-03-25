import express from "express";
import { pet } from "./petRouter.js";
import { displayMeter, sleepTypes } from "../data.js";
import { feedRouter } from "./feedRouter.js";

export const sleepRouter = express.Router();
feedRouter.use(express.json());

sleepRouter.get("/", (request, response) => {
  pet.hunger += 10;
  pet.bordom += 10;
  pet.fatigue -= 20;
  if (pet.boredom >= 100 || pet.fatigue >= 100 || pet.hunger >= 100) {
    console.log(
      `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
        pet.fatigue
      )} \n Boredom: ${displayMeter(pet.boredom)}`
    );
  }
  response.send(
    `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
      pet.fatigue
    )} \n Boredom: ${displayMeter(pet.boredom)}`
  );
});

sleepRouter.post("/sleepType", (request, response) => {
  const newSleepId = parseInt(request.body.id);
  const sleep = sleepTypes.find((id) => id.id === newSleepId);
  pet.hunger -= sleep.dreamNumber;
  pet.boredom -= sleep.dreamNumber;
  pet.fatigue -= sleep.dreamNumber;
  if (pet.boredom >= 100 || pet.fatigue >= 100 || pet.hunger >= 100) {
    console.log(
      `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
        pet.fatigue
      )} \n Boredom: ${displayMeter(pet.boredom)}`
    );
  }
  response.send(
    `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
      pet.fatigue
    )} \n Boredom: ${displayMeter(pet.boredom)}`
  );
});

sleepRouter.post("/", (request, response) => {
  const sleepReceived = request.body;
  sleepReceived.sleepName;
});
