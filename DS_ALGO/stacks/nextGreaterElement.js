const nextLargerElement = (arr, n) => {
  // code here
  let res = new Array(n);
  res[n - 1] = -1;
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1].value < arr[i]) {
      let poppedEle = stack.pop();
      res[poppedEle.index] = arr[i];
    }

    stack.push({ index: i, value: arr[i] });
  }

  for (let i = 0; i < stack.length; i++) {
    res[stack[i].index] = -1;
  }

  return res;
};
