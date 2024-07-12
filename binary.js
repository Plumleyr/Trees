/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root === null) return 0;

    let queue = [];
    queue.push({ node: this.root, depth: 1 });

    while (queue.length) {
      let { node, depth } = queue.shift();

      if (node.left === null && node.right === null) return depth;

      if (node.left !== null) {
        queue.push({ node: node.left, depth: depth + 1 });
      }

      if (node.right !== null) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }

    return 0;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) return 0;

    let maxDepth = 0;
    let queue = [];
    queue.push({ node: this.root, depth: 1 });

    while (queue.length) {
      let { node, depth } = queue.shift();
      depth > maxDepth ? (maxDepth = depth) : "";

      if (node.left !== null) {
        queue.push({ node: node.left, depth: depth + 1 });
      }

      if (node.right !== null) {
        queue.push({ node: node.right, depth: depth + 1 });
      }
    }

    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;

    const maxPathSumFromNode = (node) => {
      if (node === null) {
        return 0;
      }

      let leftSum = Math.max(maxPathSumFromNode(node.left), 0);
      let rightSum = Math.max(maxPathSumFromNode(node.right), 0);

      let currentMaxPathSum = node.val + leftSum + rightSum;

      maxSum = Math.max(maxSum, currentMaxPathSum);

      return node.val + Math.max(leftSum, rightSum);
    };

    maxPathSumFromNode(this.root);

    return maxSum;
  }
  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root === null) return null;

    let nextLargerVal = null;

    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      if (
        current.val > lowerBound &&
        (nextLargerVal === null || current.val < nextLargerVal)
      ) {
        nextLargerVal = current.val;
      }

      if (current.left !== null && current.right !== null) {
        queue.push(current.left);
        queue.push(current.right);
      }

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }

    return nextLargerVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
