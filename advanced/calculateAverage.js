/**
 * Problem:
 * Write a function that calculates the average of the numbers in an array.
 *
 * Your task:
 * Implement the function `calculateAverage` that returns the average of the numbers.
 *
 * Example:
 * calculateAverage([1, 2, 3, 4]) should return 2.5.
 * calculateAverage([10, 20, 30]) should return 20.
 */

function calculateAverage(...arg) {


    let arr = []
    let sumArray = 0
    for (let number of arg) {

        let x = number

        arr.push(x)
    }

    for (let i = 0; i < arr.length; i++) {
        sumArray = sumArray + arr[i]

    }


    let resultAverage = sumArray / arr.length

    console.log(resultAverage);



}

calculateAverage(1, 2, 3, 4)


module.exports = calculateAverage;