  // CHALLENGE NAME-  Sum of Multiples

    // DESCRIPTION:

// Find the sum of all multiples of n below m

// Keep in Mind
// n and m should be natural numbers (positive integers). Otherwise, 
// see the examples in your language about how to handle invalid 
// input values.
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

//     // ***STARTER CODE***

//  function sumMul(n,m){
// //your idea here
// }   

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("should test", () => {
//     assert.strictEqual(sumMul(0,0),"INVALID");
//     assert.strictEqual(sumMul(2,9),20);
//     assert.strictEqual(sumMul(4,-7),"INVALID");
//   });
// });

    // ******MY ANSWER********

function sumMul(n,m){
let res=0
for (let i=n;i<m;i+=n){
res+=i
}
 return res || 'INVALID'
  //your idea here
}

// ***practice work below***

// function sumMul(n,m){
// // let res=0
// let res=[]
// for (let i=n;i<m;i+=n){
// // res+=i
//   res.push(i)
// // res.reduce((a,b)=>a+b)
// }
//   return res.reduce((a,b)=>a+b,0) || 'INVALID'
// //  return res || 'INVALID'
// //   return res
//   //your idea here
// }