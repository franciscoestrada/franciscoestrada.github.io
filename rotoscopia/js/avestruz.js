var game = new Phaser.Game(512, 128, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var player, derecha, izquierda, fondo;

function preload() {
// Precarga la imagen de fondo	
	game.load.image('bosque', 'fondos/bosque.jpg');
// Precarga la hoja de sprites
    game.load.spritesheet('heroe', 'sprites/avestruz.png', 59, 66);

}

function create() {
    
// Para que la imagen de fondo sea con movimiento, se carga como tileSprite
	fondo = game.add.tileSprite(0, 0, 512, 128, 'bosque');
   
// Agregar al personaje en el escenario
    player = game.add.sprite(game.world.centerX, 35, "heroe");

// Dos animaciones. Para caminar a la derecha se usan los fotogramas secuenciales.
// Para caminar en reversa, los fotogramas se cargan a la inversa.    
    player.animations.add('der', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, true);
    player.animations.add('izq', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
	
//  Los controles del jugador con teclas A y D
    
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
}

function update() {

// Animar el personaje y mover el fondo sobre el eje x

    if (derecha.isDown) 
    {
		fondo.tilePosition.x -= 1;
        player.animations.play('der');
    } 
    else if (izquierda.isDown) 
    {
		fondo.tilePosition.x += 1;        
        player.animations.play('izq');
    }
    else 
    {
        //  si no se mueve, usar el fotograma 0
        player.animations.stop();
        player.frame = 0;
    }  
}