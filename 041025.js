  // CHALLENGE NAME-  Take the Derivative

    // DESCRIPTION:

    // Description:
    // This function takes two numbers as parameters, the first number 
    // being the coefficient, and the second number being the exponent.
    
    // Your function should multiply the two numbers, and then subtract 
    // 1 from the exponent. Then, it has to return an expression 
    // (like 28x^7). "^1" should not be truncated when exponent = 2.
    
    // For example:
    
    // derive(7, 8)
    // In this case, the function should multiply 7 and 8, and then 
    // subtract 1 from 8. It should output "56x^7", the first number 56 
    // being the product of the two numbers, and the second number being 
    // the exponent minus 1.
    
    // derive(7, 8) --> this should output "56x^7" 
    // derive(5, 9) --> this should output "45x^8" 
    // Notes:
    
    // The output of this function should be a string
    // The exponent will never be 1, and neither number will ever be 0

    // // ***STARTER CODE***

    // function derive(coefficient,exponent) {
  
    // }    

    // //   ******TEST CASES*****
    
    // const { assert } = require("chai");

    // describe("Tests the example test cases", function() {
    //   it("derive(7, 8)", function() {
    //     assert.strictEqual(derive(7,8), "56x^7", "derive(7, 8)");
    //   });
    //   it("derive(5, 9)", function() {
    //     assert.strictEqual(derive(5,9), "45x^8", "derive(5, 9)");
    //   });
    // });

    // ******MY ANSWER********

    function derive(c,e) {
        return `${c*e}x^${e-1}`
      }