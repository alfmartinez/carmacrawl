/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thing = require('./thing.model');
var https = require('https');

// Get list of things
exports.index = function(req, res) {

	https.request({
		hostname: 'jenkins.carma.grdf.fr',
		port: 443,
		path: '/api/json',
		method: 'GET',
		auth: 'IX2061:2280d8499a4c3543e2f3b75ba5bb10d7',
		rejectUnauthorized: false,
		headers: {
			'Content-Type': 'application/json'
		}
	}, function(apiRes) {
		var str = '';
		apiRes.on('data', function(chunk) {
			str += chunk;
		});
		apiRes.on('end', function() {
			return res.json(JSON.parse(str).jobs);
		});
	}).end();
};

// Get a single thing
exports.show = function(req, res) {
	Thing.findById(req.params.id, function(err, thing) {
		if (err) {
			return handleError(res, err);
		}
		if (!thing) {
			return res.send(404);
		}
		return res.json(thing);
	});
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
	Thing.create(req.body, function(err, thing) {
		if (err) {
			return handleError(res, err);
		}
		return res.json(201, thing);
	});
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
	if (req.body._id) {
		delete req.body._id;
	}
	Thing.findById(req.params.id, function(err, thing) {
		if (err) {
			return handleError(res, err);
		}
		if (!thing) {
			return res.send(404);
		}
		var updated = _.merge(thing, req.body);
		updated.save(function(err) {
			if (err) {
				return handleError(res, err);
			}
			return res.json(200, thing);
		});
	});
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
	Thing.findById(req.params.id, function(err, thing) {
		if (err) {
			return handleError(res, err);
		}
		if (!thing) {
			return res.send(404);
		}
		thing.remove(function(err) {
			if (err) {
				return handleError(res, err);
			}
			return res.send(204);
		});
	});
};

function handleError(res, err) {
	return res.send(500, err);
}
