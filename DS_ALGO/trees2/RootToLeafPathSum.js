var hasPathSum = function (root, targetSum) {
  if (root == null) return false;
  return helper(root, targetSum, 0);
};

let helper = function (node, targetSum, currentSum) {
  if (node.left == null && node.right == null) {
    return currentSum + node.val == targetSum ? true : false;
  }

  let left = false;
  let right = false;
  if (node.left) left = helper(node.left, targetSum, currentSum + node.val);
  if (node.right) right = helper(node.right, targetSum, currentSum + node.val);
  return left || right;
};
