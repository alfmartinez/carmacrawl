/**
 * Main application systems
 */

'use strict';
var HealthSystem = require('./systems/health'),
	MovementSystem = require('./systems/movement');

module.exports = function(loop) {
	loop.registerSystem(HealthSystem);
	loop.registerSystem(MovementSystem);
};
