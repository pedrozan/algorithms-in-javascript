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
 * The beginning of the algorithm, just creates a copy of the array and calls mergeSort()
 *
 * @param A
 */
function sort(A) {
    var copy = A.slice();

    mergeSort(copy, A, 0, A.length);
}

/**
 * The sorting function per se, receives the array to be sorted, a results array the starting and ending positions.
 *
 * @param A - the array to be sorted
 * @param result - this array will store the sorted elements
 * @param start - the beginning of the array to be sorted
 * @param end - the end of the array to be sorted
 */
function mergeSort(A, result, start, end) {
    // if the array has only one element it is already sorted.
    if (end - start < 2) {
        return;
    }
    // if there are only two elements order them and return.
    if (end - start === 2) {
        if (result[start] > result[start + 1]) {
            swap(A, start, start + 1);
        }
        return;
    }

    // find the middle of the array and calls mergeSort on each half
    var mid = Math.floor((start + end) / 2);
    mergeSort(result, A, start, mid);
    mergeSort(result, A, mid, end);

    // merge together the two halves of the array
    var i = start,
        j = mid,
        idx = start;

    while (idx < end) {
        if (j >= end || (i < mid && A[i] < A[j])) {
            result[idx] = A[i];
            i++;
        } else {
            result[idx] = A[j];
            j++;
        }
        idx++;
    }
}

// just testing the function
A = [2,4,6,34,8,9,19,1,746,34,6,20];
console.log(A);
sort(A);
console.log(A);