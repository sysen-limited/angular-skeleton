// Dependencies
var express = require('express'),
    http = require('http'),
    path = require('path'),
    logger = require('morgan'),
    errorHandler = require('errorhandler');

// Set up the application
var app = express();

// Environment Checks
app.set('port', process.env.PORT || 1337);

// Manage Views
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Express Configuration
app.use(logger());
app.use('/assets', express.static(path.join(__dirname, './dist/assets')));
app.use('/templates', express.static(path.join(__dirname, './dist/templates')));

// Development (set NODE_ENV environment variable to trigger this)
if ('development' == app.get('env')) {
    //app.use(logger());
    app.use(errorHandler());

    app.use('/api', express.static(path.join(__dirname, './test/data')));

    app.use(require('connect-livereload')({
        port: 35729
    }));
}

app.get('/', function(req, res) {
    res.render('index');
});

// Start up the server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
