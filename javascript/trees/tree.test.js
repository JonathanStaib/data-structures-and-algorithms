'use strict';

const { Node, Tree } = require('./index');

describe('tree', () => {

  // let tree = new Tree();
  // tree.root = new Node(10);
  // tree.root.left = new Node(5);
  // tree.root.right = new Node(15);
  // tree.root.left.left = new Node(1);
  // tree.root.left.right = new Node(8);
  // tree.root.right.right = new Node(17);

  it('can be created a tree with a single node', () => {
    let tree1 = new Tree();
    tree1.root = new Node(3);
    expect(tree1.root.value).toEqual(3);
    expect(tree1.root.right).toBeNull();
    expect(tree1.root.left).toBeNull();
  });

  it('can add a new nodes to left and right of parent nodes', () => {
    let tree2 = new Tree();
    tree2.root = new Node(3);
    tree2.root.left = new Node(7);
    tree2.root.right = new Node(12);
    expect(tree2.root.value).toEqual(3);
    expect(tree2.root.right.value).toEqual(12);
    expect(tree2.root.left.value).toEqual(7);
  });

  it('returns preorder array', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(3);
    tree.root.right = new Node(13);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(20);
    const results = tree.preOrder();

    expect(results).toEqual([10, 3, 1, 5, 13, 20]);
  });

  it('returns inorder tree properly', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    const inOrderResults = tree.inOrder();

    expect(inOrderResults).toEqual([1, 5, 8, 10, 15, 17]);
  });

  it('returns postorder tree properly', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    const postResults = tree.postOrder();

    expect(postResults).toEqual([1, 8, 5, 17, 15, 10]);
  });

  it('will find the max in a tree', () => {

    const tree = new Tree();
    expect(tree.treeMax()).toBeNull();
    tree.root = new Node(10);
    expect(tree.treeMax()).toEqual(10);
    tree.root.left = new Node(5);
    expect(tree.treeMax()).toEqual(10);
    tree.root.right = new Node(15);
    expect(tree.treeMax()).toEqual(15);
    tree.root.left.left = new Node(1);
    expect(tree.treeMax()).toEqual(15);
    tree.root.left.right = new Node(8);
    expect(tree.treeMax()).toEqual(15);
    tree.root.left.right = new Node(17);
    expect(tree.treeMax()).toEqual(17);

  });

  it('will push all elements into array as it goes in', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    const breadthResults = tree.breadthFirst(tree);

    expect(breadthResults).toEqual([10, 5, 15, 1, 8, 17]);
  });

  it('Fizz Buzz returns new tree', () => {
    let tree = new Tree();
    tree.root = new Node(3);
    tree.root.left = new Node(5);
    tree.root.right = new Node(1);
    tree.root.left.left = new Node(15);

    let test = tree.fizzBuzzTree(tree);
    expect(test.root.value).toEqual('fizz');
    expect(test.root.left.value).toEqual('buzz');
    expect(test.root.right.value).toEqual(1);
    expect(test.root.left.left.value).toEqual('fizzBuzz');
  });

});
