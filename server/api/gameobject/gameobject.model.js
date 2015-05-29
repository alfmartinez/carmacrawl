'use strict';

var mongoose = require('mongoose'),
  Component = require('./component/component.model'),
  Schema = mongoose.Schema;

var GameObjectSchema = new Schema({
  name: String,
  tag: String,
  layer: String,
  components: Schema.Types.Mixed
});

GameObjectSchema.methods = {
  addComponent: function(component) {
    this.components.set(component.type, component);
  },
  getComponentByType: function(type) {
    return this.components.filter(function(component) {
      return component.type == type;
    });
  }
};

GameObjectSchema.statics = {
  findByTag: function(tag, cb) {
    return this.find({
      tag: tag
    }, cb);
  }
};

module.exports = mongoose.model('Gameobject', GameObjectSchema);
