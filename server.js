import express from "express";
import { feedRouter } from "./Routers/feedRouter.js";
import { playRouter } from "./Routers/playRouter.js";
import { sleepRouter } from "./Routers/sleepRouter.js";
import { petRouter, pet } from "./Routers/petRouter.js";
import { displayMeter } from "./data.js";


const app = express();
const port = 5050;

app.use(express.json());

app.use("/feed", feedRouter);
app.use("/play", playRouter);
app.use("/sleep", sleepRouter);
app.use("/pet", petRouter);

app.get("/", (request, response) => {
  response.send(
    `Hunger: ${displayMeter(pet.hunger)} \n Fatigue: ${displayMeter(
      pet.fatigue
    )} \n Boredom: ${displayMeter(pet.boredom)}`
  );
});


app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

