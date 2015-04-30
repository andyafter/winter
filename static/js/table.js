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
    stage.addChild(circle);
    stage.update();
}


