/** counter function */
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

/** creating two instances for counter function  */
const firstCounter = counter();
const secondCounter = counter();

/** variables required */
const numberOfTimesToCallTheFirstCounter = 5;
const numberOfTimesToCallTheSecondCounter = 3;
const firstCounterOutput = [];
const secondCounterOutput = [];

/** running the firstInstance  for required times (numberOfTimesToCallTheFirstCounter) */
for (let i = 0; i < numberOfTimesToCallTheFirstCounter; i++)
  firstCounterOutput.push(firstCounter());

/** running the secondInstance  for required times (numberOfTimesToCallTheSecondCounter) */
for (let i = 0; i < numberOfTimesToCallTheSecondCounter; i++)
  secondCounterOutput.push(secondCounter());

console.log(firstCounterOutput);
console.log(secondCounterOutput);
