/**
 * Problem:
 * Write a function that checks if a given number is prime or not.
 *
 * Your task:
 * Implement the function `isPrime` that checks if a number is prime.
 *
 * Example:
 * isPrime(2) should return true.
 * isPrime(4) should return false.
 */

// Write your solution here

function isPrime(n, x = 3) {
    if (n < 2) {
        return false;
    }

    while (n >= 2) {

        if (n === 2) {
            return true;
        }

        if (n > 2 && n % 2 === 0) return false;


        if (x > Math.sqrt(n)) return true;

        if (n % 3 === 0) return false;


    }


}


console.log(isPrime(7));

module.exports = isPrime;