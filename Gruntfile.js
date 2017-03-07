module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        sass: {
            dist: {
              files: {
                'app/styles/main.css': 'app/styles/sass/main.scss'
              }
            }
        },
        watch: {
            css: {
                files: 'app/styles/sass/*.scss',
                tasks: ['sass']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.registerTask('default', ['watch', 'uglify']);

};