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
                // console.log("You are now in room 3.");

                {
                    inquirer.prompt([

                        {
                            type: "list",
                            name: "room3",
                            message: "As you pass the threshold into Room 3, you feel a slight gust of hot air across your face. You look to your left and see what looks to be a furnace door, hanging open slightly, with a red glow from within. In front of you there is another door with a large X painted across it, with a door to the right polished to an almost mirror-like sheen.",
                            choices: ["Walk up to the furnace door and peer inside.", "Examine the room.", "Charge through the polished door to your right.", "head to the door in front of you."]

                        }

                    ]).then(function(user) {

                        if (user.room3 === "Charge through the polished door to your right.") {
                            console.log("You bounce into the door, expecting it to budge, and bounce off, falling to the ground. You stand up and shake your head, getting reoriented with your surroundings. You take one last look at the door and see upon further inspection that there is a deadbolt keeping the door shut.");
                        }

                        if (user.room3 === "Walk up to the furnace door and peer inside.") {
                            console.log("As you open the furnace door wider, you get blasted by a wall of hot air. When you lean through the opening, you see a fire smouldering at the bottom of the pit a long ways down, and the remnants of a ladder on the other side of the chimney.");
                        }

                        if (user.room3 === "Examine the room.") {
                            console.log("You look around the room, taking everything in. As the lighting above you flickers on an off, you see a chair sitting in the corner, with some sort of dark puddle underneath it. Looking at the door in front of you, you notice that there is something carved into the wood. You approach it and read 'Dead end ahead'.");
                        }

                        if (user.room3 === "head to the door in front of you.") {
                            console.log("As you walk across the room to the door with an X on it, the lights flicker and you think you see something in the chair in the corner. You shake your head and continue on. When you reach the door, you try the handle to find it unlocked. You lean into the door to open it and find it wedged, but it opens after you put your shoulder into it.");
                        }

                    });
                }

            };

            if (user.Room1 === "Move through the door in front of you.") {
                console.log("You are now in room 2.");
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