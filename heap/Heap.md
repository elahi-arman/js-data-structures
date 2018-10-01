# Overview

A heap is a partially ordered data structure. The particular implementation
in this repo is done with an array. 

## Description

The partial ordering comes from the fact that the heap is ordered from top
down ( in its subtree ), but not from side to side. The top most element
of a sub tree is always the local optima of that tree.

This is particularly vague since a Heap can be ordered either ascending or
descending. The ascending order would be a MinHeap. The descending order
would be a MaxHeap.

## Example Heap Structures

### Min Heap

          3
      7      12  
    15  8  13   17     // 8 is less than 12, but not less than 7

## Insertion

### Requirements for Insertion

1. Maintain as much balance in the heap structure as possible
1. The heap partial ordering must still stand after insertion

### Implementation for Insertion

1. Pushed new node to this.data (maintains balance)
1. Now start making sure ordering is okay (bubbling up)
  1. Loop
  1. compare(this.data[parent], this.data[position])
  1. compare === true => swap parent and child, move up to the parent
  1. compare === false => the child is in the correct position

## Deletion

### Requirements for Deletion

1. Maintain as much balance in the heap structure as possible
1. The heap partial ordering must still stand after insertion

### Implementation for Deletion

1. Eject the first element
1. Make the last inserted element the new root
1. Now start making sure ordering is okay (bubbling down)
  1. Loop
  1. compare(this.data[position], this.data[left])
  1. compare === true => swap current and left, move down to left
  1. compare(this.data[position], this.data[right])
  1. compare === true => swap current and right, move down to right
  1. compare === false => the child is in the correct position
