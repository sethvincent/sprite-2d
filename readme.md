# sprite-2d

Render game sprites!

## Install

```
npm install --save sprite-2d
```

## Usage

### Import sprite-2d and create a simple sprite:

```
var Sprite = require('sprite-2d');

var sprite = new Sprite({
  image: image,
  frames: 4,
  fps: 20
});
```

#### The `image` property

The image property should be an image that's been loaded into memory by some kind of image preloader.

**The image needs to be a horizontal spritesheet with no spaces between frames.**

The frame width is currently calculated by dividing the width of the image by the number of frames.

### In your update loop:

```
sprite.update(dt);
```

### In your draw loop:

```
sprite.draw(function(image, frame){
  context.drawImage(
    image, 
    frame.position,
    0,
    frame.width, 
    image.height, 
    entity.position.x,
    entity.position.y,
    frame.width, 
    image.height
  );
});
```

## Recommended modules

Take a look at the [crtrdg.js project at crtrdg.com](http://crtrdg.com) as well as the [game-modules wiki](https://github.com/hughsk/game-modules/wiki).

## License
MIT.
