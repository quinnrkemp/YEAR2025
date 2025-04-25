  // CHALLENGE NAME-  Sum The Strings

    // DESCRIPTION:

    // Create a function that takes 2 integers in form of a 
    // string as an input, and outputs the sum (also as a string):

    // Example: (Input1, Input2 -->Output)
    
    // "4",  "5" --> "9"
    // "34", "5" --> "39"
    // "", "" --> "0"
    // "2", "" --> "2"
    // "-5", "3" --> "-2"
    // Notes:
    
    // If either input is an empty string, consider it as zero.
    
    // Inputs and the expected output will never exceed the signed 
    // 32-bit integer limit (2^31 - 1)
    
    

    // // ***STARTER CODE***

    // function sumStr(a,b) {

             
    //   }   

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Tests example test cases", () => {
    //     assert.strictEqual(sumStr("4","5"), "9");
    //     assert.strictEqual(sumStr("34","5"), "39");
    //   });
    
    //   it("Tests empty string cases", () => { 
    //     assert.strictEqual(sumStr("","8"), "8");
    //     assert.strictEqual(sumStr("9",""), "9");
    //     assert.strictEqual(sumStr("",""), "0");
    //   });
    
    //   it("Tests random cases", () => {
        
    //     // random number generator
    //     let randNum = function(min,max) {
    //       let diff = max-min;
    //       return Math.ceil((Math.random()*diff)+min);
    //     };
    //     // my solution
    //     function mySumStr(a,b) {
    //       if(a == '') {
    //         if(b == '') {
    //           return "0";
    //         }
    //         else {
    //           return b.toString();
    //         }
    //       }
    //       else if(b == '') {
    //         if(a == '') {
    //           return "0";
    //         }
    //         else {
    //           return a.toString();
    //         }
    //       }
    //       else {
    //         return (parseInt(a) + parseInt(b)).toString();
    //       }
    //     }
        
    //     for(let i = 0; i < 50; i++) {
    //       let randA = randNum(0,500).toString();
    //       let randB = randNum(0,500).toString();
    //       assert.strictEqual(sumStr(randA,randB),mySumStr(randA,randB), `Testing for a = ${JSON.stringify(randA)}, b = ${JSON.stringify(randB)}`);
    //     }
    //   })
    // });

    // ******MY ANSWER********

function sumStr(a,b) {

    return (Number(a)+Number(b)).toString()
  
  }