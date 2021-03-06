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

var flipCard = function () {
  var cardId = parseInt(this.getAttribute('data-id'),10);
  console.log("user flipped " + (cards[cardId].rank));
  this.src = cards[cardId].cardImage;
  cardsInplay.push(cards[cardId].rank);
  checkForMatch();
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
};

var createBoard = function () {
  for (var i=0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
  };
};

createBoard();
