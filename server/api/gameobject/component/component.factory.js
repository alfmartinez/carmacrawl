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

module.exports.createGenerator = function(type, triggerEvent, template) {
	var properties = {
		type: type,
		trigger: triggerEvent,
		template: template
	};
	return {
		type: 'generator',
		properties: properties
	}
};

module.exports.createStatus = function(type, level) {
	return {
		type: 'status',
		properties: {
			type: type,
			maxLevel: level,
			level: level
		}
	};
};

module.exports.createDamage = function(damage, type) {
	return {
		type: 'damage',
		properties: {
			amount: damage,
			type: type
		}
	};
};

module.exports.createRenderer = function(type, options) {
	return {
		type: 'renderer',
		properties: {
			renderer: type,
			options: options
		}
	};
};

module.exports.createPlayerCharacter = function(user) {
	return {
		type: 'playerCharacter',
		properties: {
			user: user
		}
	};
};

module.exports.createInventory = function(item, rank) {
	return {
		type: 'inventory',
		properties: {
			item: item,
			rank: rank
		}
	};
};

module.exports.createEquipped = function(item, slot) {
	return {
		type: 'equipped',
		properties: {
			item: item,
			slot: slot
		}
	};
};

module.exports.createSlot = function(slot, type) {
	return {
		type: 'slot',
		properties: {
			name: slot,
			type: type
		}
	}
}
