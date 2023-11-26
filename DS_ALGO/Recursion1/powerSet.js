var subsets = function (nums) {
  const powerSets = hepler(0, nums);
  powerSets.push([]);
  return powerSets;
};

const hepler = (index, nums) => {
  if (index == nums.length - 1) return [[nums[index]]];

  const temp = [[nums[index]]];
  const powerSets = hepler(index + 1, nums);
  for (let i = 0; i < powerSets.length; i++) {
    temp.push([...powerSets[i], nums[index]]);
  }

  return [...temp, ...powerSets];
};
