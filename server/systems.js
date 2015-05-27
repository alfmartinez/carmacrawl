/**
 * Main application systems
 */

'use strict';
var StatusSystem = require('./systems/status');

module.exports = function(loop) {
	loop.registerSystem(StatusSystem);

};
