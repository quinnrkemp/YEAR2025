    // CHALLENGE NAME-  Localize The Barycenter of a Triangle

    // DESCRIPTION:

// Your function receives the coordinates of the three vertices A, B and C  as 
// three different arguments and outputs the coordinates of the barycenter O, 
// rounded to 4 decimals, in an array [xO, yO].

// You know that the coordinates of the barycenter are given by the following 
// formulas:

// xO = (xA +xB +xC) / 3​
 
// yO = (yA +yB +yC) / 3​
 
// The given points form a real or a degenerate triangle but in each case the 
// above formulas can be used.

// For additional information about this important point of a triangle see at: (https://en.wikipedia.org/wiki/Centroid)

// Let's see some cases:

// ([4, 6], [12, 4], [10, 10]) ------> [8.6667, 6.6667]

// ([4, 2], [12, 2], [6, 10]) ------> [7.3333, 4.6667]
// Enjoy it and happy coding!!

//     // ***STARTER CODE***

// function barTriang(p1, p2, p3){
//   //your code here
// }    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(barTriang([4, 6], [12, 4], [10, 10]), [8.6667, 6.6667]);
//     assert.deepEqual(barTriang([4, 2], [12, 2], [6, 10]), [7.3333, 4.6667]);
//     assert.deepEqual(barTriang([4, 8], [8, 2], [16, 6]), [9.3333, 5.3333]);
//     assert.deepEqual(barTriang([0, 0], [1, 3], [-1, 6]), [0, 3]);
//     assert.deepEqual(barTriang([0, 0], [1, 6], [8, -6]), [3, 0]);
//   });
// });

    // ******MY ANSWER********

function barTriang(p1, p2, p3){
let x= ((p1[0] + p2[0] + p3[0]) /3).toFixed(4)
let y= ((p1[1] + p2[1] + p3[1]) /3).toFixed(4)
return [+x, +y]
  //your code here
}