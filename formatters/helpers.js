var util = require('util');

function condense(files, byFile) {
	var output = [];

	var count = {
		errorCount: 0,
		warningCount: 0,
		files: []
	};

	files.forEach(function addCount(file) {
		count.errorCount += file.errorCount;
		count.warningCount += file.warningCount;

		if (file.errorCount || file.warningCount) {
			var fileString = util.format(
				'%s - %d errors - %d warnings',
				file.filePath,
				file.errorCount,
				file.warningCount
			);

			count.files.push(fileString);
		}
	});

	if (byFile && count.files.length) {
		output = count.files;
		output.push('');
	}

	var summaryString = util.format(
			'%d/%d files - %d errors - %d warnings',
			count.files.length,
			files.length,
			count.errorCount,
			count.warningCount
		);

	output.push(summaryString);

	return output.join('\n');
}

module.exports = {
	condense: condense
};
