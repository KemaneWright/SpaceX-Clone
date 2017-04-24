const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
// const sass = require('gulp-sass');
const sourcemap = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');
// const annotate = require('gulp-ng-annotate');
const paths = {
  jsSource: ['./public/js/spaceXApp.js', './public/js/**/*.js'], //there is two files paths so that it will grab app.js first.
  cssSource: ['./public/styles/*.css'],
  server: './server/index.js'
};
// gulp.task('serve', () => {
//   nodemon({
//     'script': paths.server
//   })
// })
gulp.task('js-bundle', () => {
  gulp.src(paths.jsSource)
  .pipe(sourcemap.init())
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(sourcemap.write('./'))
  .pipe(gulp.dest('./public/gulped'))
});
gulp.task('css-bundle', () => {
  gulp.src(paths.cssSource)
  .pipe(sass())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./public/gulped'))
});
gulp.task('watch', () => {
  gulp.watch(paths.jsSource, ['js-bundle'])
  gulp.watch(paths.cssSource, ['css-bundle'])
});
gulp.task('default', ['watch', 'serve', 'js-bundle', 'css-bundle']);
