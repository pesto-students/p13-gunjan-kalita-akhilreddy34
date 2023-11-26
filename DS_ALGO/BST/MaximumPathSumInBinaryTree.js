let res = Number.NEGATIVE_INFINITY;
var maxPathSum = function (root) {
  helperFunction(root, res);

  return res;
};

var helperFunction = function (node) {
  if (node == null) return Number.NEGATIVE_INFINITY;
  let leftChildMax = helperFunction(node.left);
  let rightChildMax = helperFunction(node.right);

  let childMax = Math.max(leftChildMax, rightChildMax);

  res = Math.max(
    res,
    Math.max(
      childMax,
      childMax + node.val,
      leftChildMax + rightChildMax + node.val,
      node.val
    )
  );

  return childMax == Number.NEGATIVE_INFINITY
    ? node.val
    : Math.max(childMax + node.val, node.val);
};
