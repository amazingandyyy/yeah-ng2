(function(global) {

// map tells the System loader where to look for things
var map = {
    'app': 'js/app',
    'rxjs': 'js/vendor/rxjs',
    '@angular': 'js/vendor/@angular',
    'angular2-jwt': 'js/vendor/angular2-jwt/angular2-jwt.js',
    'moment': 'js/vendor/moment/moment.js',
    'lodash': 'js/vendor/lodash'
};

// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    'rxjs': { defaultExtension: 'js'},
    "angular2-jwt": { defaultExtension: 'js' },
    'moment': { defaultExtension: 'js' },
    'lodash': { main:'index.js', defaultExtension: 'js' },
    'app': { main: 'main.js', defaultExtension: 'js'}
};

var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/upgrade'
];

// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
packageNames.forEach(function (pkgName) {
    // packages[pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
});

var config = {
    map: map,
    packages: packages
};
// filterSystemConfig - index.html's chance to modify config before we register it.
if (global.filterSystemConfig) { global.filterSystemConfig(config); }

System.config(config);})(this);