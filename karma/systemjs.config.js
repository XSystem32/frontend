/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'src/main/webapp/node_modules/'
    },
    // map tells the System loader where to look for things
    map: {

      // our app is within the app folder
      app: 'src/main/webapp/generated_js/app',

      'xfe-ng2common': 'npm:xfe-ng2common/bundles/xfe-ng2common.min.js',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',

      // angular animation bundles
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.min.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.min.js',

      // angular mock provider
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

      // other libraries
      //'rxjs': 'npm:rxjs',
      'lodash': 'npm:lodash/lodash.min.js',
      '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.min.js',
      '@ng-idle/core':      'npm:@ng-idle/core/bundles/core.umd.min.js',
      '@ng-idle/keepalive': 'npm:@ng-idle/keepalive/bundles/keepalive.umd.min.js',
      'moment': 'npm:moment/min/moment.min.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        //main: './main.js',
        defaultExtension: 'js'
      },
      err: {
        //main: './error.js',
        defaultExtension: 'js'
      }
      //rxjs: {
      //  defaultExtension: 'js'
      //},
      //lodash: {
      //    main: 'index.js',
      //    defaultExtension: 'js'
      //}
    },
    bundles: {
        "npm:rxjs/bundles/Rx.min.js": [
            "rxjs/*",
            "rxjs/operator/*",
            "rxjs/observable/*",
            "rxjs/add/operator/*",
            "rxjs/add/observable/*",
            "rxjs/symbol/*",
            "rxjs/util/*"
        ], 
        "npm:ng2-device-detector/bundles/ng2-device-detector.min.js": [
            "ng2-device-detector/*",
            "ng2-device-detector/dist/*",
            "ng2-device-detector/dist/services/*",
            "ng2-device-detector/dist/services/ng2-device.service/*",
            "ng2-device-detector/dist/constants/*"
        ],
        "npm:angular2-moment/bundles/angular2-moment.min.js": [
            "angular2-moment/*"
        ],
        "npm:xfe-ng2common/bundles/xfe-ng2common.min.js": [
            "xfe-ng2common/*"
        ]        
    }
  });
})(this);
