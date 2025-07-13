let userscore = 0;
let compscore = 0;

const userscorePara = document.getElementById("user-score");
const compscorePara = document.getElementById("comp-score");
const msg = document.getElementById("msg-container");

const choices = document.querySelectorAll("button");

function getComChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

function playRound(userChoice) {
    const compChoice = getComChoice();

    if (userChoice === compChoice) {
        msg.textContent = "It's a tie!";
        msg.style.backgroundColor = "navy";
        return;
    }

    const userWins =
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper");

    if (userWins) {
        userscore++;
        userscorePara.textContent = userscore;
        msg.textContent = `You won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorePara.textContent = compscore;
        msg.textContent = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userChoice = btn.classList[0];

        let fullChoice;
        if (userChoice === "R") fullChoice = "rock";
        else if (userChoice === "P") fullChoice = "paper";
        else if (userChoice === "S") fullChoice = "scissors";

        playRound(fullChoice);
    });
});
