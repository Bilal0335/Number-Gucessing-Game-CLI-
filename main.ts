import inquirer from "inquirer";
import { playEasyGame } from "./easyGame.js";
import { playMediumGame } from "./mediumGame.js";
import { playHardGame } from "./hardGame.js";

const answer = await inquirer.prompt([
  {
    message: "Enter Your Choice ",
    type: "list",
    name: "userChoice",
    choices: ["Easy", "Medium", "Hard"],
  },
]);

if (answer.userChoice === "Easy") {
  playEasyGame();
} else if (answer.userChoice === "Medium") {
  playMediumGame();
} else if (answer.userChoice === "Hard") {
  playHardGame();
}
