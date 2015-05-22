'use strict';

var mongoose = require('mongoose'),
	Component = require('./component/component.model'),
	Schema = mongoose.Schema;

var GameObjectSchema = new Schema({
	name: String,
	tag: String,
	layer: String,
	components: [Component]
});

GameObjectSchema.methods = {
	addComponent: function(component) {
		this.components.push(component);
	}
};

module.exports = mongoose.model('Gameobject', GameObjectSchema);
