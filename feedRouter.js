import express from "express";
import { pet } from "./server.js";
import { displayMeter, foodTypes } from "./data.js";

export const feedRouter = express.Router();
feedRouter.use(express.json());

feedRouter.get("/", (request, response) => {
  pet.hunger -= 20;
  pet.boredom += 10;
  pet.fatigue += 10;

  response.send(
    `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
      pet.fatigue
    )} \n Boredom: ${displayMeter(pet.boredom)}`
  );
});

feedRouter.get("/test", (request, response) => {
  console.log("GET PATH: ", request.path);
  console.log("GET QUERY: ", request.query);
  console.log("GET PATH: ", request.path);
  response.send("hello !!");
});

feedRouter.post("/test", (request, response) => {
  console.log("POST PATH: ", request.path);
  console.log("POST QUERY: ", request.query);
  console.log("POST BODY: ", request.body);
  const newFoodId = request.body.id
const food = foodTypes.filter((id) => id === newFoodId)
pet.hunger -= food.foodWeight
console.log(food.foodWeight)


})





feedRouter.post("/foodWeightAmount", (request, response) => {
  console.log("POST PATH: ", request.path);
  console.log("POST QUERY: ", request.query);
  console.log("POST BODY: ", request.body);
  const newFoodId = parseInt(request.body.id)
const food = foodTypes.find((id) => id.id === newFoodId) 
  pet.hunger -= food.foodWeight
  pet.boredom -= food.foodWeight
  pet.fatigue -= food.foodWeight
  response.send(
  `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
    pet.fatigue
  )} \n Boredom: ${displayMeter(pet.boredom)}`
);

});

feedRouter.post("/", (request, response) => {
const foodReceived = request.body
foodReceived.foodName
})

