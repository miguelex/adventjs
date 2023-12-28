function getIndexsForPalindrome(word) {
  let count = 0;
  let arrayWord = word.split("");
  let index = 1;
  let result = [];
  let badLetter = "";
  let badPosition = -1;
  for (let i = 0; i < arrayWord.length / 2; i++) {
    if (arrayWord[i] === arrayWord[arrayWord.length - i - 1]) {
      index = 1;
      count++;
    } else {
      if (badLetter === "") {
        badLetter = arrayWord[i];
        badPosition = arrayWord.length - i - 1;
      }
      if (arrayWord[i] !== badLetter) {
        if (
          word[i] === word[Math.floor(word.length / 2)] &&
          word.length % 2 === 1
        )
          return [Math.floor(word.length / 2), badPosition];
        else return null;
      } else {
        const temp = arrayWord[i];
        arrayWord[i] = arrayWord[i + index];
        arrayWord[i + index] = temp;
        result = [i, i + index];
        i--;
        index++;
      }
    }
  }
  return result;
}
