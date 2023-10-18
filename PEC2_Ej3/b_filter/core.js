function onlyEven(array) {
  // your code here
  return array.filter((num) => num % 2 === 0);
}

function onlyOneWord(array) {
  // your code here
  return array.filter((e) => e.indexOf(" ") === -1);
}

function positiveRowsOnly(array) {
  // your code here
  return array.filter(e => e.every(n => n > 0));
}

function allSameVowels(array) {
  // your code here
  return array.filter(e => {
    let sameVowel=true;
    const vowels = e.match(/[aeiou]/gi);
    
    for (let vocal of vowels){
       if (vowels[0]!=vocal){
          sameVowel=false;
       }
    }
    return sameVowel;
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
