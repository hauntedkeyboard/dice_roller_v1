//Dice Roller program
document.querySelector("button").addEventListener("click", rollDice);

function rollDice(){
    const numOfDice = document.querySelector("input").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/die-${value}.png" alt="Dice ${value}">`);
    };

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");


};
