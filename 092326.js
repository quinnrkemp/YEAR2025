  // CHALLENGE NAME-  The falling speed of petals

    // DESCRIPTION:

// When it's spring Japanese cherries blossom, it's called "sakura" 
// and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per 
// second (5 cm/s), and it takes 80 seconds for the petal to reach 
// the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as 
// input, and returns the time it takes for that petal to reach the 
// ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case 
// we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

//     // ***STARTER CODE***

//  function sakuraFall(v) {
//   // your code here
//     return 0.0;
// }   

//     //   ******TEST CASES*****
    
// describe("The falling speed of petals", () => {
//     const {assert} = require("chai");
//     const DELTA = 1e-6;

//   it("sample tests", () => {
//     assert.approximately(sakuraFall(5),80, DELTA)
//     assert.approximately(sakuraFall(10),40, DELTA)
//     assert.approximately(sakuraFall(200),2, DELTA)
//     assert.approximately(sakuraFall(-1),0, DELTA)
//     });
// });

    // ******MY ANSWER********

    function sakuraFall(v) {
   // your code here
    return v<=0?0:(400/v)
}