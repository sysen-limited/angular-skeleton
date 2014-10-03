# ANGULAR JS - SKELETON PROJECT

Includes the following:

- Angular JS
- Bootstrap
- Angular UI (Angular Bootstrap)
- Node Server (for development)
- Live-reload (for development) auto-refresh your page on changes
- and much much more, try it out.

Note:

The project is laid out on a per package basis which is great for making a marketing website, however for a more robust application consider laying out your code in an MVC format (folders for model / service, view templates and controllers).

## Running (for development purposes)

Source files are found in the src folder, there is a dist folder which is automatically updated when files in src change, be careful not to change the dist files or your changes will be lost.

### Requirements (install these)

- NodeJS
- Bower (installed via npm 'bower')
- Grunt CLI (installed via npm 'grunt-cli')

### Building

- Execute NPM Install `npm install` this will download deployment and testing dependencies, note it will call `bower install` and `grunt build` to do an initial project build

### Running the development server

- `grunt` (this will re-compile the code and start the server while running watches for changes)
- Browse to: http://localhost:1337/ to confirm it is running

Note: Check out the grunt file for other grunt commands you may wish to run (e.g. `grunt test` to run your tests on demand)

## Deploying to S3 (or your own Apache server)

Copy all files in the DIST folder (after being built with grunt build)

Note: Deploying to Heroku coming soon, for now it will run in effect the development server if you deploy to Heroku, which depending on your needs maybe fine.
