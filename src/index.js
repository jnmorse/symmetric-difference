module.exports = function sym(...arrays) {
  // const arrays = Array.prototype.slice.call(arguments);
  let result = [];

  result = arrays.reduce((previous, current) => {
    const temp = previous.concat(current).filter((value, index, arr) => {
      return arr.indexOf(value) === index;
    });

    return temp.filter(value => {
      return previous.indexOf(value) === -1 || current.indexOf(value) === -1;
    });
  }, []);

  return result.sort((a, b) => {
    return a > b;
  });
};
