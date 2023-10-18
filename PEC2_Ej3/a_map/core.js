function multiplyBy10(array) {
  // your code here
  return array.map((x) => x * 10);
}

function shiftRight(array) {
  // your code here
  return array.map((x, y, z) => z[(y + z.length - 1) % z.length]);
}

function onlyVowels(array) {
  // your code here
  return array.map(x=>x.replace(/[bcdfghjklmnpqrstvwxyz]/g, ''));
}

function doubleMatrix(array) {
  // your code here
  return array.map(function(array2) {
    return array2.map(function(number) {
      return number * 2;
    })
  })
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
