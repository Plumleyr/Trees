/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let queue = [this.root];
    let values = 0;

    while (queue.length) {
      let current = queue.shift();
      values += current.val;

      for (let child of current.children) {
        queue.push(child);
      }
    }

    return values;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let queue = [this.root];
    let evens = 0;

    while (queue.length) {
      let current = queue.shift();
      if (current.val % 2 === 0) {
        evens++;
      }

      for (let child of current.children) {
        queue.push(child);
      }
    }

    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let queue = [this.root];
    let count = 0;

    while (queue.length) {
      let current = queue.shift();
      if (current.val > lowerBound) {
        count++;
      }

      for (let child of current.children) {
        queue.push(child);
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
