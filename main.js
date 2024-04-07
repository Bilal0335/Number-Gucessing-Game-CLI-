#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { playEasyGame } from "./easyGame.js";
import { playMediumGame } from "./mediumGame.js";
import { playHardGame } from "./hardGame.js";
const log = console.log;
async function Welcome() {
    let title = chalkAnimation.rainbow("\n\t\t Welcome to the Number Gucessing Game\n");
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });
    title.stop();
}
async function PlayGame() {
    let title = chalkAnimation.rainbow("\n\tLets start playing and Best of luck\n");
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
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
    playEasyGame();
}
else if (answer.userChoice === "Medium") {
    playMediumGame();
}
else if (answer.userChoice === "Hard") {
    playHardGame();
}
