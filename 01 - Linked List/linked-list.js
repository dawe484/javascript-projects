// Representation of Linked List in JavaScript
const list = {
  head: {
    value: 6
    next: {
      value: 10
      next: {
        value: 12
        next: {
          value: 3
          next: null
        }
      }
    }
  }
};

// Implementing a List Node - a list node contains two items: the data and the pointer to the next node
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
};

// Implementing a Linked List - if the head node is not passed, the head is initialised to null
class LinkedList {
  constructor(head =null) {
    this.head = head;
  }
};

// Putting it all together
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.head.next.data); //returns 5

// Some LinkedList methods
// size() - returns the number of nodes present in the linked list
const size = () => {
  let count = 0;
  let node = this.head;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
}

// clear() - empties out the list
const clear = () => {
  this.head = null;
}

// getLast() - returns the last node of the linked list
const getLast = () => {
  let lastNode = this.head;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
  }
  return lastNode;
}

// getFirst() - returns the first node of the linked list
const getFirst = () => {
  return this.head;
}
