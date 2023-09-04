function divideArray(nums) {
  const even = [];
  const odd = [];

  nums?.forEach((number) => {
    if (number % 2 == 0) even.push(number);
    else odd.push(number);
  });

  even.sort((a, b) => a - b);
  odd.sort((a, b) => a - b);

  console.log(`Even numbers:${even?.length ? even?.length : "None"}`);
  even?.forEach((evenNumber) => console.log(evenNumber));

  console.log(`Odd numbers:${odd?.length ? odd?.length : "None"}`);
  odd?.forEach((oddNumber) => console.log(oddNumber));
}

divideArray([4, 2, 8]);
