var evalRPN = function (tokens) {
  let stack = [];
  let res = null;
  if (tokens.length == 1) return tokens[0];

  let ele1;
  let ele2;

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] == "+") {
      ele1 = stack.pop();
      ele2 = stack.pop();
      res = ele1 + ele2;
      stack.push(res);
    } else if (tokens[i] == "-") {
      ele1 = stack.pop();
      ele2 = stack.pop();
      res = ele2 - ele1;
      stack.push(res);
    } else if (tokens[i] == "*") {
      ele1 = stack.pop();
      ele2 = stack.pop();
      res = ele1 * ele2;
      stack.push(res);
    } else if (tokens[i] == "/") {
      ele1 = stack.pop();
      ele2 = stack.pop();
      res = parseInt(ele2 / ele1);
      stack.push(res);
    } else {
      stack.push(+tokens[i]);
    }
    console.log(stack);
  }
  return res;
};
