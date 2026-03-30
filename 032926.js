  // CHALLENGE NAME-  Is is a number?

    // DESCRIPTION:

// Given a string s, write a method (function) that will return true if its
//  a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

//     // ***STARTER CODE***

//  function isDigit(s) {

//   //your code
// }   

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Solution", function(){
//   it("basic tests", function(){
//     var input = "s2324";
//     Test.assertEquals(isDigit(input), false);
    
//     input = "-234.4";    
//     Test.assertEquals(isDigit(input), true);    
//   });
// });

    // ******MY ANSWER********

function isDigit(s) {
    return parseFloat(s) === Number(s)
  }
