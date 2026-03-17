  // CHALLENGE NAME-  Training JS #10: loop statement --for

    // DESCRIPTION:

// The function pickIt accepts 1 parameter, arr, which is an array of numbers. 
// We need to traverse arr by using a for loop. If an element is an odd number, 
// push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return 
// statement. Your work is to write a for loop.

// If you forgot how to push an element to an array, please refer to lesson 4.

//     // ***STARTER CODE***

//  function pickIt(arr){
//   let odd = [], even = [];

//  }
//   //coding here
  
//   return [odd,even];
// }   

//     //   ******TEST CASES*****
    
// const chai = require('chai');
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe('Sample Tests', () => {
//   it('Test', () => {
//     tester([1,2]          , [ [1]       , [2] ]       );
//     tester([1,2,3]        , [ [1,3]     , [2] ]       );
//     tester([3,2,1]        , [ [3,1]     , [2] ]       );
//     tester([10,20,30]     , [ []        , [10,20,30] ]);
//     tester([11,21,31]     , [ [11,21,31], [] ]        );
//     tester([8,1,5,4,6,1,1], [ [1,5,1,1] , [8,4,6] ]   );
//   });
// });

//   function tester(arr, expected) {
//       const err_msg = `Testing for ${JSON.stringify(arr)}\n\n`;
//       const before = [...arr];
//       const actual = pickIt(arr);
//       assert.deepEqual(actual, expected, err_msg);
//       assert.deepEqual(arr, before, "Input array must not be modified");
//   }

    // ******MY ANSWER********

function pickIt(arr){
  let odd = [], even = [];
 for (let i=0;i<=arr.length-1;i++){
   arr[i]%2!=0?odd.push(arr[i]):even.push(arr[i])
 }
  //coding here
  
  return [odd,even];
}