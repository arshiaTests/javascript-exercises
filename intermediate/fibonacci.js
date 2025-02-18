/**
 * Problem:
 * Write a function that prints the Fibonacci sequence up to a given number of terms.
 *
 * Your task:
 * Implement the function `fibonacci` that returns an array of Fibonacci numbers up to the specified count.
 *
 * Example:
 * fibonacci(5) should return [0, 1, 1, 2, 3].
 * fibonacci(3) should return [0, 1, 1].
 */

// Write your solution here
function fibonacci(num){
    let fab =[0,1]
    for(i =2 ; i<num ; i++){
        fab.push(fab[i-1] + fab[i-2]);
    }
    return fab
}
console.log(fibonacci(5));
module.exports = fibonacci;
