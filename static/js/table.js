function init(){
    var canvas = document.getElementById('pokertable');
    var cards = ["static/img/cards.eps"];
    var swidth = screen.width;
    var sheight = screen.height;
    canvas.width = swidth * 0.6; //// 
    canvas.height = sheight * 0.5;
    var cardwidth = 64;
    var cardheight = 89;
    var stage = new createjs.Stage(canvas);
    //circle.x = 100;
    //circle.y = 100;
    var cardsPos=[];
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


    var graphics;
    var shape;

    
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
    
    
    stage.update();


    //////// Now let's draw the deck, it's simply a card


    /// in the card back picture
    /// width 374 ~ 1622
    /// height 374 ~ 2116

    

    var deckimg = document.getElementById('deck');
    console.log(deckimg);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(deckimg, 374, 374, 1622-374, 2116-374, 0,cardsPos[4][1], 64,89);
}
