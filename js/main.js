console.log("Up and running!");



var cards = ["queen", "queen", "king", "king"];
var cardsInplay = [];

var checkForMatch = function () {
  if (cardsInplay.length === 2) {
    if (cardsInplay[0] === cardsInplay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  };
};

var flipCard = function (cardId) {
  console.log("user flipped " + cards[cardId]);
  cardsInplay.push(cards[cardId]);
  checkForMatch();
};

flipCard(0);
flipCard(2);
