var game = new Phaser.Game(800, 600, 
            Phaser.AUTO, '', 
            { preload: preload, create: create, update: update });

var player;

function preload() {
// Precarga la hoja de sprites en la memoria de la computadora.
//  game.load.spritesheet('heroe', 'imagen/dama.png', 48, 92);
    game.load.spritesheet('heroe', 'sprites/blanco.png', 64, 64);
}

function create() {
// Un color de fondo:
   game.stage.backgroundColor = "#4488AA";
   
// Agregar el héroe al centro del escenario
    player = game.add.sprite(game.width / 2, game.height / 2, "heroe");
    
// Seleccionar los fotogramas para las animaciones.
    player.animations.add('der', [65, 66, 67, 68, 69, 70, 71], 10, true);
    player.animations.add('izq', [72, 73, 74, 75, 76, 77, 78, 79], 10, true);
    player.animations.add('aba', [37, 38, 39, 40, 41, 42, 43, 44], 10, false);
    player.animations.add('arr', [4, 5, 6, 7], 10, true);
    player.animations.add('sal', [81, 82, 83, 84, 85, 86, 87], 10, false);
    
//  Asignar las teclas para controlar al héroe.  
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    arriba = game.input.keyboard.addKey(Phaser.Keyboard.W);
    abajo = game.input.keyboard.addKey(Phaser.Keyboard.S);
    salto = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    }

function update() {
// Mover al héroe
    if (derecha.isDown) 
    {      
        player.x += 1;
        player.animations.play('der');
    } 
    else if (izquierda.isDown) 
    {
        player.x -= 1;
        player.animations.play('izq');
    }
     else if (arriba.isDown) 
    {
        player.animations.play('arr');
    }
    else if (salto.isDown) 
    {
        player.x += 2;
        player.animations.play('sal');
    }
    else if (abajo.isDown) 
    {
        //player.y -= 1;
        player.animations.play('aba');
    }
    else 
    {
        //  si no, quedarse quieto en el fotograma 1
        player.animations.stop();
        player.frame = 128;
    }  
}