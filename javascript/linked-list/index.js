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

  kthFromLast(k) {

    let len = 0;
    let current = this.head;

    while (current !== null) {
      current = current.next;
      len++;

    }
    if (len < k) {
      return;

    } else {
      current = this.head;
      for (let i = 1; i < len - k; i++) {
        current = current.next;
      }
    }
    return current.value;

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

  zipLists(list1, list2) {
    let currentList1 = list1.head;
    let currentList2 = list2.head;
    let zipList = new LinkedList();
    while(currentList1 || currentList2) {
      if(currentList1) {
        zipList.append(currentList1.value);
        currentList1 = currentList1.next;
      }
      if (currentList2) {
        zipList.append(currentList2.value);
        currentList2 = currentList2.next;
      }
    }
    return zipList;
  }

}


class Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
