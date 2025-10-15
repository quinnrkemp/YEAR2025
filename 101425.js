  // CHALLENGE NAME-  Multiply Adjacent Digits   (***7kyu***)

    // DESCRIPTION:

// Multiply the adjacent digits which are not separated by a '-' or a '+' 
// in a string, then do the sum.

// For example:

// "53+5"    ->   20, which is 5 * 3 + 5
// "266-66"  ->   36, which is 2 * 6 * 6 - 6 * 6
// "555"     ->  125, which is 5 * 5 * 5

//     // ***STARTER CODE***

// function digitMultiplication(expr) {
  
// }    

//     //   ******TEST CASES*****
    
// const {assert} = require("chai");

// describe("Multiply adjacent digits", function() {
//   it("description example tests", function() {
//     assert.strictEqual( digitMultiplication("53+5"), 20, `digitMultiplication("53+5")` );
//     assert.strictEqual( digitMultiplication("266-66"), 36, `digitMultiplication("266-66")` );
//     assert.strictEqual( digitMultiplication("555"), 125, `digitMultiplication("555")` );
//   });
//   it("more example tests", function() {
//     assert.strictEqual( digitMultiplication("10000345+77-2"), 47, `digitMultiplication("10000345+77-2")` );
//     assert.strictEqual( digitMultiplication("12345-11989+1231111"), -522, `digitMultiplication("12345-11989+1231111")` );
//     assert.strictEqual( digitMultiplication("2395"), 270, `digitMultiplication("2395")` );
//     assert.strictEqual( digitMultiplication("3434343-12121212+4949494-122"), 191788, `digitMultiplication("3434343-12121212+4949494-122")` );
//     assert.strictEqual( digitMultiplication("13579+9+9+9-11"), 971, `digitMultiplication("13579+9+9+9-11")` );
//     assert.strictEqual( digitMultiplication("6-3-3-3-4"), -7, `digitMultiplication("6-3-3-3-4")` );
//   });
// });

    // ******MY ANSWER********

    function digitMultiplication(str) {
  let sumTotal = 0
  let product = 1
  for (let i = 0; i < str.length; i++) {
    //if current element is a number multiply it into the existing product
    if (str[i] == +str[i]) {
      product *= +str[i]
    } else 
    //if you see a minus sign, we're gonna subract the next set of numbers we see, so add current growing product to sumTotal, then reset product & set it to negative so the next total is subtracted even when using a '+'
    if (str[i] == "-"){
      sumTotal += product 
      product = -1
    } else 
    //if you see a plus sign, combine the current sumTotal with the growing product, then reset the product, keeping it positive
    if (str[i] == "+") {
      sumTotal += product 
      product = 1
    }
  }
  return sumTotal + product
}

// ****answer from solutions****