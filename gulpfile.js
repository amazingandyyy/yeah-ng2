var gulp = require('gulp');

var appDev = 'client/app/';
var appProd = 'public/js/app/';
var vendor = 'public/js/vendor';

/* JS & TS */
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
var rimraf = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var tsProject = typescript.createProject('tsconfig.json');

// gulp.task('default', ['watch', 'build-ts', 'build-copy']);
gulp.task('default', ['build', 'serve', 'watch']);
gulp.task('build', ['js', 'css', 'html', 'assets']);
gulp.task('serve', function () {
    nodemon({
        script: './app.js',
        ext: 'js css ejs html',
        ignore: ['public/*', 'client/*', 'node_modules/*']
    });
});

gulp.task('js', function () {
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});
gulp.task('clean:js', function () {
    return gulp.src('public/js/app', {
        read: false
    })
        .pipe(rimraf());
});

gulp.task('css', ['clean:css', 'app:css'], function () {
    return gulp.src(['client/scss/**/*.scss', 'client/scss/**/*.sass'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'));
});
gulp.task('clean:css', function () {
    return gulp.src('public/css', {
        read: false
    })
        .pipe(rimraf());
});
gulp.task('app:css', ['app:clean:css'],function () {
    return gulp.src(appDev + '**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(appProd));
});
gulp.task('app:clean:css', function () {
    return gulp.src(appProd + '**/*.css', {
        read: false
    })
        .pipe(rimraf());
});
gulp.task('html', function () {
    return gulp.src(appDev + '**/*.html')
        .pipe(gulp.dest(appProd));
});

// gulp.task('build-copy', function () {
//     return gulp.src([appDev + '**/*.html', appDev + '**/*.htm', appDev + '**/*.css'])
//         .pipe(gulp.dest(appProd));
// });

gulp.task('watch', function () {
    gulp.watch(appDev + '**/*.ts', ['js']);
    gulp.watch('client/scss/**/*.scss', ['css']);
    gulp.watch(appDev + '**/*.{html,htm}', ['html']);
    gulp.watch(appDev + '**/*.scss', ['app:css']);
    gulp.watch('gulpfile.js', ['build']);
    // gulp.watch('public/assets/**', ['assets']);
});

gulp.task('assets', ['clean:assets'], function () {
    return gulp.src('client/assets/**')
        .pipe(gulp.dest('public/assets'));
});

gulp.task('clean:assets', function () {
    return gulp.src('public/assets', {
        read: false
    })
        .pipe(rimraf());
});

gulp.task('vendor', function () {

    // Angular 2 Framework
    gulp.src('node_modules/@angular/**')
        .pipe(gulp.dest(vendor + '/@angular'));

    //ES6 Shim
    gulp.src('node_modules/es6-shim/**')
        .pipe(gulp.dest(vendor + '/es6-shim/'));

    //reflect metadata
    gulp.src('node_modules/reflect-metadata/**')
        .pipe(gulp.dest(vendor + '/reflect-metadata/'));

    //rxjs
    gulp.src('node_modules/rxjs/**')
        .pipe(gulp.dest(vendor + '/rxjs/'));

    //systemjs
    gulp.src('node_modules/systemjs/**')
        .pipe(gulp.dest(vendor + '/systemjs/'));

    //zonejs
    return gulp.src('node_modules/zone.js/**')
        .pipe(gulp.dest(vendor + '/zone.js/'));
});
