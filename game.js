
BasicGame.Game = function (game) {

};

BasicGame.Game.prototype = {

    // Preload game assets here during development.
    // Remove this during deployment.
    preload: function() {
        //this.load.image('titlepage', 'assets/titlepage.png');
        this.load.image('sea', 'assets/sea.png');
        this.load.image('grass', 'assets/grass.png');
        this.load.spritesheet('player', 'assets/cats.png', 32, 32);
        this.load.spritesheet('cat', 'assets/Hiura Flour - cats dogs.png', 32, 32);
        this.load.spritesheet('dog', 'assets/Hiura Flour - cat and dog sprites.png', 32, 32);
    },

  create: function () { 

    // Allow keyboard control
    this.cursors = this.input.keyboard.createCursorKeys();

    // Add background
    this.grass = this.add.tileSprite(0, 0, 800, 600, 'grass');

/*  THIS USES spritesheet 'assets/Hiura Flour - cats dogs.png'
    this.player = this.add.sprite(this.game.width / 2, this.game.height - 50, 'cat');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.animations.add('idle', [0, 1, 2], 5, true);
    this.player.play('idle');
    this.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.speed = BasicGame.PLAYER_SPEED;
    this.player.body.collideWorldBounds = true;
    this.player.scale.setTo(1.5); // Scale player size by 1.5
*/
    // THIS USES spritesheet 'assets/cats.png'
    this.player = this.add.sprite(this.game.width / 2, this.game.height - 50, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.animations.add('idle', [6, 7, 8, 6], 5, true);
    this.player.animations.add('left', [18, 19, 20, 18], 5, true);
    this.player.animations.add('right', [30, 31, 32, 30], 5, true);
    this.player.animations.add('up', [42, 43, 44, 42], 5, true);
    this.player.animations.add('down', [6, 7, 8, 6], 5, true);
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
    this.dog.play('right');

    this.idleDog = this.add.sprite(150, 50, 'dog');
    this.idleDog.anchor.setTo(0.5, 0.5);
    this.idleDog.animations.add('idle', [77, 78, 79, 80], 5, true);
    this.idleDog.animations.add('left', [59, 60, 61, 62], 10, true);
    this.idleDog.animations.add('right', [71, 72, 73, 74], 10, true);
    this.idleDog.animations.add('down', [47, 48, 49, 50], 10, true);
    this.idleDog.scale.setTo(1.5);
    this.physics.enable(this.idleDog, Phaser.Physics.ARCADE);
    this.idleDog.body.collideWorldBounds = true;
    this.idleDog.body.immovable = true;
    this.idleDog.play('idle');

/*
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

    // When cat and idleDog collide, dog woofs
    this.physics.arcade.collide(this.player, this.idleDog, function() {
        console.log('Woof!');
    });
  },

  // Callback when cat and dog collide
  dogHit: function(player, dog) {
      //dog.destroy();
      console.log('Collide!');
  },

  update: function () {
    // Check collision
    this.checkCollisions();

    //  Set player initial velocity to zero
    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;

    //  Set player movement control via keyboard
    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -this.player.speed;
      this.player.play('left');
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = this.player.speed;
      this.player.play('right');
    }

    if (this.cursors.up.isDown) {
        if (this.cursors.left.isDown) {
            this.player.play('left');
        } else if (this.cursors.right.isDown) {
            this.player.play('right');
        } else {
            this.player.play('up');
        }
        this.player.body.velocity.y = -this.player.speed;

    } else if (this.cursors.down.isDown) {
        if (this.cursors.left.isDown) {
            this.player.play('left');
        } else if (this.cursors.right.isDown) {
            this.player.play('right');
        } else {
            this.player.play('down');
        }
        this.player.body.velocity.y = this.player.speed;
    }

    // Set player movement control via mouse/pointer
    if (this.input.activePointer.isDown && this.physics.arcade.distanceToPointer(this.player) > 15) {
      this.physics.arcade.moveToPointer(this.player, this.player.speed);
      if (this.player.body.velocity.x > 0) {
        this.player.play('right');
      } else if (this.player.body.velocity.x < 0) {
        this.player.play('left');
      } /* else if (this.player.body.velocity.x === 0) {
        if (this.player.body.velocity.y > 0) {
            this.player.play('down');
        } else {
            this.player.play('up');
        }
      } */
    }

  },

  render: function() {
    /*  // Show player sprite hitbox size
      this.game.debug.body(this.player);

      // Show dog sprite hitbox size
      this.game.debug.body(this.dog);*/
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};
