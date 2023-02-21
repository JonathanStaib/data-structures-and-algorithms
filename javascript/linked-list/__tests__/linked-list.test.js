'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('should instantiate an empty linked list', () => {
    const linked = new LinkedList();
    expect(linked.head).toBeNull();
  });

  it('should insert at the head', () => {
    const linked = new LinkedList();
    linked.insert(1);
    expect(linked.head.value).toEqual(1);
    expect(linked.head.next).toBeNull();
  });

  it('should insert at the beginning of list', () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.insert(2);
    expect(linked.head.value).toEqual(2);
    expect(linked.head.next.value).toEqual(1);
    expect(linked.head.next.next).toBeNull();
  });

  it('should return true when finding a value in the list', () => {
    const linked = new LinkedList();
    linked.insert('orange');
    linked.insert('apple');

    expect(linked.includes('orange')).toBe(true);

  });

  it('should return false when finding a value in the list', () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.insert(2);

    expect(linked.includes(3)).toBe(false);

  });

  it('should to string', () => {
    const linked = new LinkedList();
    linked.insert('valorant');
    linked.insert('league');

    const linkedString = linked.toString();

    expect(linkedString).toEqual('{ league } -> { valorant } -> NULL');
  });

  it('should find kth number in list', () => {
    const linked = new LinkedList();
    linked.insert(1);
    linked.insert(2);
    linked.insert(3);
    linked.insert(4);
    linked.insert(5);
    const kthvalue = linked.kthFromLast(2);
    expect(kthvalue).toEqual(3);
  });
});

