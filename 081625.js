  // CHALLENGE NAME-  String repeat

    // DESCRIPTION:

    // Write a function that accepts a non-negative integer n and 
    // a string s as parameters, and returns a string of s repeated 
    // exactly n times.

    // Examples (input -> output)
    // 6, "I"     -> "IIIIII"
    // 5, "Hello" -> "HelloHelloHelloHelloHello"

    // // ***STARTER CODE***

    // function repeatStr (n, s) {
    //     return '';
    //   }   

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Tests", function() {
    //   it ("Basic tests", function() {
    //     assert.strictEqual(repeatStr(3, "*"), "***");
    //     assert.strictEqual(repeatStr(5, "#"), "#####");
    //     assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
    //     assert.strictEqual(repeatStr(0, ""), "");
    //     assert.strictEqual(repeatStr(0, "I"), "");
    //     assert.strictEqual(repeatStr(5, ""), "");
    //     assert.strictEqual(repeatStr(6, "I"), "IIIIII");
    //     assert.strictEqual(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");
    //   });
    // });

    // ******MY ANSWER********

    function repeatStr (n, s) {
        // ***answer #1***
          //  return s.repeat(n)
        
          //   return [s].map(e=> e+=n)  ***this answer is not correct***
          
        //  ***answer #2***
          let res=''
          for (let i=1; i<=n; i++) {
            res+=s
          }
          return res
        }