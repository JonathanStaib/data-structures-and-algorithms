'use strict';

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value) {
    // const oldHead = this.head;
    this.head = new Node(value, this.head);
    //this.head.next = oldHead; remove ^
  }

  includes(value) {
    // let oldHead = this.head;
    // this.head.next = oldHead;

    if (value === this.head.value || value === this.head.next.value) {
      return true;
    } else {
      return false;
    }
  }

  toString() {

    let current = this.head;
    let text = '';

    while(current) {
      text += `{ ${ current.value } } -> `;
      current = current.next;
    }
    // return '{banana} -> {apple} -> NULL';

    return text + 'NULL';
  }
}

class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
