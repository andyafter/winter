var cardwidth = 64;
var cardheight = 89;

var counter = 0;
var table = [];
var cardsPos = [];

var holes = []; // [compute, computer, user, user]
var turn;   //// turn to store which turn is this. preflop, flop, turn, river
var turnnum = 0; // 0,1,2,3
var table = [];
var blind = 1;
var betseq = [""];
var bank = [200,200]; // computer, player 

var chips = [0,0];    // computer player
var chipsPos = [];
var chipsThisRound = [0,0];
var canvas = document.getElementById('pokertable');
var allcards = [16153, 6958];
var pokerDeck = [];
var t2n={ "preflop":0,
	  "flop":1,
	  "turn":2,
	  "river":3
};


for(var n=0; n<52;n++){
    pokerDeck[n] = n; 
}


var win = ["r","r","r","r","r","r","r","r","c","c","c","f","f"];
var lose = ["f","f","f","f","f","f","f","f","c","c","c","r","r"];
var thisround = [];


var bet_seq = [];
bet_seq["preflop continuing"] = ["cc", "crc", "crrc", "crrrc", "rc", "rrc", "rrrc"];
bet_seq["preflop terminal"] = ["f", "rf", "rrf", "rrrf", "crf", "crrf", "crrrf"];
bet_seq["flop turn continuing"] = ["cc", "crc", "crrc", "crrrc", "crrrrc", "rc", "rrc", "rrrc", "rrrrc"];
bet_seq["flop turn terminal"] = ["rf", "rrf", "rrrf", "rrrrf", "crf", "crrf", "crrrf", "crrrrf"];
bet_seq["river continuing"] = ["cc", "crc", "crrc", "crrrc", "crrrrc", "rc", "rrc", "rrrc", "rrrrc"];
bet_seq["river terminal"] = ["cc", "rc", "rf", "rrc", "rrf", "rrrc", "rrrf", "rrrrc", "rrrrf", "crc", "crf", "crrc", "crrf", "crrrc", "crrrf", "crrrrc", "crrrrf"];
 
var action = ['f', 'c', 'r'];


function card2pos(num){
    return 0;
}


function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}



function init(){
    //var canvas = document.getElementById('pokertable');
    var swidth = screen.width;
    var sheight = screen.height;
    var cardwidth ;
    var cardheight;
    var stage = new createjs.Stage(canvas);
    //circle.x = 100;
    //circle.y = 100;

    // here is something for the url query 
    /*
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://127.0.0.1:5000/dealhole", false );
    xmlHttp.send( null );
    a = xmlHttp.responseText;
    */
    ///// end of the query
    console.log(bet_seq);

 
    //if (window.matchMedia("(min-width: 2000px)").matches){
    canvas.width = swidth*0.6; //// 
    canvas.height = sheight*0.5;
    
    chipsPos[0] = [canvas.width/2 - 20, 109];
    chipsPos[1] = [canvas.width/2 - 20, canvas.height - 129];


    cardwidth = 64;
    cardheight = 89;

    cardsPos[0] = [canvas.width/2-cardwidth,2];
    cardsPos[1] = [canvas.width/2,2];
    // Hole cards of AI
    cardsPos[2] = [canvas.width/2-cardwidth,canvas.height-cardheight-2];
    cardsPos[3] = [canvas.width/2,canvas.height-cardheight-2];
    //hole cards of player
    cardsPos[4] = [canvas.width/2-3*cardwidth,canvas.height/2-cardheight/2];
    cardsPos[5] = [canvas.width/2-2*cardwidth,canvas.height/2-cardheight/2];
    cardsPos[6] = [canvas.width/2-1*cardwidth,canvas.height/2-cardheight/2];
    cardsPos[7] = [canvas.width/2+0.5*cardwidth,canvas.height/2-cardheight/2];
    cardsPos[8] = [canvas.width/2+2*cardwidth,canvas.height/2-cardheight/2];

    //////// Now let's draw the deck, it's simply a card
    /// in the card back picture
    /// width 374 ~ 1622
    /// height 374 ~ 2116

    //var deckimg = document.getElementById('deck');
    //console.log(deckimg);
    var ctx = canvas.getContext('2d');
    //ctx.drawImage(deckimg, 374, 374, 1622-374, 2116-374, 0,cardsPos[4][1], 64,89);
    game(cardsPos,canvas);
    
}

function drawTable(){
    //console.log("ran");
    var graphics;
    var shape;
    var stage = new createjs.Stage(canvas);
    var cardwidth = 64;
    var cardheight = 89;
    //var chips = document.getElementById('chips');
    //var ctx = canvas.getContext('2d');

    
    /////////////////////////   draw layout of the whole table    /////////////////////////
    for(var i =0; i<7;i++){
	graphics = new createjs.Graphics().setStrokeStyle(2,'round').beginStroke("white").drawRoundRect(cardsPos[i][0],cardsPos[i][1],cardwidth,cardheight,3,3,3,3);
	shape = new createjs.Shape(graphics);
	stage.addChild(shape);
    }// draw cards

    graphics = new createjs.Graphics().setStrokeStyle(1).beginStroke("#00E600").drawRoundRect(cardsPos[7][0],cardsPos[7][1],cardwidth,cardheight,3,3,3,3);
    shape = new createjs.Shape(graphics);
    stage.addChild(shape);

    graphics = new createjs.Graphics().setStrokeStyle(1).beginStroke("yellow").drawRoundRect(cardsPos[8][0],cardsPos[8][1],cardwidth,cardheight,3,3,3,3);
    shape = new createjs.Shape(graphics);
    stage.addChild(shape);

    //stage.enableMouseOver();
    //var btn1 = stage.addChild(new Button("Hello!", "#F00"));
    //btn1.y = 20;
    //createjs.Ticker.on("tick", stage);
    //ctx.drawImage(chips,0,0,2542,1908,);
    stage.update();
}

