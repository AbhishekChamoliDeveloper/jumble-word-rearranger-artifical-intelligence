import factorial from "./factorial.js";
import uniqueRandomNumberGenerator from "./uniqueNumberGenerator.js";

const wordAssumptionGenerator = (word) => {
  let wordFactorial = factorial(word.length);
  let regeneratedWords = new Set();

  let wordArray = word.split("");

  while (regeneratedWords.size != wordFactorial) {
    let combination = [];

    let randomNumberArray = uniqueRandomNumberGenerator(word);

    for (const number of randomNumberArray) {
      combination.push(wordArray[number]);
    }

    regeneratedWords.add(combination.join(""));
  }

  return new Set(regeneratedWords);
};

export default wordAssumptionGenerator;
