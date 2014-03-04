var Game = require('gameloop');
var loadImages = require('load-images');
var Sprite = require('./');

var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

var game = new Game({
  renderer: canvas.getContext('2d')
});

game.width = canvas.width = 800;
game.height = canvas.height = 400;

var sprite;

loadImages('zombie-baby.png', function(err, images){
	if (err) throw err;
	
	sprite = new Sprite({
		game: game,
		image: images['zombie-baby.png'],
		frames: 4,
		fps: 8
	});

	game.start();
});

game.on('update', function(dt){
  sprite.update(dt)
});

game.on('draw', function(context){
  context.clearRect(0, 0, game.width, game.height);
  sprite.draw(function(image, frame){
		context.drawImage(
	  	image, 
	  	frame.position,
	  	0,
	  	frame.width, 
	  	image.height, 
	  	100,
	  	100,
	  	frame.width, 
	  	image.height
	  );
	});
});


