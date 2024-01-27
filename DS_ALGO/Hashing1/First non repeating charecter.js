var firstUniqChar = function (str) {
  // TODO: Implement your code here
  const map = {};

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (map[char]) {
      map[char].freq = map[char].freq + 1;
      map[char].index = i;
    } else
      map[char] = {
        index: i,
        freq: 1,
      };
  }

  for (let key in map) {
    if (map[key].freq == 1) return map[key].index;
  }
  return -1;
};
