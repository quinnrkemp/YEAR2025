  // CHALLENGE NAME-  MakeUpperCase

    // DESCRIPTION:

    // Write a function which converts the input string to uppercase.

    // // ***STARTER CODE***

    // function makeUpperCase(str) {
    //     // Code here
    //   }    

    // //   ******TEST CASES*****
    
    // const { assert } = require('chai');

    // describe("Basic Tests", function(){
    //   it("should pass the basic tests", function(){
    //     assert.strictEqual(makeUpperCase(""),           "");
    //     assert.strictEqual(makeUpperCase("hello"), "HELLO");
    //     assert.strictEqual(makeUpperCase("Hello"), "HELLO");
    //     assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
    //   });
    // });

    // ******MY ANSWER********

    function makeUpperCase(str) {
        let res=''
        for (let i=0; i<=str.length-1; i++){
          res+= str[i].toUpperCase()
        }
          return res
        //   ***alt answer below***
        //   return str.toUpperCase()  
          // Code here
        }