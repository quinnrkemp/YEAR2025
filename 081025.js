  // CHALLENGE NAME-  Abbreviate a Two Word Name

    // DESCRIPTION:

    // Write a function to convert a name into initials. This kata 
    // strictly takes two words with one space in between them.

    // The output should be two capital letters with a dot separating them.
    
    // It should look like this:
    
    // Sam Harris => S.H
    
    // patrick feeney => P.F

    // // ***STARTER CODE***

    // function abbrevName(name){

    //     // code away
    
    // }   

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    //     assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    //     assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    //     assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    //     assert.strictEqual(abbrevName("David Mendieta"), "D.M");
    //   });
    // });

    // ******MY ANSWER********

    function abbrevName(n){
        return (n.split(' ')[0][0] + '.' + n.split(' ')[1][0]).toUpperCase() 
        
        //  ****answer 2***
        //  return `${n.split(' ')[0][0]}.${n.split(' ')[1][0]}`.toUpperCase()  
            // code away
        
        }