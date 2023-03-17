import express from "express";
import {feedRouter} from "./feedRouter.js";
import {playRouter} from "./playRouter.js";
import {sleepRouter} from "./sleepRouter.js";
import { displayMeter } from "./functions.js";

const app = express();
const port = 5050;

export const pet = {
    "hunger": 0,
    "fatigue": 0,
    "boredom": 0
}

app.use(express.json());

app.use('/feed', feedRouter)
app.use('/play', playRouter)
app.use('/sleep', sleepRouter)

app.get("/", (request, response) => {
  response.send(`Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(pet.fatigue)} \n Boredom: ${displayMeter(pet.boredom)}`);
});



const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
async function run(){
    while(true){
        await sleep(5000);
        pet.hunger += 10
        pet.fatigue += 10
        pet.boredom += 10
        if (pet.boredom === 100 || pet.fatigue === 100 || pet.hunger === 100){            
            console.log("Your pet has died")
            break
    }
}}
    

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})



run()