  // CHALLENGE NAME-  Remove exclamaiton marks

    // DESCRIPTION:

    // Write function RemoveExclamationMarks which removes all 
    // exclamation marks from a given string.

    // // ***STARTER CODE***

    // function removeExclamationMarks(s) {
    //     return '';
    //   }   

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Tests", () => {
    //   it("test", () => {
    //     assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
    //   });
    // });

    // ******MY ANSWER********

    function removeExclamationMarks(s) {
        // ***answer #1***
        //   return s.split('!').join('')
        
        //  ***answer #2***
          return s.replaceAll('!','')
        }