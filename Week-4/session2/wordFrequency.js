function calcWordFrequencies() {
  const userEnteredInput = prompt("enter a list of words separated by spaces.");
  if (userEnteredInput) {
    const wordFrequencyMap = {};

    /** adding words into map  */
    userEnteredInput
      ?.split(" ")
      ?.forEach((word) =>
        wordFrequencyMap[word]
          ? wordFrequencyMap[word]++
          : (wordFrequencyMap[word] = 1)
      );

    for (word in wordFrequencyMap) console.log(word, wordFrequencyMap[word]);
  }
}

calcWordFrequencies();
