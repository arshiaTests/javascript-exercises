/**
 * Problem:
 * Write a function that finds the duplicate elements in an array.
 *
 * Your task:
 * Implement the function `findDuplicates` that returns an array of all duplicate elements in the input array.
 *
 * Example:
 * findDuplicates([1, 2, 2, 3, 4, 4]) should return [2, 4].
 * findDuplicates([1, 2, 3]) should return [].
 */

// Write your solution here


function findDuplicates(...arg) {

    let arr = []

    for (let num of arg) {
        let x = num

        arr.push(x)
    }

    let dup = arr.filter(function(num, index) {

        // console.log(num);
        arr.indexOf(num) !== index

    })





}


findDuplicates(1, 3, 4, 5, 3, 3, 2)


module.exports = findDuplicates;