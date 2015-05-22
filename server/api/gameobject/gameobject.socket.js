/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Gameobject = require('./gameobject.model');

exports.register = function(socket) {
  Gameobject.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Gameobject.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('gameobject:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('gameobject:remove', doc);
}