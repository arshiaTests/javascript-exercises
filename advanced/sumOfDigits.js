/**
 * Problem:
 * Write a function that takes a positive integer as input and returns the sum of its digits.
 *
 * Your task:
 * Implement the function `sumOfDigits` that calculates the sum of digits in the given number.
 *
 * Example:
 * sumOfDigits(123) should return 6 (1 + 2 + 3).
 * sumOfDigits(987) should return 24 (9 + 8 + 7).
 */

function sumOfDigits(num) {


    let arrNum = Array.from(String(num))

    let res = 0;

    arrNum.map(function(x) {


        let number = +x;

        res += number

    })

    console.log(res);



}

sumOfDigits(987)
module.exports = sumOfDigits;