function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join('')).join(' ');
}

function titleCase(sentence) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i]  = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
}
module.exports = { reverseSentence, titleCase };
