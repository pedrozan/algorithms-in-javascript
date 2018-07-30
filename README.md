# Algorithms in JavaScript

Here is collection of algorithms implemented in JavaScript. They are separated in folders by their uses.

## Sorting

Here are the algorithms used to sort stuff.

- [Bucket Sort](sorting/bucketSort.js) - Sorts by dividing the set into buckets and them copying the ordered buckets back into the original array. Best used when the elements are drawn from a uniform dense universe, if the sets inside the buckets are not too big.

- [Heap Sort](sorting/heapSort.js) - Sorts by building a heap with the elements to be sorted. Use it when you are concerned about the worst case scenarios.

- [Insertion Sort](sorting/insertionSort.js) - Sorts by inserting the elements on their correct positions. Use this on small collections or when the collection is almost sorted.

- [Merge Sort](sorting/mergeSort.js) - Sorts by dividing the collection successively in two parts, sorting the parts and merging back the sorted parts. This is a stable sort, use it when you need to keep equal pairs on their original order.

- [Quick Sort](sorting/quickSort.js) - Sorts by dividing the collection in two parts and sorting each part separately. This is best used when you want a good average-case behavior.

## Searching

These are some of the algorithms you can use for searches.

- [Sequential Search](searching/sequentialSearch.js) - The most straight forward search algorithm, runs the collection checking if the element matches the one being searched. Use this when the collection can only be accessed sequentially.