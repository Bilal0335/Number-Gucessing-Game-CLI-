#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import { playEasyGame } from "./easyGame.js";
import { playMediumGame } from "./mediumGame.js";
import { playHardGame } from "./hardGame.js";
const log = console.log;

async function Welcome() {
  let title = chalkAnimation.rainbow(
    "\n\t\t Welcome to the Number Gucessing Game\n"
  );
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  title.stop();
}
async function PlayGame() {
  let title = chalkAnimation.rainbow(
    "\n\tLets start playing and Best of luck\n"
  );
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  title.stop();
}

await Welcome();
await PlayGame();

const answer = await inquirer.prompt([
  {
    message: "Enter Your Choice ",
    type: "list",
    name: "userChoice",
    choices: ["Easy", "Medium", "Hard", "Exit"],
  },
]);

if (answer.userChoice === "Easy") {
  async function letStart() {
    let title = chalkAnimation.rainbow(
      "\n\tYou will have to gucess a number btween 1 to 10"
    );
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    title.stop();
  }
  await letStart();
  playEasyGame();
} else if (answer.userChoice === "Medium") {
  async function letStart() {
    let title = chalkAnimation.rainbow(
      "\n\tYou will have to gucess a number btween 1 to 50"
    );
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    title.stop();
  }
  await letStart();
  playMediumGame();
} else if (answer.userChoice === "Hard") {
  async function letStart() {
    let title = chalkAnimation.rainbow(
      "\n\tYou will have to gucess a number btween 1 to 100"
    );
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    title.stop();
  }
  await letStart();
  playHardGame();
}
