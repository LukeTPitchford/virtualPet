import express from "express";
import {pet} from "./server.js";
import { displayMeter } from "./functions.js";

export const playRouter = express.Router()
playRouter.post("/", (request,response)=>{
    pet.hunger += 10
    pet.boredom -= 20
    pet.fatigue += 10
    response.send(`Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(pet.fatigue)} \n Boredom: ${displayMeter(pet.boredom)}`)

})