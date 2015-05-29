'use strict';

function doHealthUpdate(object) {
	console.log('Updating ' + object.name + ' health');
}

function doUpdate(object) {
	doHealthUpdate(object);
}

module.exports = function(objects) {
	objects.find({
		'components.health': {
			$exists: true
		}
	}, function(err, foundObjects) {
		foundObjects.forEach(doUpdate);
	});
};
