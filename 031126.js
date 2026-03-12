  // CHALLENGE NAME-  Training JS #15: Methods of Number object--toFixed(), 
  // toExponential() and toPrecision()

    // DESCRIPTION:

// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr 
// is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No 
//     need to convert number n).

// The second mission: Traversal arr, count the number of elements which are 
// smaller than n and return it.

// for example:

// howManySmaller([1.234,1.235,1.228],1.24) should return 2
// howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2

//     // ***STARTER CODE***

//  function howManySmaller(arr,n){
//   //coding here..
  
// }   

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe('Tests', () => {
//   it('Example tests', () => {
//     assert.strictEqual(howManySmaller([1.234, 1.235, 1.228], 1.24), 2);
//     assert.strictEqual(howManySmaller([1.1888, 1.1868, 1.1838], 1.19), 1);
//     assert.strictEqual(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212), 2);
//   });
// });

    // ******MY ANSWER********

howManySmaller=(arr,n)=>arr.filter(a=>a.toFixed(2)<n).length