$('#startbutton').on('click', function (e){
    //$('#yourbank').text(--counter);
    //drawTable();
    var ctx = canvas.getContext('2d');
    var deckimg = document.getElementById('deck');
    var cardsimg = document.getElementById('cards');
    var chipsimg = document.getElementById('chips');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTable();
    ctx.drawImage(chipsimg, 0, 0, 100, 100, chipsPos[0][0],chipsPos[0][1], 25,25);
    ctx.drawImage(chipsimg, 0, 0, 100, 100, chipsPos[1][0],chipsPos[1][1], 25,25);
    //console.log(parseInt(13/4));
    // Always remember that the .length can give you the length of the array
    initRound();
    console.log(betseq.length);
})

function fold(){
    chips[0]+=chipsThisRound[0];
    chips[1]+=chipsThisRound[1];
    bank[0]+= chips[1];
    bank[1]-= chips[1];
    chipsThisRound = [0,0];
    chips = [0,0];
    thisround = [];
    initRound();
}

function call(){ // or check
    bank[1]-=1;
    chipsThisRound[1]+=1;
    if(turn=="preflop"){
	// blind = 0 consider
	if(blind==0){
	    computerAct();
	}
    }
    else if(turn=="flop" || turn=="turn"){
	
    }
    else{

    }

}

function raise(){


}

function computerAct(){
    shuffle(thisround);
    s = thisround[1];
    if(s=="r"){
	bank[0]-=2;
	chipsThisRound[0]+=2;
    }
}

function show(){
    // query the server for answer of hands comparison
    // card sequence: looks like this:
    // "computer|computer|player|player|table|table|table|table|table"
    
}



//// the card suit sequence:
//// C H S D

function initRound(){
    // all initiation 
    turn  = "preflop";
    turnnum = 0;
    betseq = [""];
    blind = (blind+1)%2; // changing the blind status

    shuffle(pokerDeck);
    shuffle(win);
    shuffle(lose);
    holes = pokerDeck.slice(0,4);
    table = pokerDeck.slice(4,9);
    // end of initiation

    var ctx = canvas.getContext('2d');
    var deckimg = document.getElementById('deck');
    var cardsimg = document.getElementById('cards');
    var chipsimg = document.getElementById('chips');
    var xmlHttp = new XMLHttpRequest();
    var url;

    url="http://127.0.0.1:5000/evaluate/";
    for(n=0;n<9;n++){
	url+=pokerDeck[n].toString();
	if(n<8){
	    url+='|';
	}
    }

    xmlHttp.open( "GET",url , false );
    xmlHttp.send( null );
    a = xmlHttp.responseText;
    if(a=="win"){
	thisround = win;
    }
    else{
	thisround = lose;
    }

    if(blind = 1){ // the computer gets the big blind
	// query a strategy with a string
	// '|' to seperate everything, 'e' to represent empty blabla
	// round|computer|computer|boardstring|bs|bs|bs|bs
	chipsThisRound=[1,2];// if blind==1 computer is the small blind
	// And it is computer's turn to act
	bank[0]-=1;
	bank[1]-=2;
    }
    else{
	chipsThisRound=[2,1];
	bank[0]-=2;
	bank[1]-=1;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTable();
    
    ctx.drawImage(deckimg, 374, 374, 1622-374, 2116-374, cardsPos[0][0],cardsPos[0][1], 64,89);
    ctx.drawImage(deckimg, 374, 374, 1622-374, 2116-374, cardsPos[1][0],cardsPos[1][1], 64,89);
    ctx.drawImage(cardsimg, allcards[0]/13*(pokerDeck[2]%13), allcards[1]/4*(parseInt(pokerDeck[2]/13)),parseInt(allcards[0]/13),parseInt(allcards[1]/4), cardsPos[2][0],cardsPos[2][1], 64,89);
    ctx.drawImage(cardsimg, allcards[0]/13*(pokerDeck[3]%13), allcards[1]/4*(parseInt(pokerDeck[3]/13)),parseInt(allcards[0]/13),parseInt(allcards[1]/4), cardsPos[3][0],cardsPos[3][1], 64,89);

    ctx.drawImage(chipsimg, 0, 0, 100, 100, chipsPos[0][0],chipsPos[0][1], 25,25);
    ctx.drawImage(chipsimg, 0, 0, 100, 100, chipsPos[1][0],chipsPos[1][1], 25,25);
    
    $('#aibank').text(bank[0]);
    $('#yourbank').text(bank[1]);
}
