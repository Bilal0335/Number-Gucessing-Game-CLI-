import inquirer from "inquirer";
const log = console.log;

export async function playMediumGame(): Promise<void> {
  let playingAgain;
  let randomNumber = Math.floor(Math.random() * 50 + 1);
  let chanceLeft = 20;
  log("^^**You will have total 20 chance to guess the correct number**^^");
  do {
    for (let i = 0; i < 20; i++) {
      const answer = await inquirer.prompt([
        {
          message: "Enter The Guessed Number",
          type: "number",
          name: "userInput",
        },
      ]);
      let userplay = answer.userInput;
      if (userplay === randomNumber) {
        log(
          "\nCongratulations! You have successfully guessed the right number.\n"
        );
        log("\nThanks for playing. Have a nice day!\n");
        break;
      } else {
        if (userplay > randomNumber) {
          log("\nInsert a smaller number. Try again.\n");
        } else {
          log("\nInsert a larger number. Try again.\n");
        }
      }
      chanceLeft--;
      log("Chances left to guess the random number:", chanceLeft, "\n");
      if (chanceLeft === 0) {
        log(
          "Sorry, your chances have been exhausted to guess the random number.\n"
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
