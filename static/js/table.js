function init(){
    var canvas = document.getElementById('pokertable');
    var cards = ["static/img/cards.eps"];
    var swidth = screen.width;
    var sheight = screen.height;
    canvas.width = swidth * 0.4; //// 
    canvas.height = sheight * 0.5;
    var cardwidth = 64;
    var cardheight = 89;
    var stage = new createjs.Stage(canvas);
    //circle.x = 100;
    //circle.y = 100;
    var cardsPos=[];
    cardsPos[0] = [canvas.width/2-cardwidth,0];
    cardsPos[1] = [canvas.width/2,0]; // Hole cards of AI
    cardsPos[2] = [canvas.width/2-cardwidth,canvas.height-cardheight];
    cardsPos[3] = [canvas.width/2,canvas.height-cardheight]; //hole cards of player


    var graphics;
    var shape;
    for(var i in cardsPos){
	graphics = new createjs.Graphics().beginFill("#ff00ff").drawRoundRectComplex(cardsPos[i][0],cardsPos[i][1],cardwidth,cardwidth,3,3,3,3);
	shape = new createjs.Shape(graphics);
	if(i==1){
	    for(var j in shape){
		console.log(j);
	    }
	}
	stage.addChild(shape);
	console.log("new");
    }// draw cards
    
    stage.update();
}



