'use strict';

const { Stack, Queue} = require('..');


describe('Stack', () => {
  it('lets us push onto stack', () => {
    let stack = new Stack();
    stack.push('A');
    expect(stack.top.value).toEqual('A');
  });

  it('lets us push multiple values onto stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  it('lets us pop off stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    let poppedValue = stack.pop();

    expect(poppedValue).toEqual(3);
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();
  });

  it('lets us empty stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    let poppedValue = stack.pop();
    let poppedValue2 = stack.pop();
    let poppedValue3 = stack.pop();

    expect(poppedValue).toEqual(3);
    expect(poppedValue2).toEqual(2);
    expect(poppedValue3).toEqual(1);
    expect(stack.isEmpty(true));
  });

  it('lets us peek at next item in stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    let peekedValue = stack.peek();

    expect(peekedValue).toEqual(3);

  });

  it('lets us see a empty stack', () => {
    let stack = new Stack();

    expect(stack.isEmpty(true));

  });

  it('raises exception when calling peek or pop on empty stack', () => {
    let stack = new Stack();

    // let poppedVal = stack.pop();
    let peekedVal = stack.peek();

    expect(stack.isEmpty(true));
    expect(() => {stack.pop();}).toThrow('empty stack');
    // expect(() => {stack.peek();}).toThrow('empty stack');
    console.log(peekedVal);
    expect(peekedVal).toEqual(null || undefined);

  });

  it('lets us join the queue', () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.front.value).toEqual(1);

  });

  it('lets us join the queue many times!', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.back.value).toEqual(3);

  });

  it('lets us leave the queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue(1);

    expect(queue.front.value).toEqual(2);
    expect(queue.back.value).toEqual(3);

  });

  it('can take a peek at the queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(3);
    queue.enqueue(5);
    queue.dequeue(1);

    let peekedVal = queue.peek();

    expect(peekedVal).toEqual(3);
    expect(queue.front.value).toEqual(3);
    expect(queue.back.value).toEqual(5);

  });

  it('can empty a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(3);
    queue.enqueue(5);

    queue.dequeue(1);
    queue.dequeue(3);
    queue.dequeue(5);

    expect(queue.isEmpty(true));

  });

  it('can empty a queue', () => {
    let queue = new Queue();

    expect(queue.isEmpty(true));

  });

  it('raises exception when calling peek or pop on empty stack', () => {
    let queue = new Queue();

    // let poppedVal = stack.pop();
    let peekedVal = queue.peek();
    let dequeueVal = queue.dequeue(1);

    expect(queue.isEmpty(true));
    // expect(() => {queue.pop();}).toThrow('empty stack');
    expect(dequeueVal).toEqual(null);
    expect(peekedVal).toEqual(null || undefined);

  });

});
