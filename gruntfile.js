module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // sass: {
        //   dist{
        //     files{
        //       'css/style.css': 'sass/style.scss'
        //
        //     }
        //   }
        // }
        concat: {

            js: {
                src: [
                     'bower_components/modernizer/modernizr.js',
                     'bower_components/jquery/dist/jquery.js',
                     'bower_components/jquery-ui/jquery-ui.js',
                     'bower_components/jquery-ui-1.11.4.custom/jquery-ui.js',
                     'bower_components/jquery-canvas-sparkles.js',
                     'app.js',                     
                     'services.js',
                     'routes.js',
                     'components/**/*.js',
                      'intro/*.js',
                      'world/*.js',
                      'social/*.js',
                      'contact/*.js',
                      'about/*.js',
                      'nav.js'

                ],
                dest: 'concat.js'
            }
        },
        // uglify: {
        //   options: {
        //     report: 'min',
        //     mangle: false,
        //     compress: true
        //   },
        //   js: {
        //         files: {
        //             'app.min.js': ['concat.js']
        //         }
        //     }
        // },
        watch: {
                js: {
                  files: [
                    'bower_components/jquery-canvas-sparkles.js',
                    'app.js',
                    'services.js',
                    'routes.js',
                    'components/**/*.js',
                     'intro/*.js',
                     'world/*.js',
                     'social/*.js',
                     'contact/*.js',
                     'about/*.js',
                     'nav.js'


                  ],
                  // tasks: ['concat', 'uglify']
                tasks: ['concat']
                }
        }
        // compress: {
        //     dist: {
        //       options: {
        //         archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
        //       },
        //       files: [{
        //         src: [ 'index.html' ],
        //         dest: '/'
        //       }, {
        //         src: [ 'js/**' ],
        //         dest: 'js/'
        //       }, {
        //         src: [ 'data/**' ],
        //         dest: 'data/'
        //       }, {
        //         src: [ 'app.min.js' ],
        //         dest: '/'
        //       }]
        //     }
        //   }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat:js']);

        // grunt.registerTask('default', ['concat:js', 'uglify:js']);
};
// , 'compress:js'
