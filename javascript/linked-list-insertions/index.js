'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value, null);
  }

  insertAfter(newValue, beforeNode){

    let newNode = new Node(newValue, null);
    newNode.next = beforeNode.next;
    beforeNode.next = newNode;
  }
}


class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
