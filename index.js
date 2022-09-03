let button = document.querySelector("button")
let winner = document.querySelector("h1");
let dices = document.querySelectorAll("img")

function throwDices() {
    firstPlayer = Math.ceil(Math.random() * 6);
    secondPlayer = Math.ceil(Math.random() * 6);
    winner.textContent = `Player ${firstPlayer > secondPlayer ? 1 : 2} Winner 🎊`;
    if (firstPlayer === secondPlayer)
        winner.textContent = "Draw ⚔";
    dices[0].setAttribute("src", `images/dice${firstPlayer}.png`);
    dices[1].setAttribute("src", `images/dice${secondPlayer}.png`);
}

button.onclick = () => throwDices();