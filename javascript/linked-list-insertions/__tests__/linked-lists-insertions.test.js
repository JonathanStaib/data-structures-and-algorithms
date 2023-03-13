'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('should instantiate an empty linked list', () => {
    const linked = new LinkedList();
    expect(linked.head).toBeNull();
  });

  it('should append at the end of list', () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.append(2);
    expect(linked.head.next.value).toEqual(2);
    expect(linked.head.next.next).toBeNull();
  });

  it('should append multiple nodes at the end of list', () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.append(2);
    linked.append(3);
    linked.append(4);
    expect(linked.head.next.value).toEqual(2);
    expect(linked.head.next.next).toBeTruthy();
    expect(linked.head.next.next.value).toEqual(3);
    expect(linked.head.next.next.next).toBeTruthy();
    expect(linked.head.next.next.next.value).toEqual(4);
    expect(linked.head.next.next.next.next).toBeNull();
  });

  it('should append at the end of list', () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.append(2);
    linked.append(4);
    linked.insertAfter(3, 2);

    expect(linked.head.next.value).toEqual(2);
    expect(linked.head.next.next.value).toEqual(3);
  });

});
