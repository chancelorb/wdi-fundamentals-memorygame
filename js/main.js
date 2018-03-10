console.log("Up and running!");



var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

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
  console.log("user flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInplay.push(cards[cardId].rank);
  checkForMatch();
};
flipCard(0);
flipCard(1);
