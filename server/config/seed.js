/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model'),
	GameObject = require('../api/gameobject/gameobject.model'),
	ComponentFactory = require('../api/gameobject/component/component.factory');

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
		components: [
			ComponentFactory.createTransform(0, 0, 0, 0, 0, 0, 0, 0, 0),
			ComponentFactory.createStatus('health', 100),
			ComponentFactory.createStatus('mana', 100)
		]
	}, function() {
		console.log('finished populating gameobjects');
	});
});
