var game = new Phaser.Game(600, 450, Phaser.AUTO, '');

game.state.add('Menu', MenuState);
game.state.add('Game', GameState);
game.state.add('GameOver', GameOverState);

game.state.start('Menu');
