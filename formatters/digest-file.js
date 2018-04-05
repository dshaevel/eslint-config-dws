var helpers = require('./helpers');

module.exports = function digestByFile(files) {
	return helpers.condense(files, true);
};
