var isSubtree = function (root, subRoot) {
  if (root == null) return false;

  let isSubTree = false;
  if (root.val == subRoot.val) isSubTree = checkIfSubtree(root, subRoot);

  if (isSubTree) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var checkIfSubtree = function (node, subRootNode) {
  if (node == null && subRootNode == null) return true;
  if (node == null || subRootNode == null) return false;
  if (node.val != subRootNode.val) return false;

  return (
    checkIfSubtree(node.left, subRootNode.left) &&
    checkIfSubtree(node.right, subRootNode.right)
  );
};
