  // CHALLENGE NAME-  Square(n) Sum

    // DESCRIPTION:

    // Complete the square sum function so that it squares each number 
    // passed into it and then sums the results together.

    // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 3^2= 9

    // // ***STARTER CODE***

    // function squareSum(numbers){

    // }    

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Tests", () => {
    //   it("test", () => {
    //     assert.strictEqual(squareSum([1,2]), 5);
    //     assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    //     assert.strictEqual(squareSum([]), 0);
    //   });
    // });

    // ******MY ANSWER********

    function squareSum(num){
        return num.reduce((a,b)=> a+b**2,0)
        }

        // **********2nd attempt below (incorrect)******************
        // function squareSum(num){
        //     let res= []
        //     for (let i=0; i<=num[num.length-1]; i++){
        //       res.push(i**2)
        //     }
        //       return res.reduce((a,b)=> a+b,0)
        //     // return num.reduce((a,b)=> a+b**2,0)
        //     }