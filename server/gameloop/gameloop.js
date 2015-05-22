'use strict';
var GameObject = require('../api/gameobject/gameobject.model');
var engines = [];

function processInput() {

}

function update() {
	engines.forEach(function(engine) {
		engine.update(GameObject);
	});
}

module.exports.doLoop = update;

module.exports.registerEngine = function(engine) {
	engines.push(engine);
}
