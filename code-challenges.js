// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

const fruit1 = "apple"
const fruit2 = "banana"

const fruit3 = "cherry"
const fruit4 = "kiwi"

const longerString = (string1, string2) => {
    if (string1.length > string2.length){
        return string1
    }
    else {
        return string2
    }
}
// Set one:
console.log(longerString(fruit1, fruit2))
// Expected outcome: "banana"
// Set two:
console.log(longerString(fruit3, fruit4))
// Expected outcome: "cherry"

// Pseudo code:
// Input: 2 strings
// Output: the longer of the two strings
// Evaluate the length of two string and compare
// Returns the string with bigger length
// conditional statement to evaluate the length


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
const combinedLength = (arr1, arr2) => {
    return arr1.length + arr2.length
}

console.log(combinedLength(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))
// Pseudo code:
// Input: two arrays
// Output: the length of combined arrays
// Evaluate the length of each arrays
// Sum two lengths
// Just simple evaluating and adding


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"
var stringToArray = currentCohort.split("")
stringToArray.reverse()
var arrayToString = stringToArray.join("")
console.log(arrayToString)
// Pseudo code:
// Input: A string
// Output: Reverse of the input string
// change the string to array for so we can use reverse function
// back to string
// Reverse functions works for array, not the string



// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27
const onlyOddNumbers = (array) => {
    let newArr = []
    for (let i=0; i < array.length; i++){
        if (array[i]%2 !== 0) {
            newArr.push(array[i])
    }
    }
    return newArr
}
console.log(onlyOddNumbers(stockExchange))
// Pseudo code:
