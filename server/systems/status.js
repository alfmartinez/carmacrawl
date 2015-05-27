'use strict';

function doStatusUpdate(object) {
	return function(component) {
		console.log('Updating ' + object.name + ' status ' + component.properties.type);
	}
}

function doUpdate(object) {
	object.getComponentByType('status').forEach(doStatusUpdate(object));
}

module.exports = function(objects) {
	objects.find({
		'components.type': 'status'
	}, function(err, foundObjects) {
		foundObjects.forEach(doUpdate);
	});
};
