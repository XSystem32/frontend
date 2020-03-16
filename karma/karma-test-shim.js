// /*global jasmine, __karma__, window*/
Error.stackTraceLimit = 0; // "No stacktrace"" is usually best for app testing.

// Uncomment to get full stacktrace output. Sometimes helpful, usually not.
// Error.stackTraceLimit = Infinity; //

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// builtPaths: root paths for output ("built") files
// get from karma.config.js, then prefix with '/base/' (default is 'app/')
var builtPaths = (__karma__.config.builtPaths || ['app/'])
                 .map(function(p) { return '/base/'+p;});

__karma__.loaded = function () { };

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return /\.spec\.(.*\.)?js$/.test(path);
}

// Is a "built" file if is JavaScript file in one of the "built" folders
function isBuiltFile(path) {
  var isOk =  isJsFile(path) &&
         builtPaths.reduce(function(keep, bp) {
           return keep || (path.substr(0, bp.length) === bp);
         }, false);
  return isOk;
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

System.config({
  baseURL: 'base',

  paths: {
      // paths serve as alias
      'npm_test:': '/base/node_modules/'
  },

  // Extend usual application package list with test folder
  packages: { 'testing': { main: 'index.js', defaultExtension: 'js' } },

  // Assume npm: is set in `paths` in systemjs.config
  // Map the angular testing umd bundles
  map: {
    '@angular/core/testing': 'npm_test:@angular/core/bundles/core-testing.umd.min.js',
    '@angular/common/testing': 'npm_test:@angular/common/bundles/common-testing.umd.min.js',
    '@angular/compiler/testing': 'npm_test:@angular/compiler/bundles/compiler-testing.umd.min.js',
    '@angular/platform-browser/testing': 'npm_test:@angular/platform-browser/bundles/platform-browser-testing.umd.min.js',
    '@angular/platform-browser-dynamic/testing': 'npm_test:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.min.js',
    '@angular/http/testing': 'npm_test:@angular/http/bundles/http-testing.umd.min.js',
    '@angular/router/testing': 'npm_test:@angular/router/bundles/router-testing.umd.min.js',
    '@angular/forms/testing': 'npm_test:@angular/forms/bundles/forms-testing.umd.min.js',
  },
});

System.import('karma/systemjs.config.js')
  .then(importSystemJsExtras)
  .then(initTestBed)
  .then(initTesting);

/** Optional SystemJS configuration extras. Keep going w/o it */
function importSystemJsExtras(){
  return System.import('karma/systemjs.config.extras.js')
  .catch(function(reason) {
    console.log(
      'Warning: System.import could not load the optional "systemjs.config.extras.js". Did you omit it by accident? Continuing without it.'
    );
    console.log(reason);
  });
}

function initTestBed(){
  return Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
  ])

  .then(function (providers) {
    var coreTesting    = providers[0];
    var browserTesting = providers[1];

    coreTesting.TestBed.initTestEnvironment(
      browserTesting.BrowserDynamicTestingModule,
      browserTesting.platformBrowserDynamicTesting());
  })
}

// Import all spec files and start karma
function initTesting () {
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      return System.import(moduleName);
    })
  )
  .then(__karma__.start, __karma__.error);
}
