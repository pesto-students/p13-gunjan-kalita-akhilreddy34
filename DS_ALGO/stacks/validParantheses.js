var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      stack.push(s[i]);
    } else {
      if (stack.length) {
        if (s[i] == "}" && !(stack.pop() == "{")) return false;
        else if (s[i] == "]" && !(stack.pop() == "[")) return false;
        else if (s[i] == ")" && !(stack.pop() == "(")) return false;
      } else return false;
    }
  }

  if (stack.length) return false;

  return true;
};
