import wordAssumptionGenerator from "./wordAssumptionGenerator.js";

const wordMatcher = (word, wordList) => {
  const wordCombination = wordAssumptionGenerator(word);

  for (const word of wordCombination) {
    if (wordList.includes(word)) {
      return word;
    }
  }
};

export default wordMatcher;
