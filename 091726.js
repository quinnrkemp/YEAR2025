    // CHALLENGE NAME-  Smallest unused ID

    // DESCRIPTION:

// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based 
// and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID 
// for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons 
// there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

//     // ***STARTER CODE***

//  function nextId(ids){
//   //this will be awesome!
//   return 0;
// }   

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe('method: nextId', function() {
//   it('returns the lowestNextId', function() {
//     Test.assertEquals(nextId([0,1,2,3,5]), 4);
//   });
//   it('returns the lowestNextId', function() {
//     Test.assertEquals(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
//   });
//   it('returns the lowestNextId - unsorted input with duplicates', function() {
//     Test.assertEquals(nextId([1,2,0,2,3,5]), 4);
//   });
// });

    // ******MY ANSWER********

function nextId(ids){
  //this will be awesome!
  let res= ids.sort((a,b)=>a-b)
  let res1= [...new Set(res)]
//  let tot=[]
  for (let i=0;i<=ids.length;i++){
 let first = ids[i]
    let second = ids[i+1]
    
    if (second !== first + 1) {
      return first + 1
  }
  return res1
  
}

// ****this answer is incorrect. not sure what the error is