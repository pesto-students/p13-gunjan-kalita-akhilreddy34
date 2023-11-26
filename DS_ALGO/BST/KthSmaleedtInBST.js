let currentK = 0;
var kthSmallest = function (root, k) {
  return utilFunction(root, k);
};

var utilFunction = function (root, k) {
  if (!root) return 0;
  let leftSubTreeVal = utilFunction(root.left);
  if (leftSubTreeVal) return leftSubTreeVal;

  currentK = currentK + 1;
  if (currentK == k) return root.val;
  else return utilFunction(root.right, k);
};
