var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var cssWrap = require('gulp-css-wrap')
gulp.task('css-wrap', function () {
	return gulp.src(path.resolve('./theme/yellow.css'))/* 找需要添加命名空间的css文件，支持正则表达式 */
		.pipe(cssWrap({
			selector: '.custom-yellow' /* 添加的命名空间 */
		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('assets/theme/1b1e24')) /* 存放的目录 */
})