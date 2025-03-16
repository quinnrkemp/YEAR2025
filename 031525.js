  // CHALLENGE NAME-  Count of positives / sum of negatives

    // DESCRIPTION:

    // Given an array of integers.

    // Return an array, where the first element is the count of positives 
    // numbers and the second element is sum of negative numbers. 0 is neither 
    // positive nor negative.
    
    // If the input is an empty array or is null, return an empty array.
    
    // Example
    // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you 
    // should return [10, -65].

    // // ***STARTER CODE***

    

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Example tests", () => {
    //   it("Testing for fixed test 1", () => {
    //     let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    //     let actual = countPositivesSumNegatives(testData);
    //     let expected = [10, -65];
    //     assert.deepEqual(actual, expected);
    //   })
        
    //   it("Testing for fixed test 2", () => {
    //     let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    //     let actual = countPositivesSumNegatives(testData);
    //     let expected = [8, -50];    
    //     assert.deepEqual(actual, expected);
    //   });
    // });

    // ******MY ANSWER********

function countPositivesSumNegatives(input) {
    if (input.length===0 || input===null) {
      return []
    }
    const res1 = input.filter((num) => num > 0)
    const res2 = input.filter((num) => num < 0)
    const res3= res2.reduce((a,b)=>a+b,0)
    let res4= [res1.length, res3]
      
    // return input===[] || input=== +0? []:[res1.length, res3]
    
    return res4
    // your code here
    }

    // ***codewars is not accepting this answer, but the same answer was accepted in a past 
    // solution. so not sure what is wrong in this attempt***