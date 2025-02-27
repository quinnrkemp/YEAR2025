    // CHALLENGE NAME-  Pythagorean Triple

    // DESCRIPTION:

    // Given an unsorted array of 3 positive integers [ n1, n2, n3 ], 
    // determine if it is possible to form a Pythagorean Triple using 
    // those 3 integers.

    // A Pythagorean Triple consists of arranging 3 integers, such that:
    
    // a2 + b2 = c2
    
    // Examples
    // [5, 3, 4] : it is possible to form a Pythagorean Triple using these 
    // 3 integers: 32 + 42 = 52
    
    // [3, 4, 5] : it is possible to form a Pythagorean Triple using these 
    // 3 integers: 32 + 42 = 52
    
    // [13, 12, 5] : it is possible to form a Pythagorean Triple using these 
    // 3 integers: 52 + 122 = 132
    
    // [100, 3, 999] : it is NOT possible to form a Pythagorean Triple using 
    // these 3 integers - no matter how you arrange them, you will never find 
    // a way to satisfy the equation a2 + b2 = c2
    
    // Return Values
    // For Python: return True or False
    // For JavaScript: return true or false

    // // ***STARTER CODE***

    // function isPythagoreanTriple(integers) {
    //     // Good luck friends!
    //   }

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    
    // describe("Simple test cases", function() {
    //   it("Pass these", function() {
    //     assert.strictEqual(isPythagoreanTriple([3, 4, 5]), true);
    //     assert.strictEqual(isPythagoreanTriple([3, 5, 9]), false);
    //   });
    // });

    // ******MY ANSWER********

    function isPythagoreanTriple(int) {
        let a= int[0]**2
        let b= int[1]**2
        let c= int[2]**2
        return a+b==c || b+c==a || c+a==b
        //   return int[0]**2+int[1]**2===int[2]**2 || int[0]**2+int[1]**2===int[2]**2 || int[0]**2+int[1]**2===int[2]**2
          // Good luck friends!
        }