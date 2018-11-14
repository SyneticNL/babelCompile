const
  gulp = require('gulp'),
  babel = require("gulp-babel"),
  path = require('path'),
  rename = require('gulp-rename'),
  getPath = require('./scripts/getPath');

module.exports = (config) => {
  const basepath = path.join(process.cwd(), config.basepath);
  config.source = config.source instanceof Array ? config.source : [config.source];
  return config.source.forEach((item) => {
    return gulp.src(getPath(basepath, item, '**/*.es6.js', '!' + basepath + config.exclude + '/**/*'))
      .pipe(babel({
        presets: [
          [process.cwd() + '/node_modules/babel-preset-env', {
            modules: false,
            targets: {
              browsers: config.browsersupport
            }
          }]]
      }))
      .pipe(rename(function (opt) {
        opt.basename = opt.basename.replace(/\.es6/, '');
        return opt;
      }))
      .pipe(gulp.dest(`${basepath}/${item}/`));
  });
};