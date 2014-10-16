module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            modules: ''
        },
        jshint: {
            files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.spec.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        concat: {
            app: {
                options: {
                    banner: '<%= meta.modules %>\n'
                },
                src: ['src/app.js', 'src/**/*.app.js', 'src/directives/**/*.js', 'src/services/**/*.js', 'src/packages/**/*.ctrl.js'],
                dest: 'dist/assets/js/app.js'
            },
            angular: {
                src: [
                    'bower_modules/angular/angular.js',
                    'bower_modules/angular-route/angular-route.js',
                    'bower_modules/angular-resource/angular-resource.js',
                    'bower_modules/angular-sanitize/angular-sanitize.js',
                    'bower_modules/angular-touch/angular-touch.js',
                    'bower_modules/angular-bootstrap/ui-bootstrap-tpls.js'
                ],
                dest: 'dist/assets/js/angular.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/assets/js/app.js': '<%= concat.app.src %>',
                    'dist/assets/js/angular.js': '<%= concat.angular.src %>'
                }
            }
        },
        less: {
            dev: {
                files: {
                    'dist/assets/css/main.css': 'design/less/main.less',
                    'dist/assets/css/bootstrap.css': 'bower_modules/bootstrap/less/bootstrap.less',
                    'dist/assets/css/font-awesome.css': 'bower_modules/font-awesome/less/font-awesome.less'
                }
            },
            prod: {
                options: {
                    cleancss: true,
                    report: 'min'
                },
                files: {
                    'dist/assets/css/main.css': 'design/less/main.less',
                    'dist/assets/css/bootstrap.css': 'bower_modules/bootstrap/less/bootstrap.less',
                    'dist/assets/css/font-awesome.css': 'bower_modules/font-awesome/less/font-awesome.less'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        filter: 'isFile',
                        src: [ 'bower_modules/font-awesome/fonts/**' ],
                        dest: 'dist/assets/fonts'
                    },
                    {
                        expand: true,
                        flatten: true,
                        filter: 'isFile',
                        src: [ 'bower_modules/marked/lib/**' ],
                        dest: 'dist/assets/js'
                    }
                ]
            },
            templates: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        filter: 'isFile',
                        src: [ 'src/**/*.html' ],
                        dest: 'dist/templates'
                    },
                    {   // Overrides default src HTML with custom files
                        expand: true,
                        flatten: true,
                        filter: 'isFile',
                        src: [ 'design/html/**/*.html' ],
                        dest: 'dist/templates'
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        filter: 'isFile',
                        src: [ 'design/images/**/*' ],
                        dest: 'dist/assets/img'
                    }
                ]
            }
        },
        express: {
            options: {
                port: 1337
            },
            dev: {
                options: {
                    script: './server.js'
                }
            },
            prod: {
                options: {
                    script: './server.js',
                    node_env: 'production'
                }
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            continuous: {
                singleRun: true
            }
        },
        watch: {
            configFiles: {
                files: [ 'gruntfile.js', 'server.js' ],
                tasks:  [ 'express:dev' ],
                options: {
                    livereload: true,
                    reload: true
                }
            },
            tests: {
                files: [ 'test/**/*.spec.js' ],
                tasks: [ 'jshint', 'karma:continuous' ]
            },
            script: {
                files: [ 'src/**/*.js' ],
                tasks: [ 'jshint', 'karma:continuous', 'concat:app' ],
                options: {
                    livereload: true
                }
            },
            templates: {
                files: [ 'src/**/*.html', 'design/html/**/*' ],
                tasks: [ 'copy:templates' ],
                options: {
                    livereload: true
                }
            },
            css: {
                files: 'design/less/**/*.less',
                tasks: [ 'less:dev' ],
                options: {
                    livereload: true
                }
            },
            images: {
                files: [ 'design/images/**/*' ],
                tasks: [ 'copy:images' ],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('build', 'Create asset files', function () {
        grunt.task.run('concat');
        grunt.task.run('uglify');
        grunt.task.run('less:prod');
        grunt.task.run('copy');
    });

    grunt.registerTask('test', 'Run Tests', function () {
        grunt.task.run('karma:continuous');
    });

    grunt.registerTask('default', ['jshint', 'concat', 'less:dev', 'copy', 'test', 'express:dev', 'watch']);
};
