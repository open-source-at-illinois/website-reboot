// !!! NOTICE: If you change this file, you must restart the server on !!!
// !!!         cPanel in order for changes to take affect.             !!!

const nodemon = require('nodemon')
const check_version = require('check-node-version')
check_version(
  { node: "10.22" },
  (err, result) => {
    if (err) {
      console.log("An error was encountered while checking the node version:")
      console.log(err)
      return
    }
    if (!result.isSatisfied) {
      console.log('*****************WARNING*****************')
      console.log('You have a different node version from what is on cPanel!')
      console.log('(Expected: 10.22.0, got ' + result.versions['node'].version + ')')
      console.log('Consider using a tool like nvm to test with the proper version.')
      console.log('*****************************************')
    }
  }
)
// Use nodemon to automatically update.
// https://github.com/remy/nodemon/commit/f6eff97b87fa83380bde8bd6c6f3576f206c31d7 

nodemon({
    script: __dirname + '/../app.js',
    /*ext: 'js json'*/
})

nodemon.on('start', function () {
  console.log('Starting app at ' + (new Date()).toLocaleString());
}).on('quit', function () {
  console.log('Exiting app at ' + (new Date()).toLocaleString());
  process.exit();
}).on('restart', function (files) {
  console.log('Updating app at ' + (new Date()).toLocaleString());
  console.log('Updated files: ', files);
});