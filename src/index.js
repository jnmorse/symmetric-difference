module.exports = function sym() {
  var arrays = Array.prototype.slice.call(arguments);
  var result = [];

  result = arrays.reduce(function(previous, current) {
    var temp = previous.concat(current).filter(function(value, index, arr) {
      return arr.indexOf(value) === index;
    });

    return temp.filter(function(value) {
      return previous.indexOf(value) === -1 || current.indexOf(value) === -1;
    });
  }, []);

  return result.sort(function(a, b) { return a > b; });
};
