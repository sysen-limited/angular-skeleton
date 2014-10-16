module.exports = function (config) {
    config.set({

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage-0.11',
            'karma-spec-reporter'
        ],

        basePath: '.',

        frameworks: [
            'jasmine'
        ],

        files: [
            'bower_modules/angular/angular.js',
            'bower_modules/**/angular-*.js',
            'bower_modules/angular-bootstrap/ui-bootstrap.js',
            'bower_modules/marked/marked.js',
            'src/**/*.js',
            'test/**/*.spec.js'
        ],

        //logLevel: LOG_DEBUG,

        autoWatch: true,

        browsers: [
            'PhantomJS'
        ],

        preprocessors: {
            'src/**/*.js': 'coverage'
        },

        reporters: [
            "spec",
            "coverage"
        ],

        coverageReporter: {
            type: 'lcov',
            dir: 'logs/karma/'
        }
    })
};
