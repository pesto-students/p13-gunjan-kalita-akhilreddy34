const { getPersonalizedGreetingMessage } = require("./greet");
const fs = require("fs");
const readline = require("readline");

const readLineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForUserName() {
  try {
    readLineInstance.question("What is your name:\n", (name) => {
      if (name && name.length) {
        const greeting = getPersonalizedGreetingMessage(name);
        fs.writeFileSync("ouput.txt", greeting, { encoding: "utf-8" });
        readLineInstance.close();
      } else {
        console.log("Please enter a valid username.");
        askForUserName();
      }
    });
  } catch (error) {
    console.log("error in file writing");
  }
}

askForUserName();
