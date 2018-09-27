# JS Data Structures Notes

## Stack as Array

const stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
const i = stack.pop(); // stack is now [2]
alert(i);            // displays 5

## Queue as Array

const queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
const i = queue.shift(); // queue is now [5]
alert(i);              // displays 2

## Binary Tree as Array

const btree = [];
leftChild = btree => index => 2i + 1;
rightChild = btree => index => 2i + 2;