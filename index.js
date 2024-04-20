import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with Computer generated number and shoe result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    }
]);
// agar condition true ho jati he to 'if' ka block Run ho gae ga
// our agar condition fales ho jati he to else ka block Run ho jae ga
//hamen user ka input 'answers' se mily ga. ham 'answers' men gaen ge 'answers' men jakar ham ny jo nam rakha he us nam se usy talash karen ge 
if (answers.userguessedNumber === randomNumber) {
    console.log("congtratulation! you guessed a right number.");
}
else {
    console.log("you guessed wrong numder.");
}
