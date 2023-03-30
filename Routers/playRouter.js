import express from "express";
import { pet } from "./petRouter.js";
import { playTypes, stateOfBeing } from "../data.js";

export const playRouter = express.Router();

playRouter.post("/", (request, response) => {
  pet.hunger += 5;
  pet.boredom -= 10;
  pet.fatigue += 5;
  if (pet.boredom >= 100 || pet.fatigue >= 100 || pet.hunger >= 100) {
  }
  response.send(stateOfBeing());
});

playRouter.post("/playType", (request, response) => {
  const newPlayId = parseInt(request.body.id);
  const play = playTypes.find((id) => id.id === newPlayId);
  pet.hunger += play.playNumber * .2;
  pet.boredom -= play.playNumber;
  pet.fatigue += play.playNumber * .3;

  response.send(stateOfBeing());
});

playRouter.post("/", (request, response) => {
  const playReceived = request.body;
  playReceived.playName;
});
