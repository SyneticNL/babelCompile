module.exports = (basepath, paths, extension, exclude) => {
  paths = paths instanceof Array ? paths : [paths];
  let fullPaths = [];
  (paths).forEach(function(src) {
    fullPaths.push(basepath + src + extension)
  });
  fullPaths.push(exclude);
  return fullPaths
};