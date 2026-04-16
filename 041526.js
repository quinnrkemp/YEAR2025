  // CHALLENGE NAME-  Be Concise I - The Ternary Operator

    // DESCRIPTION:

// Your task is to shorten the code as much as possible. Note that submitting the 
// given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research 
// any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? 
// ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)

//     // ***STARTER CODE***

//  // TODO: Refactor and shorten the function

// function describeAge(age) {
//   if (age <= 12) {
//     return "You're a(n) kid";
//   } else if (age >= 13 && age <= 17) {
//     return "You're a(n) teenager";
//   } else if (age >= 18 && age <= 64) {
//     return "You're a(n) adult";
//   } else {
//     return "You're a(n) elderly";
//   }
// }   

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Example tests", () => {
//   it("should still exhibit the exact same behaviour as the function prior to refactoring", () => {
//     tester(9  , "You're a(n) kid"     );
//     tester(10 , "You're a(n) kid"     );
//     tester(11 , "You're a(n) kid"     );
//     tester(12 , "You're a(n) kid"     );
//     tester(13 , "You're a(n) teenager");
//     tester(14 , "You're a(n) teenager");
//     tester(15 , "You're a(n) teenager");
//     tester(16 , "You're a(n) teenager");
//     tester(17 , "You're a(n) teenager");
//     tester(18 , "You're a(n) adult"   );
//     tester(19 , "You're a(n) adult"   );
//     tester(63 , "You're a(n) adult"   );
//     tester(64 , "You're a(n) adult"   );
//     tester(65 , "You're a(n) elderly" );
//     tester(66 , "You're a(n) elderly" );
//     tester(100, "You're a(n) elderly" );
//   });
// });

// function tester(age, expected) {
//   const actual = describeAge(age);
//   assert.strictEqual(actual, expected, `Testing for age = ${age}\n\n`);
// }

    // ******MY ANSWER********

function describeAge(age) {
let a=`You're a(n)`
return age<=12?`${a} kid`:age<=17?`${a} teenager`:age<=64?`${a} adult`:`${a} elderly`
}