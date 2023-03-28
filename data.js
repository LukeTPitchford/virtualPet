import { pet } from "./Routers/petRouter.js";

const stat100 = "| x x x xDEADx x x x x|";
const stat90 = "|- - - - - - - - - |  |";
const stat80 = "|- - - - - - - - |    |";
const stat70 = "|- - - - - - - |      |";
const stat60 = "|- - - - - - |        |";
const stat50 = "|- - - - - |          |";
const stat40 = "|- - - - |            |";
const stat30 = "|- - - |              |";
const stat20 = "|- - |                |";
const stat10 = "|- |                  |";
const stat0 = "||                    |";

export function displayMeter(stat) {
  if (stat <= 0) return stat0;
  if (stat == 0) return stat0;
  if (stat <= 10) return stat10;
  if (stat <= 20) return stat20;
  if (stat <= 30) return stat30;
  if (stat <= 40) return stat40;
  if (stat <= 50) return stat50;
  if (stat <= 60) return stat60;
  if (stat <= 70) return stat70;
  if (stat <= 80) return stat80;
  if (stat <= 90) return stat90;
  if (stat >= 100) return stat100;
  if (stat <= 100) return stat100;
}

export function stateOfBeing() {
  return `Hunger: ${displayMeter(pet.hunger)} \n
          Fatigue: ${displayMeter(pet.fatigue)} \n
          Boredom: ${displayMeter(pet.boredom)} \n
          Litterbox: ${displayMeter(pet.litterBox)}`;
}

const foodTypes = [
  {
    id: 0,
    name: "burger",
    foodWeight: 60,
    junk: 40
  },
  {
    id: 1,
    name: "pizza",
    foodWeight: 80,
    junk: 30
  },
  {
    id: 2,
    name: "sushi",
    foodWeight: 20,
    junk: 10
  },
  {
    id: 3,
    name: "brocolli",
    foodWeight: 10,
    junk: 5
  },
];

export { foodTypes };

const sleepTypes = [
  {
    id: 0,
    name: "dream",
    dreamNumber: 30,
  },
  {
    id: 1,
    name: "great dream",
    dreamNumber: 40,
  },
  {
    id: 2,
    name: "nightmare",
    dreamNumber: -20,
  },
  {
    id: 3,
    name: "nighterror",
    dreamNumber: -30,
  },
];

export { sleepTypes };

const playTypes = [
  {
    id: 0,
    name: "chess",
    playNumber: 30,
  },
  {
    id: 1,
    name: "gameboy",
    playNumber: 40,
  },
  {
    id: 2,
    name: "basketball",
    playNumber: 40,
  },
  {
    id: 3,
    name: "marathon",
    playNumber: 60,
  },
];

export { playTypes };
