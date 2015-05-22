'use strict';

var engines = [];

function update(GameObject) {
	GameObject.findByTag('player', function(err, players) {
		players.forEach(updatePlayer);
	});
}

function updatePlayer(player) {
	console.log('Updating player ' + player.name);
}

module.exports.update = update;
