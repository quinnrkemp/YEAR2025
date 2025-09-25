  // CHALLENGE NAME-  Get the Nth Even Number

    // DESCRIPTION:

// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

//     // ***STARTER CODE***

//  function nthEven(n){
//   // your code here
// }   

//     //   ******TEST CASES*****
    
// const chai = require('chai');
// const assert = chai.assert;

// describe("Sample tests", () => {
//   it("Taken from the description", () => {
//     assert.strictEqual(nthEven(1), 0, "Wrong Value!");
//     assert.strictEqual(nthEven(2), 2, "Wrong Value!");
//     assert.strictEqual(nthEven(3), 4, "Wrong Value!");

//     assert.strictEqual(nthEven(100), 198, "Wrong Value!");
//     assert.strictEqual(nthEven(1298734), 2597466, "Wrong Value!");
//   });
// });

    // ******MY ANSWER********

    function nthEven(n){
let res= ''
for (let i=0;i<=n.length+n;i++){
  res+= i[n]%2===0
}
  // your code here
}

// ***the above answer is incorrect***