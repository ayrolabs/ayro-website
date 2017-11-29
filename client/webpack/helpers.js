const path = require('path');

const rootPath = path.resolve(__dirname, '../../');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [rootPath].concat(args));
}

exports.root = root;
