const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
function build(cb) {
 gulp.src('src/*')
		.pipe(imagemin({"verbose":true}))
		.pipe(gulp.dest('dist/'))
  cb();
}
exports.default = build
exports.build = build