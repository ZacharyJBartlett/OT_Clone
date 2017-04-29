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

            },

            {
                type: "list",
                name: "Room1",
                message: "You wake up in a dark room, with a flickering light above you. You look around and see three doors, one to your left, one to your right, and one in front of you. The door on your right is blocked by a pile of rubble.",
                choices: ["Move through the door on the left.", "Move through the door in front of you.", "Examine the pile of rubble."]
            }

        ]).then(function(user) {

            if (user.Room1 === "Move through the door on the left.") {
                console.log("You are now in room 3.");
            };

            if (user.Room1 === "Move through the door in front of you.") {
                console.log("You are now in room 2");
            }


            if (user.Room1 === "Examine the pile of rubble.") {
                console.log("As you look into the pile, something leaps out and hits you in the head, knocking you unconcious.");

                inquirer.prompt([

                    {
                        type: "list",
                        name: "SecondTry",
                        message: "You come to slowly, with the same flickering light above you. You look around and see three doors, one to your left, one to your right, and one in front of you. The door on your right is blocked by a pile of rubble.",
                        choices: ["Move through the door on the left.", "Move through the door in front of you."]
                    }

                ]).then(function(user) {

                    if (user.SecondTry === "Move through the door on the left.") {
                        console.log("You are now in room 3.");
                    };

                    if (user.SecondTry === "Move through the door in front of you.") {
                        console.log("You are now in room 2");
                    }
                })
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


        })
    }
});