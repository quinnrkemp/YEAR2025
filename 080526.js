    // CHALLENGE NAME-  Switch it Up!

    // DESCRIPTION:

// When provided with a number between 0-9, return it in 
// words. Note that the input is guaranteed to be within 
// the range of 0-9.

// Input: 1

// Output: "One".

//     // ***STARTER CODE***

// function switchItUp(number){
// //Write your own Code!
// }    

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(switchItUp(1),"One");
//     assert.strictEqual(switchItUp(3),"Three");
//     assert.strictEqual(switchItUp(5),"Five");
//   });
// });

    // ******MY ANSWER********

function switchItUp(n){
  var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return words[n];
}