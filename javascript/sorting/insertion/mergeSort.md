# Merge Sort Blog

## About Merge Sort

Merge Sort is a way to divide an array into subarrays, sort each of these subarrays and then put them back together into one completely sorted array.

## Examples

  Example Array: [ 8, 4, 23, 42, 16, 15 ]

You will start with finding the length of the array and compare it to 1. If the length of the array is greater than 1, then find the midpoint.

Here you will want to divide the array into two different arrays at the midpoint which in our example would be between 23 and 42.

Now you will have:[ 8, 4, 23 ] and [ 42, 16, 15 ].

Now again, check if the length of each array is less than 1, if so split it at the midpoint.

Now we will be left with [ 8, 4 ], [ 23 ], [ 42, 16 ] and [ 15 ].

Repeat one more time at midpoint and you will have [ 8 ], [ 4 ], [ 23 ], [ 42 ], [ 16 ], [ 15 ].

After creating arrays that are only a length of one we will compare the size of each element in an array one at a time and combine them into a new array that will be sorted.

Your finished product will be [ 4, 8, 15, 16, 23, 42 ]

I will be publishing code on this soon!
