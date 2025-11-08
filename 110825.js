  // CHALLENGE NAME-  Third Angle of a Triangle

    // DESCRIPTION:

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

//     // ***STARTER CODE***

//  function otherAngle(a, b) {
//   return 0;
// }   

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(otherAngle(30, 60), 90);
//     assert.strictEqual(otherAngle(60, 60), 60);
//     assert.strictEqual(otherAngle(43, 78), 59);
//     assert.strictEqual(otherAngle(10, 20), 150);
//   });
// });

    // ******MY ANSWER********

function otherAngle(a, b) {
  return Math.abs((a+b)-180)
}