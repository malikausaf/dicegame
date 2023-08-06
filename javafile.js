// For Dice 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);
var change1 = document.querySelector(".img1");
if (randomNumber1 ===  1)
{
    change1.setAttribute("src", "./images/dice1.png");
}
else if (randomNumber1 ===  2)
{
    change1.setAttribute("src", "./images/dice2.png");
}
else if (randomNumber1 ===  3)
{
    change1.setAttribute("src", "./images/dice3.png");
}
else if (randomNumber1 ===  4)
{
    change1.setAttribute("src", "./images/dice4.png");
}
else if (randomNumber1 ===  5)
{
    change1.setAttribute("src", "./images/dice5.png");
}
else if (randomNumber1 ===  6)
{
    change1.setAttribute("src", "./images/dice6.png");
}

// Now for Dice 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);
var change2 = document.querySelector(".img2");
if (randomNumber2 ===  1)
{
    change2.setAttribute("src", "./images/dice1.png");
}
else if (randomNumber2 ===  2)
{
    change2.setAttribute("src", "./images/dice2.png");
}
else if (randomNumber2 ===  3)
{
    change2.setAttribute("src", "./images/dice3.png");
}
else if (randomNumber2 ===  4)
{
    change2.setAttribute("src", "./images/dice4.png");
}
else if (randomNumber2 ===  5)
{
    change2.setAttribute("src", "./images/dice5.png");
}
else if (randomNumber2 ===  6)
{
    change2.setAttribute("src", "./images/dice6.png");
}

// For the winner:
var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2)
{
    heading.innerHTML = "🚩 Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1)
{
    heading.innerHTML = "Player 2 Wins! 🚩"
}
else if (randomNumber2 === randomNumber1 || (randomNumber2 === 6 && randomNumber1 === 6))
{
    heading.innerHTML = "Draw!"
}