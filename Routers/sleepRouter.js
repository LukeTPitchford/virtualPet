import express from "express";
import { pet } from "./petRouter.js";
import {  sleepTypes, stateOfBeing } from "../data.js";
import { feedRouter } from "./feedRouter.js";

export const sleepRouter = express.Router();
feedRouter.use(express.json());

sleepRouter.post("/", (request, response) => {
  pet.hunger += 5;
  pet.boredom += 5;
  pet.fatigue -= 10;
  if (pet.boredom >= 100 || pet.fatigue >= 100 || pet.hunger >= 100) {
  }
  response.send(stateOfBeing());
  
});

sleepRouter.post("/sleepType", (request, response) => {
  const newSleepId = sleepTypes[Math.floor(Math.random()*sleepTypes.length)].id;
  const sleep = sleepTypes.find((id) => id.id === newSleepId);
  pet.hunger += sleep.dreamNumber * 0.4;
  pet.boredom += sleep.dreamNumber * 0.2;
  pet.fatigue -= sleep.dreamNumber;
  if (pet.boredom >= 100 || pet.fatigue >= 100 || pet.hunger >= 100) {
  }
  response.send(stateOfBeing());
});

sleepRouter.post("/", (request, response) => {
  const sleepReceived = request.body;
  sleepReceived.sleepName;
});
