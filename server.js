import express from "express";
import { feedRouter } from "./Routers/feedRouter.js";
import { playRouter } from "./Routers/playRouter.js";
import { sleepRouter } from "./Routers/sleepRouter.js";
import { petRouter } from "./Routers/petRouter.js";
import { stateOfBeing } from "./data.js";
import { litterBox } from "./Routers/litterBox.js"

const app = express();
const port = 5050;

app.use(express.json());

app.use("/feed", feedRouter);
app.use("/play", playRouter);
app.use("/sleep", sleepRouter);
app.use("/pet", petRouter);
app.use("/litterBox", litterBox)

app.get("/", (request, response) => {
  response.send(stateOfBeing());
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
