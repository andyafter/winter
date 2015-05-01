function init(){
    var canvas = document.getElementById('pokertable');
    var cards = ["static/img/cards.eps"];
    canvas.width = 500;
    canvas.height = 400;
    var stage = new createjs.Stage(canvas);
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    //circle.x = 100;
    //circle.y = 100;
    var graphics = new createjs.Graphics().beginFill("#ff0000").drawRoundRectComplex(250,200,50,50,5,5,5,5);
    var shape = new createjs.Shape(graphics);
    stage.addChild(shape);
    stage.update();
}


