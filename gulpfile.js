const gulp = require('gulp');
const babel = require('gulp-babel');
const mocha = require('gulp-mocha');

gulp.task('test', function() {
    return gulp.src('./test/**/*.js').pipe(mocha({require:'test/setup.js', compilers: ['js:babel-register']}));
})

gulp.task('js', function() {
    return gulp.src("src/index.js")
	.pipe(babel())
	.pipe(gulp.dest('build'));
})

gulp.task('default',['test','js'], function() {
    

    const w = gulp.watch(['src/**/*.js','test/**/*.js'], ['js','cp']);
    w.on('error', function(err) {
	console.log(err);
    })

})


