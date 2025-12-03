  // CHALLENGE NAME-  Find Multiples of a Number

    // DESCRIPTION:

// In this simple exercise, you will write a function that takes two 
// integers; n and limit; and returns a list of the multiples of n 
// up to and possibly including limit.

// It is guaranteed that n > 0 and limit >= n.

// For example, if the parameters passed are (2, 6), the function 
// should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up 
// to 6.

// Examples
// n = 2; limit = 6 --> [2, 4, 6]
// n = 2; limit = 5 --> [2, 4]

//     // ***STARTER CODE***

// function findMultiples(integer, limit) {
//   //your code here
// }    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');
// it("Basic Tests",() =>{
//   assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
//   assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
//   assert.sameOrderedMembers(findMultiples(5, 7), [5])
//   assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
//   assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])
// });

    // ******MY ANSWER********

function findMultiples(n, lim) {
let res= []
for (let i=n;i<=lim;i+=n){
  res.push(i)
}
  return res
  //your code here
}
