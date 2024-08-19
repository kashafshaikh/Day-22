
// Day 22

// ### Question 1: Count Digits in a Number
// Given a number, your task is to count and return the number of digits in that number.

// *Example:*
// typescript
// function countDigits(num: number): number {
//     // Write your logic here
// }

// // Example usage
// console.log(countDigits(12345)); // Output: 5
// console.log(countDigits(987));   // Output: 3

function countDigits(num: number): number{
    let count = 0;
    while (num !== 0){
        num = Math.floor(num/10);
        count++
    }
    return count;
}

console.log(countDigits(12345)); // Output: 5
console.log(countDigits(987));   // Output: 3

// ### Question 2: Calculate the Power of a Number
// Given a base number b and an exponent e, your task is to calculate b raised to the power of e without using built-in methods like Math.pow.

// *Example:*
// typescript
// function calculatePower(b: number, e: number): number {
//     // Write your logic here
// }

// // Example usage
// console.log(calculatePower(2, 3)); // Output: 8
// console.log(calculatePower(5, 0)); // Output: 1

function calculatePower(b:number, e:number):number{
    let result = 1;
    for(let i=0; i<e; i++){
        result *= b;
    }
    return result;
}
console.log(calculatePower(2,3));  //output: 8
console.log(calculatePower(5,0));  //output: 1
