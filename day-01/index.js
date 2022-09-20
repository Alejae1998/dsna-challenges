function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
}

function oddishOrEvenish(number) {
  const sum = String(number)
    .split('')
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);

  if (sum % 2 == 0) {
    return 'Evenish';
  } else if (sum % 2 == 1) {
    return 'Oddish';
  } else {
    return 'Invalid Entry';
  }
}
function at(arr, index) {
  if (index >= 0) {
    return arr[index];
  } else if (index < 0) {
    return arr[arr.length + index];
  } else {
    return 'Invalid Entry';
  }
}
function anagrams(wordOne, wordTwo) {
  const lengthOne = wordOne.length;
  const lengthTwo = wordTwo.length;
  if (lengthOne !== lengthTwo) {
    return 'Invalid Entry';
  }
  const arrayOne = wordOne.split('').sort().join('');
  const arrayTwo = wordTwo.split('').sort().join('');

  if (arrayOne === arrayTwo) {
    return true;
  } else {
    return false;
  }
}
module.exports = { reverseSentence, titleCase, oddishOrEvenish, at, anagrams };
