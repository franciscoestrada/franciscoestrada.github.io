var game = new Phaser.Game(512, 128, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player;

function preload() {
	
	game.load.image('bosque', 'fondos/bosque.jpg');
// Carga la hoja de sprites en la memoria de la computadora.
    game.load.spritesheet('heroe', 'sprites/spritesheet.png', 56, 66);

}

function create() {
// Un color de fondo:
   game.stage.backgroundColor = "#4488AA";
// Una imagen de fondo
	game.add.sprite(0, 0, 'bosque');
   
// Agregar al héroe en el escenario
    player = game.add.sprite(game.world.centerX, game.world.centerY, "heroe");

// Las dos animaciones, caminar a izquierda y derecha
    player.animations.add('der', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, true);
    player.animations.add('izq', [117, 118, 119, 120, 121, 122, 123, 124, 125], 10, true);
	player.animations.add('gizq', [169, 170, 171, 172, 173, 174], 10, true);
	player.animations.add('gder', [195, 196, 197, 198, 199, 200], 10, true);
	
    //  Los controles del jugador con teclas A y D
    
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
	ponchiz = game.input.keyboard.addKey(Phaser.Keyboard.W);
	ponchder = game.input.keyboard.addKey(Phaser.Keyboard.S);

}

function update() {

// Mover al héroe

    if (derecha.isDown) 
    {
        player.x += 1;
//		fondo.tilePosition.x += 1;
        player.animations.play('der');
    } 
    else if (izquierda.isDown) 
    {
       	player.x -= 1;
        player.animations.play('izq');
    }
	else if (ponchiz.isDown) 
    {
        player.animations.play('gizq');
    }
	else if (ponchder.isDown) 
    {
        player.animations.play('gder');
    }
    else 
    {
        //  si no, quedarse quieto
        player.animations.stop();
        player.frame = 130;
    }  
}