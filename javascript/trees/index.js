'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// class KaryNode{
//   constructor(value, k){
//     this.value = value;
//     this.children = new Array(k).fill(null);
//   }
// }

// class KaryTree{
//   constructor(){
//     this.root = null;
//   }
// }

class Tree{
  constructor(){
    this.root = null;
  }

  preOrder(){
    const array = [];
    const traverse = (node) => {

      array.push(node.value);

      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return array;
  }
  inOrder(){
    const array = [];
    const traverse = (node) => {
      if(node.left) traverse(node.left);
      console.log(node.value);
      array.push(node.value);
      if(node.right) traverse(node.right);
    };
    traverse(this.root);
    return array;
  }

  postOrder(){
    let array = [];
    const traverse = (node) => {

      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      console.log(node.value);
      array.push(node.value);
    };
    traverse(this.root);
    return array;
  }

  treeMax() {
    let max = 0;
    if (!this.root) return null;
    const traverse = (node) => {
      if (node.value > max) max = node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return max;
  }

  breadthFirst(tree){
    const result = [];
    const queue = [tree.root];

    while(queue.length > 0){
      const current = queue.shift();

      result.push(current.value);
      if(current.left !== null){
        queue.push(current.left);
      }
      if(current.right !==null){
        queue.push(current.right);
      }
    }
    return result;
  }

  fizzBuzzTree(tree){
    let returnTree = tree;
    let root = returnTree.root;
    const traverse = (node) => {
      if(node.value % 5 === 0 && node.value % 3 === 0) node.value = 'fizzBuzz';
      else if (node.value % 5 === 0) node.value = 'buzz';
      else if (node.value % 3 === 0) node.value = 'fizz';
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(root);
    return returnTree;
  }
}



let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

// tree.inOrder(); 1, 5, 8, 10, 15, 17

// tree.postOrder(); 1 8 5 17 15 10

// const results = tree.preOrder();
// console.log(results);

module.exports = {Node, Tree};


