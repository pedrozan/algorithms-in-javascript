/**
 * SEQUENTIAL SEARCH
 *
 * This is the most straight forward searching algorithm. The implementation is trivial, just run through the list
 * checking for the element we are after.
 *
 * The performance is O(1) on the best case (searched item on first position) and O(n) on any other case.
 */

/**
 * The searching function receives a list and a target, it will run trough the list testing if the element is the one
 * being searched for.
 *
 * @param A
 * @param target
 * @returns {boolean}
 */
function search(A, target) {
    for (var i = 0; i < A.length; i++) {
        if (A[i] === target) {
            return true;
        }
    }
    return false;
}

// testing the algorithm
A = [1,2,3,4,5];
console.log(search(A, 2));
console.log(search(A, 98));
