var helpers = require('./helpers');

module.exports = function digest(files) {
	return helpers.condense(files);
};
