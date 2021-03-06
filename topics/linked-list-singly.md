# Linked list (singly linked)
* List of nodes
* Each node contains a pointer to the next item and some data
* Unidirectional - traversed in only one direction

## JavaScript implementation
* Example shows a node class and a linked list class
* The linked list class has methods that traverse, select, insert and remove items in the list

<pre>
<code class="language-javascript">
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  get(pos) { // Get the item at a specified position.
    // Traverse list until pos. Return item if it exists.
    let count = 0;
    let tempHead = this.head;
    if (pos < 0 || pos >= this.length) return false;
    while (count < pos) {
      tempHead = tempHead.next;
      count++;
    }
    return tempHead;
  }
  
  insert(pos, val) { // Inset node at specified position.
    // Get item at pos - 1. Set its next value to new node.
    // Set new node's next value to original item's next.
    if (pos === this.length) return this.push(val);
    if (pos === 0) return this.unshift(val);
    
    const newNode = new Node(val);
    const foundNode = this.get(pos-1);
    if (foundNode) {
      newNode.next = foundNode.next;
      foundNode.next = newNode;
      this.length++;
    }
  }
  
  push(val) { // Add item to end of list.
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  
  pop() { // Remove last item in list.
    // One item in list.
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    
    let tempHead = this.head.next;
    let prev = this.head;
    while (tempHead.next) {
      prev = tempHead;
      tempHead = tempHead.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
  } 
  
  print() {
    const printArr = [];
    let tempNode = this.head;
    for (let i = 0; i < this.length; i++) {
      printArr.push(tempNode.val);
      tempNode = tempNode.next;
    }
    console.log(printArr);
  }
  
  remove(pos) { // Remove item.
    // Check pos is valid. Use existing methods if poss.
    if (pos < 0 || pos >= this.length) return false;
    if (pos === 0) return this.shift();
    if (pos === this.length-1) return this.pop();
    // Get prev item and set its new next pointer.
    const prevNode = this.get(pos-1);
    const removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;
  }
  
  reverse() { // Reverse the list.
    // Head is new tail. Tail is new head. 
    this.tail = this.head;
    let tempNode = this.head.next;
    let tempNodePrev = this.tail;
    let tempNodeNext = tempNode.next;
    while (tempNode.next) {
      tempNode.next = tempNodePrev;
      tempNodePrev = tempNode;
      tempNode = tempNodeNext;
      tempNodeNext = tempNode.next;
    }
    this.tail.next = null;
    this.head = tempNode;
    this.head.next = tempNodePrev;
  }
  
  set(pos, val) { // Set a value for an item at a specified position.
    // Use get method to return node and set its val.
    const foundNode = this.get(pos);
    if (foundNode) {
      foundNode.val = val;
      return;
    }
    return false;
  }
  
  shift() { // Remove node from beginning.
    // If list is already empty, return.
    if (!this.head) return;
    // Move head pointer to next node and decrement length.
    this.head = this.head.next;
    this.length--;
    // If list is now empty, set tail pointer to null.
    if (this.length == 0) {
      this.tail = null;
    }
  }
  
  unshift(val) {
    // Add node to beginning of list.
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return;
    }
    
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

const list = new LinkedList();
</code>
</pre>