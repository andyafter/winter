var canvas = document.getElementById('pokertable');
var cards = ["img/cards.eps"];
var ctx = canvas.getContext('2d');
//canvas.append("canvas");
canvas.width = 500;
canvas.height = 400;

var stage = new createjs.Stage(canvas);

var bitmap = new createjs.Bitmap("cards[0]");

console.log(bitmap);

