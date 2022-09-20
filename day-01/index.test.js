const { reverseSentence, titleCase, oddishOrEvenish, at } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  it('should capitalize the first letter of each word in a string', () => {
    expect(titleCase('alchemy rocks gold')).toBe('Alchemy Rocks Gold');
  });
  it('should determine whether a number is Evenish or Oddish', () => {
    expect(oddishOrEvenish(121)).toBe('Evenish');
    expect(oddishOrEvenish(41)).toBe('Oddish');
    expect(oddishOrEvenish('lol lol')).toBe('Invalid Entry');
  });

  it('should return the corresponding item at the given index', () => {
    const array1 = at(['a', 'b', 'c', 'd', 'e'], 1);
    const array2 = at(['a', 'b', 'c', 'd', 'e'], -2);
    const array3 = at(['lala', 'lili', 'lolol'], 'lele');
    expect(array1).toBe('b');
    expect(array2).toBe('d');
    expect(array3).toBe('Invalid Entry');
  });
});
