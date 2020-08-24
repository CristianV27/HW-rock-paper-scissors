const options = ["rock", "paper", "scissors"];

function pickOption() {
    return options[Math.floor(Math.random() * 3)];
}

function checkWinner(user, computer) {
    if (user === computer) {
        return "draw";
    } else if (user === "rock") {
        if (computer === "paper") {
            return "computer";
        } else return "user";
    } else if (user === "paper") {
        if (computer === "scissors") {
            return "computer";
        } else return "user";
    } else if (user === "scissors") {
        if (computer === "rock") {
            return "computer";
        } else return "user";
    }
}

function play() {
    const computer = pickOption();
    console.log("computer: " + computer);
    const user = pickOption();
    console.log("user: " + user);
    const winner = checkWinner(user, computer);
    console.log("the winner is: " + winner);
}

window.addEventListener("load", function () {
    play();
    console.log("refresh to play again");
})