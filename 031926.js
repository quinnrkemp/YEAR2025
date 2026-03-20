  // CHALLENGE NAME- Training JS #5: Basic data types--Object 

    // DESCRIPTION:

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."

//     // ***STARTER CODE***

//  function animal(obj){
//   return '';
// }   

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Example tests", () => {
//   it("white dog with 4 legs", () => {
//     assert.strictEqual(animal({ name: "dog", legs: 4, color: "white" }), "This white dog has 4 legs.");
//   });

//   it("red cock with 2 legs", () => {
//     assert.strictEqual(animal({ name: "cock", legs: 2, color: "red" }), "This red cock has 2 legs.");
//   });

//   it("gray rabbit with 4 legs", () => {
//     assert.strictEqual(animal({ name: "rabbit", legs: 4, color: "gray" }), "This gray rabbit has 4 legs.");
//   });
// });

    // ******MY ANSWER********

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}