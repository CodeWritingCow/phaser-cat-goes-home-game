
BasicGame.Game = function (game) {

};

BasicGame.Game.prototype = {

  create: function () {

    // Allow keyboard control
    this.cursors = this.input.keyboard.createCursorKeys();

    // Add background
    this.sea = this.add.tileSprite(0, 0, 800, 600, 'sea');

    this.player = this.add.sprite(this.game.width / 2, this.game.height - 50, 'cat');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.animations.add('idle', [0, 1, 2], 5, true);
    this.player.play('idle');
    this.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.speed = BasicGame.PLAYER_SPEED;
    this.player.body.collideWorldBounds = true;
    this.player.scale.setTo(1.5); // Scale player size by 1.5

    this.dog = this.add.sprite(50, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 10, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.scale.setTo(1.5);

    // 'enableBody' is a property for Phaser group objects
    // this.dog.enableBody = true;
    
    // Enable Game Objects physics body for dog
    this.physics.enable(this.dog, Phaser.Physics.ARCADE);

    // 'physicsBodyType' is a property for Phaser group objects
    // this.dog.physicsBodyType = Phaser.Physics.ARCADE;
    this.dog.play('left');
/*
    this.dog = this.add.sprite(150, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 10, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.scale.setTo(1.5);
    this.dog.play('idle');

    this.dog = this.add.sprite(250, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 5, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.scale.setTo(1.5);
    this.dog.play('down');

    this.dog = this.add.sprite(350, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 5, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('up', [83, 84, 85, 86], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.scale.setTo(1.5);
    this.dog.play('up');

    this.dog = this.add.sprite(450, 50, 'dog');
    this.dog.anchor.setTo(0.5, 0.5);
    this.dog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.dog.animations.add('left', [59, 60, 61, 62], 5, true);
    this.dog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.dog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.dog.scale.setTo(1.5);
    this.dog.play('right');    
*/
  },

  checkCollisions: function() {
    this.physics.arcade.overlap(
      this.player, this.dog, this.dogHit, null, this);
  },

  // Callback when cat and dog collide
  dogHit: function(player, dog) {
      //dog.destroy();
      console.log('Collide!');
  },

  update: function () {
    //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
    
    // Check collision
    this.checkCollisions();

    //  Set player initial velocity to zero
    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;

    //  Set player movement control via keyboard
    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -this.player.speed;
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = this.player.speed;
    }

    if (this.cursors.up.isDown) {
      this.player.body.velocity.y = -this.player.speed;
    } else if (this.cursors.down.isDown) {
      this.player.body.velocity.y = this.player.speed;
    }

    // Set player movement control via mouse/pointer
    if (this.input.activePointer.isDown && this.physics.arcade.distanceToPointer(this.player) > 15) {
      this.physics.arcade.moveToPointer(this.player, this.player.speed);
    }
    

  },

  render: function() {
      // Show player sprite hitbox size
      this.game.debug.body(this.player);

      // Show dog sprite hitbox size
      this.game.debug.body(this.dog);
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};
