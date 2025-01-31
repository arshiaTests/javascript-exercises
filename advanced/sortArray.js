/**
 * Problem:
 * Write a function that takes an array of numbers and sorts it in ascending order.
 *
 * Your task:
 * Implement the function `sortArray` that sorts the given array in ascending order.
 *
 * Example:
 * sortArray([3, 1, 4, 1, 5, 9]) should return [1, 1, 3, 4, 5, 9].
 */

function sortArray(args) {

    // args.sort(function(a, b) {
    //     return a;

    // })


    args.sort(function(a, b) {
        console.log(a, b);

        return a - b;
    })


    console.log(args);


}

sortArray([3, 1, 4, 1, 5, 9])

module.exports = sortArray;