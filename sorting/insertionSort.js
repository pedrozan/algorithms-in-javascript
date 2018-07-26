/**
 * INSERTION SORT
 *
 * The insertion sort algorithm steps trough the list invoking an insert help function until the list is entirely sorted.
 *
 * This algorithm is best used on small collections or when most of the time the elements will be almost sorted. The definition
 * of small will change with the machine, language and even what you are sorting.
 *
 * In the best case (array already sorted) the complexity is O(n), on all other cases it is O(n^2).
 */

/**
 * This is the sorting function, it will run trough a given array calling insert on each element.
 * @param A - an array of integers
 */
function sort(A) {
    for (var pos = 1; pos < A.length - 1; pos++) {
        insert(A, pos, A[pos]);
    }
}

/**
 * The inserting function will pick a value and insert it on the right place, effectively moving the other values to their place as well.
 * Note that we can pass a function to be used instead of > on the comparison step to extend this same functionality to different use cases.
 * @param A
 * @param pos
 * @param value
 */
function insert(A, pos, value) {
    var i = pos - 1;
    while (i >= 0 && A[i] > value) {
        A[i+1] = A[i];
        i = i - 1;
    }
    A[i + 1] = value;
}

// just testing the function
A = [2,4,6,34,8,1,746,34,6,20];
console.log(A);
sort(A);
console.log(A);