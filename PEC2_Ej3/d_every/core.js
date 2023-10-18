// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every(num => num % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((e, index, array) => typeof e === typeof array[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every(r => r.every(n => n > 0));
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  const vowels = "aeiouAEIOU";

  return input.every(word => {
    const chars = word.split('');
    const vowelsInWord = chars.filter(char => vowels.includes(char));
    return new Set(vowelsInWord).size === 1;
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
