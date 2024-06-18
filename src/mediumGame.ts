import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
const log = console.log;

export async function playMediumGame(): Promise<void> {
  let playingAgain;
  let randomNumber = Math.floor(Math.random() * 50 + 1);
  let chanceLeft = 20;

  async function userMedium() {
    let chanceUser = chalkAnimation.pulse(
      `\n\t\t**You will have total ${chanceLeft.toString()} chance to guess the correct number**\n`
    );
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
  }
  await userMedium();
  do {
    for (let i = 0; i < 20; i++) {
      const answer = await inquirer.prompt([
        {
          message: "Enter The Guessed Number",
          type: "input",
          name: "userInput",
          validate: (userInput) => {
            if (isNaN(userInput)) {
              return chalk.red.bold("Please enter valild number");
            } else {
              return true;
            }
          },
        },
      ]);
      let userplay = answer.userInput;
      if (userplay === randomNumber) {
        log(
          chalk.bgGreen.italic(
            `\nCongratulations! You have successfully guessed the right number.\n`
          )
        );
        log(chalk.green("\nThanks for playing. Have a nice day!\n"));
        break;
      } else {
        if (userplay > randomNumber) {
          log(
            chalk.bgYellow.black.bold("\nInsert a smaller number. Try again.\n")
          );
        } else {
          log(
            chalk.bgYellow.black.bold("\nInsert a larger number. Try again.\n")
          );
        }
      }
      chanceLeft--;
      log("Chances left to guess the random number:", chanceLeft, "\n");
      if (chanceLeft === 0) {
        log(
          chalk.red.bold(
            "Sorry, your chances have been exhausted to guess the random number.\n"
          )
        );
        log("The random number was:", randomNumber);
        log("Thanks for playing. Have a nice day!");
      }
    }
    const responses = await inquirer.prompt([
      {
        message: "Do you want to continue (Y/N)?",
        type: "input",
        name: "continue",
      },
    ]);
    playingAgain = responses.continue.toUpperCase();
  } while (playingAgain === "Y");
}
