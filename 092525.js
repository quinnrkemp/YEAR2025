  // CHALLENGE NAME-  BASIC: Making Six Toast.

    // DESCRIPTION:

// Problem:
// You forgot to count the number of toast you put into there, you 
// don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of 
// toast you need in the toasters. Even though you need more or less, 
// the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to 
//     take out). In case of 5 you can still put 1 toast in:

// 5 --> 1
// And in case of 12 you need 6 toasts less (but not -6):

// 12 --> 6

//     // ***STARTER CODE***

// function sixToast(num) {

//   // you code here
// }    

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(sixToast(6), 0);
// Test.assertEquals(sixToast(17), 11);
// Test.assertEquals(sixToast(3), 3);
//   });
// });

    // ******MY ANSWER********

    function sixToast(num) {
  return Math.abs(num-6)
}