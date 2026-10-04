    // CHALLENGE NAME-  Quadrants

    // DESCRIPTION:

// Given a point in a Euclidean plane (x and y), return the quadrant 
// the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero 
// integers, therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

//     // ***STARTER CODE***

//  function quadrant(x, y) {
//   // Poveli!
// }   

//     //   ******TEST CASES*****
    
// const {assert} = require("chai");
// describe("Fixed", () => {
//   const tests = {
//     Example: [
//       [1, 2, 1], [3, 5, 1], [-10, 100, 2],
//       [-1, -9, 3], [19, -56, 4]
//     ]
//   };
//   for (var k of Object.keys(tests)) {
//     it(k, () => {
//       for (var t of tests[k]) {
//         assert.strictEqual(quadrant(t[0], t[1]), t[2]);
//       }
//     });
//   }
// });

    // ******MY ANSWER********

function quadrant(x, y) {
return x>0&&y>0?1:x<0&&y>0?2:x<0&&y<0?3:4
  // Poveli!
}
// ***this is my answer***