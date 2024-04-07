import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const log = console.log;
async function letStart() {
    let title = chalkAnimation.rainbow("\n\tYou will have to gucess a number btween 1 to 100");
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });
    title.stop();
}
await letStart();
export async function playHardGame() {
    let playingAgain;
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    let chanceLeft = 50;
    async function userHard() {
        let chanceUser = chalkAnimation.rainbow(`\n\t\t**You will have total ${chanceLeft.toString()} chance to guess the correct number**\n`);
        await new Promise((resolve) => {
            setTimeout(resolve, 5000);
        });
    }
    await userHard();
    do {
        for (let i = 0; i < 500; i++) {
            const answer = await inquirer.prompt([
                {
                    message: "Enter The Guessed Number",
                    type: "number",
                    name: "userInput",
                },
            ]);
            let userplay = answer.userInput;
            if (userplay === randomNumber) {
                log("\nCongratulations! You have successfully guessed the right number.\n");
                log("\nThanks for playing. Have a nice day!\n");
                break;
            }
            else {
                if (userplay > randomNumber) {
                    log("\nInsert a smaller number. Try again.\n");
                }
                else {
                    log("\nInsert a larger number. Try again.\n");
                }
            }
            chanceLeft--;
            log("Chances left to guess the random number:", chanceLeft, "\n");
            if (chanceLeft === 0) {
                log("Sorry, your chances have been exhausted to guess the random number.\n");
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
