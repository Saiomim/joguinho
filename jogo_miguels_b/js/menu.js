var MenuState = {
	preload: function(){
		game.state.backgroundColor = '#71c5cf';
		game.load.image('banner', 'assets/banner_inicio.png');
	},
	
	create: function(){
		var screenWidth = game.world.width;
		var screenHeight = game.world.height;
		var banner = game.add.sprite(0, 0, 'banner');
		banner.width = game.world.width;
		banner.height = game.world.height;
		banner.inputEnable = true;
		banner.events.onInputDown.addOnce(this.start, this);
	},
	
	start: function(){
		game.state.start('Game');
	}
};