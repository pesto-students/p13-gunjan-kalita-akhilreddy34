class Solution {
  //Function to check whether a Binary Tree is BST or not.
  isBST(root) {
    //your code here
    return this.utilFunction(
      root,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY
    );
  }

  utilFunction(root, leftLimit, rightLimit) {
    if (root == null) return true;

    if (root.data > leftLimit && root.data < rightLimit) {
      return (
        this.utilFunction(root.left, leftLimit, root.data) &&
        this.utilFunction(root.right, root.data, rightLimit)
      );
    } else return false;
  }
}
