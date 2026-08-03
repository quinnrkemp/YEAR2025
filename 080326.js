    // CHALLENGE NAME-  Grader

    // DESCRIPTION:

// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"
// Examples:

// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"

//     // ***STARTER CODE***

// function grader(score) {
  
// }    

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Solution", function() {
//   it("should pass some sample tests", function() {
//     Test.assertEquals(grader(0.7), "C");
//     Test.assertEquals(grader(0.9), "A");
//     Test.assertEquals(grader(0.6), "D");
//   });
// });

    // ******MY ANSWER********

function grader(s) {
  return s>=0.6&&s<0.7?'D':s>=0.7&&s<0.8?'C':s>=0.8&&s<0.9?'B':s>=0.9&&s<=1?'A':'F'
}