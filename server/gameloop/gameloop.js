'use strict';
var GameObject = require('../api/gameobject/gameobject.model');
var systems = [];

function processInput() {

}

function update() {
  systems.forEach(function(system) {
    system(GameObject);
  });
}

module.exports.doLoop = update;

module.exports.registerSystem = function(system) {
  systems.push(system);
};
