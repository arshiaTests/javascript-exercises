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
let charCount = (name, x) => {
    let count = 0;
    for (let i = 0; i < name.length; i++) {
      if (name[i] === x) count++;
    }
    return count;
  };
  
  console.log(charCount("javascript", "a")); 
  console.log(charCount("javascript", "s")); 

module.exports = charCount;
