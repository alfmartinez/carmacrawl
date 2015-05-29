'use strict';

function doPositionUpdate(object) {
		console.log('Updating ' + object.name + ' position ');
}

function doUpdate(object) {
	doPositionUpdate(object);
}

module.exports = function(objects) {
	objects.find({
		'components.transform': {
			$exists: true
		},
		'components.velocity': {
			$exists: true
		}
	}, function(err, foundObjects) {				
		foundObjects.forEach(doUpdate);
	});
};
