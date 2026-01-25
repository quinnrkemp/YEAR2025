  // CHALLENGE NAME-  Price of Mangoes

    // DESCRIPTION:

// Accountant time! For a given quantity and price (per mango), 
// calculate the total cost of the mangoes.
// But! Every third mango is free!

//     // ***STARTER CODE***

// function mango(quantity, price){

// }    

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("Should pass sample tests", () => {
//     assert.strictEqual(mango(3, 3), 6)
//     assert.strictEqual(mango(9, 5), 30)
//   });
// });

    // ******MY ANSWER********

function mango(quantity, price){
let totalPrice = 0;
  for(let i = 0; i<=quantity; i++){
    if (i% 3!==0) {
      totalPrice += price
      }
  }
  return totalPrice
}

// ***not my answer***