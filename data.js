import e from "express";
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

export function zeroToHundred() {
  if (Number < 0)Number = 0
  if (Number > 100)Number = 100
  return Number
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
    foodWeight: 30,
    junk: 20
  },
  {
    id: 1,
    name: "pizza",
    foodWeight: 40,
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
    junk: 2.5
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
    name: "deep sleep",
    dreamNumber: 50,
  },
  {
    id: 4,
    name: "toss n turn",
    dreamNumber: 10,
  },
  {
    id: 5,
    name: "decent sleep",
    dreamNumber: 20,
  },
  {
    id: 6,
    name: "nighmare",
    dreamNumber: -5,
  },
];

export { sleepTypes };

const playTypes = [
  {
    id: 0,
    name: "chess",
    playNumber: 20,
  },
  {
    id: 1,
    name: "gameboy",
    playNumber: 30,
  },
  {
    id: 2,
    name: "basketball",
    playNumber: 40,
  },
  {
    id: 3,
    name: "marathon",
    playNumber: 50,
  },
];

export { playTypes };
