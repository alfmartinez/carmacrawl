'use strict';

module.exports.createTransform = function(px, py, pz, rx, ry, rz, sx, sy, sz) {
  var properties = {
    position: {
      x: px,
      y: py,
      z: pz
    },
    rotation: {
      x: rx,
      y: ry,
      z: rz
    },
    scale: {
      x: sx,
      y: sy,
      z: sz
    },
  };
  return {
    type: 'transform',
    properties: properties
  };
};

module.exports.createVelocity = function(vx, vy, vz) {
  var properties = {
    x: vx,
    y: vy,
    z: vz
  };
  return {
    type: 'velocity',
    properties: properties
  };
};

module.exports.createStatus = function(type) {
  return function(level) {
    return {
      type: type,
      properties: {
        maxLevel: level,
        level: level
      }
    };
  };
};
