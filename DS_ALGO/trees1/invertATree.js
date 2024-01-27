var invertTree = function (root) {
  helper(root);
  return root;
};

let helper = function (node) {
  if (node == null) return;

  let leftChild = invertTree(node.left);
  let rightChild = invertTree(node.right);

  node.left = rightChild;
  node.right = leftChild;
  return node;
};
