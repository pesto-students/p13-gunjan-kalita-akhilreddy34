function* generator(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    yield Symbol(inputArray[i]);
  }
}

const generatorIterator = generator(["hello", "world", "test"]);

for (value of generatorIterator) {
  console.log(value);
}
