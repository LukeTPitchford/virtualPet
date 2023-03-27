import express from "express";
import { pet } from "./petRouter.js";
import { displayMeter, playTypes } from "../data.js";

export const playRouter = express.Router();

playRouter.get("/", (request, response) => {
  pet.hunger += 10;
  pet.boredom -= 20;
  pet.fatigue += 10;
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

playRouter.post("/playType", (request, response) => {
  const newPlayId = parseInt(request.body.id);
  const play = playTypes.find((id) => id.id === newPlayId);
  pet.hunger -= play.playNumber;
  pet.boredom -= play.playNumber;
  pet.fatigue -= play.playNumber;
  response.send(
    `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
      pet.fatigue
    )} \n Boredom: ${displayMeter(pet.boredom)}`
  );
});

playRouter.post("/", (request, response) => {
  const playReceived = request.body;
  playReceived.playName;
});
