var tic = require('tic');

module.exports = Sprite;

function Sprite(options) {
  var self = this;

  this.tic = tic();
  this.fps = options.fps || 12;
  this.image = options.image;
  this.frames = options.frames;

  this.game = options.game;

  this.frame = {
    index: 0,
    position: 0,
    width: this.image.width / this.frames
  };

  this.tic.interval(function() {
  	self.frame.index += 1;
  	if (self.frame.index >= self.frames) self.frame.index = 0;
    self.frame.position = self.frame.index * self.frame.width;
  }, 1 / this.fps);
}

Sprite.prototype.update = function(dt){
  this.tic.tick(dt);
};

Sprite.prototype.draw = function(callback){
  callback(this.image, this.frame);
};