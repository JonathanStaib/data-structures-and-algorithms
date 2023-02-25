# Stack and Queue

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue. Implement push, pop, peek, is empty in Stack as well as enqueue, dequeue, peek and is empty in Queue.

## Challenge

We needed to create a Stack class that included push, pop, peek and is empty functions. We also needed to create a Queue class that included enqueue, dequeue, peek and is empty functions. We then need to make various tests to test all of these functions and see if they give the correct output.

## Approach & Efficiency

The approach that I took was to firstly create a class and an empty Stack. From there I worked on getting my functions into place. Once all stack functionality was compelete I wrote tests to prove that my functionality was correct. All functionality was correct except for pop and peek, they needed some sort of error or response when no value was inserted. Then I created an empty Queue and again implemented all functionality, created tests and got all tests passing.

## API

The methods that I created for my stack today are push, pop, peek and is empty. push was created so that we can add elements at the top of the stack. The pop is there to remove the element from the top of the stack. The peek function was created to be able to see the value of the element at the top of the stack and returns null if empty. The is empty method is there to check if you have an empty list, if empty this function will return true and vise-versa. The tests were created to test all of this functionality and see if it was working properly. Then all the same for Queue except that enqueue creates an element at the back of the queue and dequeue takes the front element off of the queue.