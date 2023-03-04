# Trees

A tree is a node class with a root, left and right values. The tree works its way down the left side until it can no longer find a left, when it does this it will look right and if there is no right it will go back up and repeat this process. This is just the path that is used to traverse a tree. Trees are used in many places such as file structure and DOM, maybe even canvas assignments too?

## Challenge

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node. Then create a tree class with methods for preOrder, inOrder and postOrder. PreOrder will start as soon as it finds a node, inOrder will start as soon as a node has no left and postOrder will start as soon as it finds a node with no left or right.

## Approach & Efficiency

As a class we started off with creating a node class, then creating a tree class. Within this tree class we created 3 functions called preOrder, inOrder and postOrder. After this I wrote out tests to make sure they all worked.

## API

I have methods for preOrder, inOrder and postOrder. PreOrder will start as soon as it finds a node, inOrder will start as soon as a node has no left and postOrder will start as soon as it finds a node with no left or right.

Reference: Ryan Gallaways demo work, I followed along in class ':)'
