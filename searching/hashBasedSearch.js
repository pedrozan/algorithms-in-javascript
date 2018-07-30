/**
 * HASH-BASED SEARCH
 *
 * This approach is good for larger collections that are not necessarily sorted. On a hash-based search we first build
 * a hash table with the values from our collection, then we just have to access the hash value to find the element we
 * are looking for. Because more than one element can map to the same hash, we use the sequential search to search
 * inside the subarray.
 *
 * What we do is, using a hashing function H build a hash table where the elements can be accessed as hashTable[H(el)].
 * The elements of the table are arrays with the elements from the original collection, that is why we use Sequential
 * Search on the result from hashTable[H(el)].
 *
 */

/**
 * This function will receive an array and a length and will return a hash table. This hash table is an array where
 * each element is an array with one or more elements from the original array.
 *
 * @param C - The array to be turned into a hash table
 * @returns {any[]} - a hash table built from the array C
 */
function loadTable(C) {
    var size = C.length,
        H = new Array(size);

    C.forEach(function (e) {
        var h = hash(e);
        if (!H[h]) {
            H[h] = [];
        }
        H[h].push(e);
    });

    return H;
}

/**
 * This is the hashing function, you must choose a specific hashing function to suit you data. The hashing function must
 * return a value that will be used as key on the hash table, the more evenly we can distribute the elements on the hash
 * table the better our algorithm will perform.
 *
 * @param el - an integer to be hashed
 * @returns {number} - the hash value
 */
function hash(el) {
    return Math.floor(el/3);
}

/**
 * This is the search function, it receives a hash table H and a target. We apply the hashing function to the target
 * and search for the hash value on H. Because H is composed of arrays with than proceed to a sequentialSearch inside
 * the subarray.
 *
 * @param H - a hashtable
 * @param target - the value we are looking for
 * @returns {boolean}
 */
function search(H, target) {
    var h = hash(target),
        list = H[h];
    if (list) {
        if (list.length <= 0) {
            return false;
        } else if (sequentialSearch(list, target)) {
            return true;
        }
    }
    return false;
}

/**
 * This is the sequential search as implemented on https://github.com/pedrozan/algorithms-in-javascript/blob/master/searching/sequentialSearch.js
 *
 * @param A - The array we will search
 * @param target - The value we are looking for
 * @returns {boolean}
 */
function sequentialSearch(A, target) {
    for (var i = 0; i < A.length; i++) {
        if (A[i] === target) {
            return true;
        }
    }
    return false;
}

// Testing our Hash-based search
A = [7,5,13,2,14,1,6];
hashTable = loadTable(7, A);
console.log(search(hashTable, 13));
console.log(search(hashTable, -1));