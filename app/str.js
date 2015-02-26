var Str = function(string, separator) {
  this.string = string;
  this.separator = separator;
};

Str.prototype.append = function(string) {
  if (string) {
    if (this.string !== "" && this.separator) {
      this.string += this.separator;
    }

    this.string += string;
  }
};

Str.prototype.toString = function() {
  return this.string;
};
