// random number between 1-6

// setting random urls
let url1 = getNewImageUrl();
document.querySelector(".img1").setAttribute("src", url1);

let url2 = getNewImageUrl();
document.querySelector(".img2").setAttribute("src", url2);

// defining who is the winner
let num1 = url1.split("dice")[1].split(".png")[0];
let num2 = url2.split("dice")[1].split(".png")[0];
if (num1 > num2) {
    changeH1WinnerText("Player 1 Wins!");
} else if (num1 === num2) {
    changeH1WinnerText("Draw!");
} else {
    changeH1WinnerText("Player 2 Wins!");
}

function getNewImageUrl() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return "images/dice" + randomNumber + ".png";
}

function changeH1WinnerText(text) {
    document.querySelector("div.container h1").innerHTML = text;
}

