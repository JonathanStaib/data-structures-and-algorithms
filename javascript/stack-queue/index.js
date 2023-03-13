'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next= this.top;
    this.top = newNode;
  }

  pop() {
    if (this.top === null) {
      throw new Error('empty stack');
    }
    let removedValue = this.top ? this.top.value : this.top;
    if (this.top) {
      this.top = this.top.next;
    }
    return removedValue;
  }

  validateBrackets(str) {

    let stack = [];
    let open = ['(', '[', '{'];
    let close = [')', ']', '}'];
    let values = {
      ')': '(',
      ']': '[',
      '}': '{'
    };

    for (let i = 0; i < str.length; i++) {
      if (open.includes(str[i])) {
        stack.push(str[i]);
      } else if (close.includes(str[i])) {
        if (stack[stack.length - 1] === values[str[i]]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }


  peek(){
    // if (this.top === null) {
    //   throw new Error('empty stack');
    // }
    return this.top?.value;
  }

  isEmpty(){
    return this.top === null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue(){
    let removedValue = null;
    if(this.front){
      removedValue = this.front.value;
      if(this.front === this.back){
        this.back = null;
      }
      this.front = this.front.next;
    }
    return removedValue;
  }

  peek(){
    return this.front?.value;
  }

  isEmpty(){
    return this.front === null;
  }
}

class PseudoQueue{
  constructor(){
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(value){
    if(this.dequeueStack.isEmpty())this.enqueueStack.push(value);

    if(!this.enqueueStack.isEmpty() && !this.dequeueStack.isEmpty()){
      while(!this.dequeueStack.isEmpty()){
        this.enqueueStack.push(this.dequeueStack.pop());
      }
      this.enqueueStack.push(value)
    }
  }

  qequeue(){
    if(this.enqueueStack.isEmpty() && this.dequeueStack.isEmpty())throw new Error(`error: the queue is empty`);
    if(this.qequeueStack.isEmpty() && !this.enqueueStack.isEmpty()){
      while(!this.enqueueStack.isEmpty()){
        this.dequeueStack.push(this.enqueueStack.pop());
      }
      this.dequeueStack.pop();
    }
    if(!this.dequeueStack.isEmpty())this.dequeueStack.pop();

  }
}

module.exports = { Stack, Queue, PseudoQueue };
