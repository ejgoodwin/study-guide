# Binary search tree
* Key in each node is greater or equal to the left subtree, and less than the right subtree

## JavaScript implementation
<pre>
<code class="language-javascript">
class Node {
  constructor(value) {
    this.value = value;
    this. left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  bfs(val) {
    // Use queue data structure for BFS.
    const queue = [];
    // Data to show the dfs movement.
    const data = [];
    let current;
    queue.push(this.root);
    while(queue.length > 0) {
      current = queue.shift();
      data.push(current.value);
      if (val === current.value) {
        console.log(data);
        return current;
      }
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    console.log(data);
    return false;
  }
  
  dfs(val) {
    // Use stack data structure for DFS.
    const stack = [];
    // Data to show the dfs movement.
    const data = [];
    let current;
    stack.push(this.root);
    while(stack.length > 0) {
      current = stack.pop();
      data.push(current.value);
      if (val === current.value) {
        console.log(data);
        return current;
      }
      current.left && stack.push(current.left);
      current.right && stack.push(current.right);
    }
    console.log(data);
    return false;
  }
  
  dfsPreOrderRecursive() {
    const data = [];
    let current = this.root;
    
    function traverse(node) {
      data.push(node.value);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;
  }
  
  dfsPostOrderRecursive() {
    const data = [];
    let current = this.root;
    
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }
  
  dfsInOrderRecursive() {
    const data = [];
    let current = this.root;
    
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;
  }
  
  find(val) {
    let tempNode = this.root;
    while(tempNode) {
      if (val === tempNode.value) {
        return tempNode;
      }
      if (val < tempNode.value) {
        tempNode = tempNode.left;
      } else {
        tempNode = tempNode.right;
      }
    }
    return false;
  }
  
  insert(val) {
    const newVal = new Node(val);
    if (!this.root) {
      this.root = newVal;
      return;
    }
    let current = this.root;
    while (current) {
      if (val < current.value) {
        if (!current.left) {
          current.left = newVal;
          return this;
        } 
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newVal;
          return this;
        }
        current = current.right;
      }
    }
  }
}

const root = new Node('root');
const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(15);
tree.insert(12);
tree.insert(17);
tree.insert(40);
tree.insert(30);
tree.insert(25);
tree.insert(35);
tree.insert(50);
tree.insert(45);
tree.insert(55);
console.log(tree);
console.log(tree.dfs(1));
console.log(tree.bfs(1));
console.log('Pre order',tree.dfsPreOrderRecursive());
console.log('Post order',tree.dfsPostOrderRecursive());
console.log('In order',tree.dfsInOrderRecursive());
</code>
</pre>