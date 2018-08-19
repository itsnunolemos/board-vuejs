var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');


// Development Tasks 
// -----------------

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

gulp.task('sass', function() {
  return gulp.src('resources/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css')) 
    .pipe(browserSync.reload({ 
      stream: true
    }));
});

gulp.task('js', function() {
  return gulp.src('resources/js/*.js')
    .pipe(gulp.dest('app/js')) 
    .pipe(browserSync.reload({ 
      stream: true
    }));
});

// Watchers
gulp.task('watch', ['browserSync', 'sass', 'js'], function (){
  gulp.watch('resources/scss/**/*.scss', ['sass']); 
  gulp.watch('resources/*.html', browserSync.reload); 
  gulp.watch('resources/js/*.js', ['js']); 
});


// Default
// ---------------
gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})
