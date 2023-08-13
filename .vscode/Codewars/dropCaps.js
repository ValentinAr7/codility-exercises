function dropCap(n) {
  let array = n.split(" ");
  console.log(array);

  let arrayOfLongWords = [];

  for (let i = 0; i < array.length; i++) {
    let currentWord = array[i];

    if (currentWord.length > 2) {
      arrayOfLongWords.push(
        currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase()
      );
    } else {
      arrayOfLongWords.push(currentWord);
    }
  }

  return arrayOfLongWords.join(' ')

}

dropCap(
  "Revelation of the contents outraged American public opinion, and helped generate"
);
