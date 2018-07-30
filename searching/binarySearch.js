/**
 * BINARY SEARCH
 *
 * This algorithm starts from an ordered collection of elements and by dividing the collection it searches for the target
 * element. On step one it takes the middle element and checks if it is greater, smaller or equal to the target, it than
 * takes the upper or lower half and repeats this step until the element is found.
 *
 * Example:
 * A = [1,2,3,4,5]
 * target = 4;
 *
 * On first pass the middle is 3, which is smaller than our target. Now we look at the upper half [4,5] and the middle
 * is 4, the target!
 *
 */

/**
 * The search function will receive an array and a number. It them proceeds to cut in half the array on each step til
 * the target is found.
 *
 * @param A
 * @param target
 * @returns {boolean}
 */
function search(A, target) {
    // we start defining our boundaries
    var low = 0,
        high = A.length - 1;

    // If low is larger than high the target is not on the collection
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);

        // here we test if the target is larger, smaller or equal and proceed accordingly
        if (target < A[mid]) {
            high = mid - 1;
        } else if (target > A[mid]) {
            low = mid + 1;
        } else {
            return true;
        }
    }
    //if we haven't found the target, return false
    return false;
}

// testing the algorithm
A = [1,2,3,4,5,6,7,8,9,10];
console.log(search(A, 7));
console.log(search(A, -1));