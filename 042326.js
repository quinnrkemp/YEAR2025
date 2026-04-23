  // CHALLENGE NAME-  isReallyNaN

    // DESCRIPTION:

// I've hit a few bugs in my Java/Type/Coffee-script code recently, and 
// I've traced the problem back to the global isNaN function I was using. 
// I had expected it to be more discerning, but it's returning true for 
// undefined right now.

// Write a function isReallyNaN that returns true only if passed in an 
// argument that evalutes to NaN, and returns false otherwise.

// Any solution is acceptable!

//     // ***STARTER CODE***

//  const isReallyNaN = (val) => {
//   // return isNaN(val);  // wasn't working as planned :-(
// //   return true || false;
//   return val !== val
// };   

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.isFalse(isReallyNaN(37));
//     assert.isFalse(isReallyNaN('37'));
//     assert.isTrue(isReallyNaN(NaN));
//     assert.isFalse(isReallyNaN(undefined));
//   });
// });

    // ******MY ANSWER********

const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
//   return true || false;
  return val !== val
};