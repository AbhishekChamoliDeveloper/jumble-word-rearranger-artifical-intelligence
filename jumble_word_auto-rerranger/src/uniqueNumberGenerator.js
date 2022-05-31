const uniqueRandomNumberGenerator = (word) => {
  let genertedNumber = [];

  while (genertedNumber.length != word.length) {
    let randomNumber = Math.trunc(Math.random() * word.length);
    if (!genertedNumber.includes(randomNumber)) {
      genertedNumber.push(randomNumber);
    }
  }

  return genertedNumber;
};

export default uniqueRandomNumberGenerator;
