/**
 * This is not part of the algorithm, just a helper to make the code clearer. It swaps the value in indexA with the
 * value in indexB
 *
 * @param A - an array
 * @param indexA - the index of the first position
 * @param indexB - the index of the second position
 */
function swap(A, indexA, indexB) {
    var temp = A[indexA];
    A[indexA] = A[indexB];
    A[indexB] = temp;
}

/**
 * The actual sorting function.
 *
 * @param A - the array to be sorted
 */
function sort(A) {
    buildHeap(A);
    for (var i = A.length -1; i > 0; i--) {
        swap(A, 0, i);
        heapify(A, 0, i);
    }
}

/**
 * Will call heapify on the array in order to create the ordered heap
 *
 * @param A
 */
function buildHeap(A) {
    var n = A.length;
    for (var i = n/2 - 1; i >= 0; i--) {
        heapify(A, i, n);
    }
}

/**
 * This function will do all the work. It will make sure that for every node on the heap is bigger than its children.
 *
 * @param A
 * @param idx
 * @param max
 */
function heapify(A, idx, max) {
    var largest = idx,
        left = 2 * idx + 1,
        right = 2 * idx + 2;

    if (left < max && A[left] > A[idx]) {
        largest = left;
    }
    if (right < max && A[right] > A[largest]) {
        largest = right;
    }
    if (largest !== idx) {
        swap(A, idx, largest);
        heapify(A, largest, max);
    }
}

// just testing the function
A = [2,4,6,34,8,1,746,34,6,20];
console.log(A);
sort(A);
console.log(A);