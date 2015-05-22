'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ComponentSchema = new Schema({
	type: String,
	properties: Schema.Types.Mixed
});

module.exports = ComponentSchema;
