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
    var graphics0 = new createjs.Graphics().beginFill("#ff0000").drawRoundRectComplex(250,200,50,50,5,5,5,5);
    var graphics1 = new createjs.Graphics().beginFill("#ff0000").drawRoundRectComplex(200,0,50,50,5,5,5,5);
    var graphics11 = new createjs.Graphics().beginFill("#ff0000").drawRoundRectComplex(200,350,50,50,5,5,5,5);
    var graphics2 = new createjs.Graphics().beginFill("#ff0000").drawRoundRectComplex(270,0,50,50,5,5,5,5);
    var graphics22 = new createjs.Graphics().beginFill("#ff0000").drawRoundRectComplex(270,350,50,50,5,5,5,5);
    var graphics_d = new createjs.Graphics().beginFill("#ff0000").drawRoundRectComplex(270,170,50,50,5,5,5,5);
    var graphics_e = new createjs.Graphics().beginFill("#ff0000").drawRoundRectComplex(330,170,50,50,5,5,5,5);
    var shape0 = new createjs.Shape(graphics0);
    var shape1 = new createjs.Shape(graphics1);
    var shape2 = new createjs.Shape(graphics2);
    var shape11 = new createjs.Shape(graphics11);
    var shape22 = new createjs.Shape(graphics22);
    var shape_d = new createjs.Shape(graphics_d);
    var shape_e = new createjs.Shape(graphics_e);
    stage.addChild(shape0);
    stage.addChild(shape1);
    stage.addChild(shape2);
    stage.addChild(shape11);
    stage.addChild(shape22);
    stage.addChild(shape_d);
    stage.addChild(shape_e);
    stage.update();
}


