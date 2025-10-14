  // CHALLENGE NAME-  Short Long Short

    // DESCRIPTION:

// Given 2 strings, a and b, return a string of the form short+long+short, 
// with the shorter string on the outside and the longer string on the inside. 
// The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

//     // ***STARTER CODE***

//  function solution(a, b){
//   // your code here
// }   

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Sample tests", function() {
//   it("Should pass sample tests", function() {
//     Test.assertEquals(solution('45', '1'), '1451');
//     Test.assertEquals(solution('13', '200'), '1320013');
//     Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
//     Test.assertEquals(solution('U', 'False'), 'UFalseU');
//   });
// });

    // ******MY ANSWER********

    function solution(a, b){
return a.length<b.length?`${a}${b}${a}`:`${b}${a}${b}`
  // your code here
}