const gulp = require("gulp");
const newer = require("gulp-newer");
const notify = require("gulp-notify");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglifycss = require("gulp-uglifycss");
const path = require("path");

// Where our files are located
const src = path.join(__dirname, "src/");
const dist = path.join(__dirname, "dist/");
const sassFiles = [path.join(__dirname, "src/sass/app.scss")];

var interceptErrors = function() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify
    .onError({ title: "Compile Error", message: "<%= error.message %>" })
    .apply(this, args);

  // Keep gulp from hanging on this task
  this.emit("end");
};

gulp.task("sass", function() {
  return gulp
    .src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", interceptErrors)
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(dist));
});


// manage favicon
// gulp.task('favicon', function () {
//   return gulp
//     .src(src + 'favicon.ico')
//     .on('error', interceptErrors)
//     .pipe(newer(dest+ 'favicon.ico'))
//     .pipe(gulp.dest(dest));
// });

gulp.task("default", ["sass"], function() {
  return gulp
    .src("dist/*.css")
    .pipe(uglifycss({ maxLineLen: 500, uglyComments: true }))
    .pipe(gulp.dest(dist));
});
