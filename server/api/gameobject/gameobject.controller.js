'use strict';

var _ = require('lodash');
var Gameobject = require('./gameobject.model');

// Get list of gameobjects
exports.index = function(req, res) {
  Gameobject.find(function (err, gameobjects) {
    if(err) { return handleError(res, err); }
    return res.json(200, gameobjects);
  });
};

// Get a single gameobject
exports.show = function(req, res) {
  Gameobject.findById(req.params.id, function (err, gameobject) {
    if(err) { return handleError(res, err); }
    if(!gameobject) { return res.send(404); }
    return res.json(gameobject);
  });
};

// Creates a new gameobject in the DB.
exports.create = function(req, res) {
  Gameobject.create(req.body, function(err, gameobject) {
    if(err) { return handleError(res, err); }
    return res.json(201, gameobject);
  });
};

// Updates an existing gameobject in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Gameobject.findById(req.params.id, function (err, gameobject) {
    if (err) { return handleError(res, err); }
    if(!gameobject) { return res.send(404); }
    var updated = _.merge(gameobject, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, gameobject);
    });
  });
};

// Deletes a gameobject from the DB.
exports.destroy = function(req, res) {
  Gameobject.findById(req.params.id, function (err, gameobject) {
    if(err) { return handleError(res, err); }
    if(!gameobject) { return res.send(404); }
    gameobject.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}