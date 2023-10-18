function sum(array) {
  // your code here
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function productAll(array) {
  // your code here
  return array.reduce((accumulator, currentArray) => {
    const product = currentArray.reduce((subArrProd, num) => subArrProd * num, 1);
      return accumulator * product;
  }, 1);
}

function objectify(array) {
  // your code here
  return array.reduce(function(accumulator, currentArray) {
    accumulator[currentArray[0]] = currentArray[1];
    return accumulator;
  }, {});
}

function luckyNumbers(array) {
  // your code here
  return array.reduce((accumulator, currentNumber, index, array) => {
    if(index === 0){
      return `Your lucky numbers are: ${currentNumber}`;
    }else if(index === array.length - 1){
      return `${accumulator}, and ${currentNumber}`;
    }else{
      return `${accumulator}, ${currentNumber}`;
    }
  }, '');
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
