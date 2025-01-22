/**
 * Problem:
 * Write a function that counts the occurrences of a specific character in a given string.
 *
 * Your task:
 * Implement the function `charCount` that returns the number of times a given character appears in the string.
 *
 * Example:
 * charCount("hello", "l") should return 2.
 * charCount("world", "o") should return 1.
 */

// Write your solution here


function Charcount(string, char) {

    let ArrS = string.split('')

    let num = 0;
    let indexArr = 0

    for (let i = 0; i <= ArrS.length; i++) {

        if (ArrS[indexArr] === char) {
            num++
        }
        indexArr++;


    }

    console.log(num);
}

Charcount('hello', 'l')

module.exports = charCount;