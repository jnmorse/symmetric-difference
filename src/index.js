module.exports = function sym() {
  var arrays = Array.prototype.slice.call(arguments);
  var result = [];

  result = arrays.reduce(function(a, b) {
    var temp = a.concat(b).filter(function(value, index, arr) {
      return arr.indexOf(value) === index;
    });

    return temp.filter(function(value) {
      if (a.indexOf(value) === -1 || b.indexOf(value) === -1) {
        return true;
      }

      else {
        return false;
      }
    });
  }, []);

  return result.sort(function(a, b) { return a > b; });
};
