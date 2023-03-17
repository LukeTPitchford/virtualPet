import express from "express";
import {pet} from "./server.js";
import { displayMeter } from "./functions.js";

export const sleepRouter = express.Router()
sleepRouter.post("/", (request,response)=>{
    pet.hunger += 10
    pet.bordom += 10
    pet.fatigue -= 20
    response.send(`Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(pet.fatigue)} \n Boredom: ${displayMeter(pet.boredom)}`)

})