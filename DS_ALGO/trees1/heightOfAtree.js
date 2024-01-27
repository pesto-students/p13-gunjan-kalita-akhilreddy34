class Solution {
  maxHeight = 0;
  height(node) {
    //your code here
    this.helper(node, 0);
    return this.maxHeight;
  }

  helper(node, currentHeight) {
    if (node == null) return;

    currentHeight = currentHeight + 1;
    this.maxHeight = Math.max(this.maxHeight, currentHeight);
    this.helper(node.left, currentHeight);
    this.helper(node.right, currentHeight);
  }
}
