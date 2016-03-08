module.exports = function sym() {
  var arrays = Array.prototype.slice.call(arguments);
  var result = [];

  result = arrays.reduce(function(a, b) {
    var temp = [];
    var aIndex = 0;
    var bIndex = 0;
    var i = 0;

    for (i = 0; i < b.length; i++) {
      aIndex = a.indexOf(b[i]);
      bIndex = temp.indexOf(b[i]);

      if (aIndex === -1 && bIndex === -1) {
        temp.push(b[i]);
      }

      else if (aIndex >= 0) {
        a.splice(aIndex, 1);
      }
    }

    // console.log(temp, a);

    return a.concat(temp);
  }, []);

  return result.sort(function(a, b) { return a > b; });
};
