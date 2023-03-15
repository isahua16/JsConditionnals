let user_points = 9;
let is_member = true;
let user_name = "Isael";
if (user_points >= 75) {
    console.log("Congratulations, you have won the game!");
} else if (user_points >= 50) {
    console.log("You are almost at 75 points!");
} else {
    console.log("Keep going, you are doing great!");
}

if (is_member === truegui && user_points >= 90) {
    console.log("You ROCK!");
} else {
    console.log("You are not special...");
}

if (!is_member || user_points < 10) {
    console.log("Please leave");
} else {
    console.log("Keep going!");
}

if (user_name === "Alex") {
    console.log("Welcome to the class, Alex!");
} else {
    console.log("Welcome to the class!");
}