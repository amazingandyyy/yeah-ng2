(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'js/app',
        'rxjs': '../node_modules/rxjs',
        '@angular': '../node_modules/@angular',
        'angular2-jwt': '../node_modules/angular2-jwt/angular2-jwt.js',
        'moment': '../node_modules/moment/moment.js',
        'lodash': '../node_modules/lodash'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js'},
        'rxjs': { defaultExtension: 'js'},
        "angular2-jwt": { defaultExtension: 'js' },
        'moment': { defaultExtension: 'js' },
        'lodash': { main:'index.js', defaultExtension: 'js' }
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

    System.config(config);
})(this);