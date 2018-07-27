/**
 * QUICKSORT
 *
 * The Quick Sort algorithm takes a position on the list as a pivot and places anything bigger on the right side
 * and anything smaller on the left side. This is faster than the insertion sort on larger sets and both can be used
 * together for their strengths when the set is larger or smaller then a given number.
 *
 * The choice of pivot is a process that must be efficient, one should not need to run the entire array. Here we pick
 * the medium element, some other alternatives are picking at random, select the first (or last) element, select the
 * medium-of-k.
 *
 */

/**
 * The quicksort function, receives an array A and returns an ordered array.
 *
 * @param A
 * @returns {*}
 */
function quicksort(A) {
    // If the array has one element we don't need to sort it.
    if (A.length <= 1) {
        return A;
    }

    // Select the pivot as the first element
    var pivot = A[0];
    // start left and right as empty arrays that will be filled on the next step
    var left = [];
    var right = [];

    // put the elements on right or left based on their comparison to the pivot
    for (var i = 1; i < A.length; i++) {
        A[i] < pivot ? left.push(A[i]) : right.push(A[i]);
    }

    // return a call to quicksort passing left and right to be sorted
    return quicksort(left).concat(pivot, quicksort(right));
}

// just testing the function
A = [2,4,6,34,8,1,746,34,6,20];
console.log(A);
var sorted = quicksort(A);
console.log(sorted);