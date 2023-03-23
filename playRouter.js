import express from "express";
import { pet } from "./server.js";
import { displayMeter, playTypes } from "./data.js";

export const playRouter = express.Router();
playRouter.get("/", (request, response) => {
  pet.hunger += 10;
  pet.boredom -= 20;
  pet.fatigue += 10;
  response.send(
    `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
      pet.fatigue
    )} \n Boredom: ${displayMeter(pet.boredom)}`
  );
});

playRouter.get("/test", (request, response) => {
  console.log("GET PATH: ", request.path);
  console.log("GET QUERY: ", request.query);
  console.log("GET PATH: ", request.path);
  response.send("play time!");
});

playRouter.post("/test", (request, response) => {
  console.log("POST PATH: ", request.path);
  console.log("POST QUERY: ", request.query);
  console.log("POST BODY: ", request.body);
  const newPlayId = request.body.id;
  const play = playTypes.filter((id) => id === newPlayId);
  pet.play -= play.playNumber;
  console.log(play.playNumber);
});

playRouter.post("/playType", (request, response) => {
  console.log("POST PATH: ", request.path);
  console.log("POST QUERY: ", request.query);
  console.log("POST BODY: ", request.body);
  const newPlayId = parseInt(request.body.id);
  console.log(playTypes);
  const play = playTypes.find((id) => id.id === newPlayId);
  console.log(play);
  pet.hunger -= play.playNumber;
  pet.boredom += play.playNumber;
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

