    // CHALLENGE NAME-  Price of Mangoes

    // DESCRIPTION:

// Accountant time! For a given quantity and price (per mango), calculate 
// the total cost of the mangoes.
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

function mango(q, p){
let res=[]
for (let i=1;i<=q;i++){
   i%3!==0?res.push(p):res.push(0)
}
  return res.reduce((a,b)=>a+b)
}
// ***this is my answer***