  // CHALLENGE NAME-  simple calculator

    // DESCRIPTION:

// You are required to create a simple calculator that returns the 
// result of addition, subtraction, multiplication or division of 
// two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation 
// to perform on these two numbers.

// You should return the result of applying the given operation to these 
// numbers.

// Note: In dynamically typed languages (JS, PHP, Python), the first and 
// second arguments can be not numbers. In that case, return "unknown value".

// If the given operation to perform on the two numbers is not one of the 
// four mentioned above, you should:

// return a value:
// "unknown value" (JS, PHP, Python)
// throw an exception:
// std::invalid_argument (C++)
// ArgumentException (C#)
// IllegalArgumentException (Java)
// Example:
// arguments: 1, 2, "+"
// should return 3

// arguments: 1, 2, "&"
// refer to the description for what you should return in this case

// # Specifically for dynamically-typed languages:

// arguments: 1, "k", "*"
// should return "unknown value"

//     // ***STARTER CODE***

// function calculator(a,b,sign){
//   // Your code here...
// }    

//     //   ******TEST CASES*****
    
// const { assert, config } = require('chai');
// config.truncateThreshold = 0 ;

// describe("calculator", function() {
//   it("Sample tests", () => {
//     function tester(a, b, sign, expected) {
//       assert.strictEqual(calculator(a, b, sign), expected, `Failed for inputs:\n- a: ${JSON.stringify(a, null, 2)}\n- b: ${JSON.stringify(b, null, 2)}\n- sign: ${JSON.stringify(sign, null, 2)}\n`);
//     }

//     tester(1,   2, "+",               3);
//     tester(1,   2, "-",              -1);
//     tester(3,   5, "*",              15);
//     tester(6,   2, "/",               3);
//     tester(6,   2, "$", "unknown value");
//     tester(6, "h", "*", "unknown value");
//   });
// });

    // ******MY ANSWER********

function calculator(a,b,s){
//  return eval(`${a}${s}${b}`)
return eval('1+2')
  //  return `${${a}${s}${b}}`  
  // Your code here...
}

// ****the above answer is not correct***