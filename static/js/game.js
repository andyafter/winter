function game(cardsPos,canvas){
    var ctx = canvas.getContext('2d');
    var deckimg = document.getElementById('deck');
    var cardsimg = $('cards');
    var cards = [];
    cards[0] = [0,cardsPos[4][1],deckimg];

    //ctx.drawImage(deckimg, 374, 374, 1622-374, 2116-374, 0,cardsPos[4][1], 64,89);
    //ctx.drawImage(deckimg, 374, 374, 1622-374, 2116-374, cardsPos[4][0],cardsPos[4][1], 64,89);
    //ctx.clearRect(cardsPos[4][0],cardsPos[4][1],64,90);

    //the cards image size is 16153, 6958

    
    drawTable(cardsPos, canvas);
    drawCards(cardsPos, canvas);
}

function handleClick(event) {
     // Click Happened.
 }

function drawCards(cardsPos, canvas){
    var chips = document.getElementById('chips');
    var ctx = canvas.getContext('2d');
    //ctx.drawImage(chips,0,0,1000,1000);
}

