var groupAnagrams = function (strs) {
  const map = {};
  const res = [];

  for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split("").sort().join("");

    if (map[sortedString]) {
      map[sortedString].push(strs[i]);
    } else map[sortedString] = [strs[i]];
  }

  return Object.values(map);
};
