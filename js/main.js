console.log("Up and running!");



var cards = ["queen", "queen", "king", "king"];
var cardsInplay = [];
var cardOne = cards[0];
var cardTwo = cards[1];

cardsInplay.push(cardOne);
cardsInplay.push(cardTwo);

console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);

if (cardsInplay.length === 2) {
  if (cardsInplay[0] === cardsInplay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};
