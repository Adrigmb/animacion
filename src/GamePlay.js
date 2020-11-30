
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('background', 'assets/images/fondo.png');
        game.load.spritesheet('pikachu', 'assets/images/pikachu.png', 193.3, 191, 12);
        game.load.spritesheet('charmander', 'assets/images/charmander.png', 193.3, 202.5, 12);
        game.load.audio('sonido', 'assets/sounds/pokemon.mp3');
    },
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.pikachu = game.add.sprite(-200, 600, 'pikachu');
        this.pikachu.animations.add('walk', [0,2,4,7,9,11,0,2,4,7,9,11],1,true);
        this.pikachu.animations.play("walk");
        this.charmander = game.add.sprite(-400, 600, 'charmander');
        this.charmander.animations.add('walk', [0,2,4,7,9,11,0,2,4,7,9,11],1,true);
        this.charmander.animations.play("walk");
        sonido = game.add.audio('sonido');sonido.play('', 0, 0.5, true);
        
    },
    update: function() {
        console.log("update");
        this.pikachu.x += 2;this.charmander.x += 2;
        if (this.pikachu.x == 1210){this.pikachu = game.add.sprite(-100, 600, 'pikachu');this.pikachu.animations.add('walk', [0,2,4,7,9,11,0,2,4,7,9,11],1,true);this.pikachu.animations.play("walk");}
        if (this.charmander.x == 1210){this.charmander= game.add.sprite(-100, 600, 'charmander');this.charmander.animations.add('walk', [0,2,4,7,9,11,0,2,4,7,9,11],1,true);this.charmander.animations.play("walk");}
    }
}

var game = new Phaser.Game(1200, 960, Phaser.CANVAS);
var sonido;
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");