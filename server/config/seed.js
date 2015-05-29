/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model'),
  GameObject = require('../api/gameobject/gameobject.model'),
  Component = require('../api/gameobject/component/component.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
  });
});

GameObject.find({}).remove(function() {
  GameObject.create({
    name: 'Flynn Corvus',
    tag: 'player',
    layer: 'players',
    components: {
      transform: Component.createTransform(0, 0, 0, 0, 0, 0, 0, 0, 0),
      health: Component.createStatus('health')(100),
      mana: Component.createStatus('mana')(100)
    }
  }, {
    name: 'Aryaa Mell',
    tag: 'player',
    layer: 'players',
    components: {
      transform: Component.createTransform(0, 0, 0, 0, 0, 0, 0, 0, 0),
      health: Component.createStatus('health')(120),
      mana: Component.createStatus('mana')(100),
      velocity: Component.createVelocity(1, 1, 1)
    }
  }, function(err, obj) {
    console.log('finished populating gameobjects');
    if (err) console.log('Error: ' + err);
  });
});
