/**
 * BUCKET SORT
 *
 * By dividing a set of n elements in n buckets, Bucket Sort will reduce the processing cost of comparing the elements
 * increasing the cost of memory allocation. You can use this sorting method if you have a hashing function to divide
 * the elements between buckets while maintaining the number of buckets equal to the number of elements.
 *
 * Using the hashing function the elements are divided on the buckets in an ordered manner. Each bucket is them ordered
 * using the Insertion Sort algorithm. Note that this use of the Insertion Sort will make the execution time increase
 * if the sets inside the buckets are large.
 *
 */

/**
 * The main sorting function.
 * @param A
 */
function sort(A) {
    var lengthOfA = A.length,
        B = new Array(lengthOfA);

    for (var j = 0; j < lengthOfA; j++) {
        // where hash(A[j]) is the bucket number for element A[j]
        var k = hash(A[j]);
        if(!B[k] || B[k].constructor !== Array) {
            B[k] = [];
        }
        B[k].push(A[j]);
    }
    // copy B into A
    extract(B, A);
}

/**
 * This is the hashing function.
 *
 * @param el
 * @returns {number}
 */
function hash(el) {
    // You must choose the hashing function wisely to have the best performance.
    return Math.floor(el/3);
}

/**
 * This function will take the elements on the buckets, and place them back in the array on a ordered manner.
 *
 * @param B
 * @param A
 */
function extract(B, A) {
    console.log('A: ' + A);
    console.log('B: ' + B);
    console.log('length of B: ' + B.length);
    var idx = 0;
    // Run trough the bucket list, sort the bucket's content and add them back to A
    for (var i = 0; i < A.length; i++) {
        // check if B[i] is an empty bucket
        if (B[i]) {
            // sort the bucket's content if needed
            if (B[i].length > 1) {
                insertionSort(B[i]);
            }
            console.log(B[i]);
            // copy the sorted contents back to the original array
            B[i].forEach(function (el) { A[idx] = el; idx++; })
        }
    }
}

/**
 * This is the same function used on Insert Sort (https://github.com/pedrozan/algorithms-in-javascript/blob/master/sorting/insertionSort.js)
 *
 * @param A
 */
function insertionSort(A) {
    for (var pos = 1; pos < A.length; pos++) {
        insert(A, pos, A[pos]);
    }
    console.log(A);
}

/**
 * Same as above
 *
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
A = [7,5,13,2,14,1,6];
console.log(A);
sort(A);
console.log(A);