# Singly Linked List

A singly linked list is a linear data type that also are dynamic data structures. They can grow/shrink as needed and the memory will adjust accordingly, this all needs to be done within a certain way and order. A single link list can only move in one direction.

## Challenge

We needed to create a linked list class that included an empty linked list, insert, includes and toString methods within it. There also needs to be tests to test many things to ensure that these methods above are working properly.

## Approach & Efficiency

The approach that we took as a class was to firstly create a class and an empty linked list. From there we worked in a test driven manner in which we would create a test and then create a method to check if the method was doing it's correct function. The big O for both time and space for this linked list is O(n).

## API

The methods that I created for my linked list today are insert, includes and toString. Insert was created so that we can add elements at the head of our linked list, this will then push the previous head back (if there was one) and make that the *next*. The includes is there to be able to check if a value is included in our linked list. I created a test so that we could check to see if a value inserted would be found within the test. The toString method is there to string your linked list together in order. To be able to make your linked list be strung together while still inside of their own objects or nodes.