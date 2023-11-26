var isSymmetric = function (root) {
  return helper(root, root);
};

var helper = function (node1, node2) {
  if (node1 == null && node2 == null) return true;
  if (node1 == null || node2 == null) return false;
  if (node1.val != node2.val) return false;
  return helper(node1.left, node2.right) && helper(node1.right, node2.left);
};
