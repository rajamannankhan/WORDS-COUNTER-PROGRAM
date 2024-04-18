#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blueBright.underline("<------*ASSALAMUALIKUM WELCOME TO WORDS COUNTER PROGRAM*------>"));
// we have make an object to store the sentence 
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: chalk.yellowBright.italic("Enter Your Sentence"),
    },
]);
let words = answers.sentence.trim().split(" ");
console.log(chalk.redBright(words));
console.log(chalk.greenBright.bold `The Number Of Words In Your Sentence Is :${words.length}`);
console.log(chalk.yellowBright.italic("Thanks For Using My Program Jazakallah"));
