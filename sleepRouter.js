import express from "express";
import { pet } from "./server.js";
import { displayMeter, sleepTypes } from "./data.js";

export const sleepRouter = express.Router();
sleepRouter.get("/", (request, response) => {
  pet.hunger += 10;
  pet.bordom += 10;
  pet.fatigue -= 20;
  response.send(
    `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
      pet.fatigue
    )} \n Boredom: ${displayMeter(pet.boredom)}`
  );
});

sleepRouter.get("/test", (request, response) => {
  console.log("GET PATH: ", request.path);
  console.log("GET QUERY: ", request.query);
  console.log("GET PATH: ", request.path);
  response.send("Dream away!");
});

sleepRouter.post("/test", (request, response) => {
  console.log("POST PATH: ", request.path);
  console.log("POST QUERY: ", request.query);
  console.log("POST BODY: ", request.body);
  const newSleepId = request.body.id
const sleep = sleepTypes.filter((id) => id === newSleepId)
pet.sleep -= sleep.dreamNumber
console.log(sleep.dreamNumber)


})


sleepRouter.post("/sleepType", (request, response) => {
  console.log("POST PATH: ", request.path);
  console.log("POST QUERY: ", request.query);
  console.log("POST BODY: ", request.body);
  const newSleepId = parseInt(request.body.id)
const sleep = sleepTypes.find((id) => id.id === newSleepId) 
  pet.hunger -= sleep.dreamNumber
  pet.boredom -= sleep.dreamNumber
  pet.fatigue -= sleep.dreamNumber
  response.send(
  `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
    pet.fatigue
  )} \n Boredom: ${displayMeter(pet.boredom)}`
);

});

sleepRouter.post("/", (request, response) => {
const sleepReceived = request.body
sleepReceived.sleepName
})
