class Solution {
  numberOfLeafNodes = 0;
  countLeaves(root) {
    this.helper(root);
    return this.numberOfLeafNodes;
  }

  helper(node) {
    if (node == null) return null;

    let leftChild = this.helper(node.left);
    let rightChild = this.helper(node.right);

    if (leftChild == null && rightChild == null)
      this.numberOfLeafNodes = this.numberOfLeafNodes + 1;
    return node;
  }
}
