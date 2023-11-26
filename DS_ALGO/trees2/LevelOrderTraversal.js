var levelOrder = function (root) {
  let nodeMap = {};
  if (root == null) return [];
  helper(root, nodeMap);
  return Object.values(nodeMap);
};

let helper = function (root, nodeMap) {
  let queue = [];

  queue.push({ node: root, level: 1 });

  while (queue.length) {
    let { node: poppedNode, level: poppedNodeLevel } = queue.shift();
    if (nodeMap[poppedNodeLevel]) {
      nodeMap[poppedNodeLevel].push(poppedNode.val);
    } else nodeMap[poppedNodeLevel] = [poppedNode.val];

    if (poppedNode.left)
      queue.push({ node: poppedNode.left, level: poppedNodeLevel + 1 });
    if (poppedNode.right)
      queue.push({ node: poppedNode.right, level: poppedNodeLevel + 1 });
  }
};
