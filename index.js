var generateCode = require("./lib/generateCode");
var path = require("path");

module.exports = function(source) {
  if (this.cacheable) {
    this.cacheable();
  }
  var options = this.exec(source, this.resource);
  this.addContextDependency(path.resolve(this.context, options.path));
  return generateCode(options, this.context);
};
