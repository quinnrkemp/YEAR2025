  // CHALLENGE NAME- What is between? 

    // DESCRIPTION:

// Complete the function that takes two integers (a, b, where a < b) 
// and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


//     // ***STARTER CODE***

//  function between(a, b) {
//   // your code here
// }   

//     //   ******TEST CASES*****
    
// describe("Basic tests", () => {
//   it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
//   it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
// });

    // ******MY ANSWER********

 function between(a, b) {
let res=[]
for (let i=a; i<=b; i++){
  res.push(i)
}
  return res
  // your code here
}   