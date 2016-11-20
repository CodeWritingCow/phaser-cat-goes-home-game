
BasicGame.Game = function (game) {

};

BasicGame.Game.prototype = {

  create: function () {

    this.sea = this.add.tileSprite(0, 0, 800, 600, 'sea');

    this.player = this.add.sprite(this.game.width / 2, this.game.height - 50, 'cat');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.animations.add('idle', [0, 1, 2], 5, true);
    this.player.play('idle');

    this.dog = this.add.sprite(50, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 10, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.play('left');

    this.dog = this.add.sprite(150, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 10, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.play('idle');

    this.dog = this.add.sprite(250, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 5, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.play('down');

    this.dog = this.add.sprite(350, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 5, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('up', [83, 84, 85, 86], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.play('up');

    this.dog = this.add.sprite(450, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 5, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.play('right');    

  },

  update: function () {
    //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};
