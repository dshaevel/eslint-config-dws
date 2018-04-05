module.exports = function gruntConfig(grunt) {
	grunt.initConfig({
		eslint: {
			options: {
				format: './formatters/digest-file'
			},
			target: ['.']
		}
	});

	grunt.loadNpmTasks('grunt-eslint');

	grunt.registerTask('default', ['eslint']);
};
