  // CHALLENGE NAME-  Surface Area and Volume of a Box


    // DESCRIPTION:

// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// The output will be language dependant, so please check sample tests for the corresponding 
// data type, (list, tuple, struct, query, etcetera).

//     // ***STARTER CODE***

//  function getSize(width, height, depth)
   

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(getSize(4, 2, 6), [88, 48]);   
//     assert.deepEqual(getSize(10, 10, 10), [600, 1000]);
//     assert.deepEqual(getSize(4, 2, 6)[0], 88);
//     assert.deepEqual(getSize(4, 2, 6)[1], 48);
//   })
// });

    // ******MY ANSWER********

function getSize(w, h, l){
  let a=2*(l*w+l*h+w*h)
  let v= l*w*h
  return [a, v]
}