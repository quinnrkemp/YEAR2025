  // CHALLENGE NAME-  Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

    // DESCRIPTION:

// Coding in function firstToLast, function accept 2 parameters:str and c. str 
// is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is 
// only one c in str, should return 0; If there is no c in the str, should return -1. 
// Retrieval should not ignored the case.

// for example:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

//     // ***STARTER CODE***

//  function firstToLast(str,c){
//   //coding here..
  
// }   

//     //   ******TEST CASES*****
    
// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(firstToLast("ababc","a") , 2);
//     assert.strictEqual(firstToLast("ababc","c") , 0);
//     assert.strictEqual(firstToLast("ababc","d") , -1);
//   });
// });

    // ******MY ANSWER********

function firstToLast(s,c){
let one= s.indexOf(c)
let two=s.lastIndexOf(c)
return one==-1 || two==-1?-1:one==two?0:two-one
//coding here..
  
}