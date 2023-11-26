function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) return root1 || root2;

  let newNode = new TreeNode(root1.val + root2.val, null, null);

  newNode.left = mergeTrees(root1.left, root2.left);
  newNode.right = mergeTrees(root1.right, root2.right);

  return newNode;
};
