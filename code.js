var inquirer = require("inquirer");
console.log("\n\n\n");
inquirer.prompt([

    {
        type: "list",
        message: "Choose one to begin.",
        choices: ["Start Game", "Options"],
        name: "Menu"
    }

]).then(function(user) {

    if (user.Menu === "Start Game") {
        inquirer.prompt([

            {
                type: "input",
                name: "name",
                message: "What is your name Adventurer?"

            }

        ])
    }
    if (user.Menu === "Options") {
        //     console.log("\n\n\n"); {
        inquirer.prompt([

            {
                type: "list",
                message: "What would you like to do?",
                choices: ["Saved Games", "Graphics", "Controls"],
                name: "Options"

            }

        ])
    }


});