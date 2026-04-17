  // CHALLENGE NAME-  Do something "n.times" (Simplifying "for" loops)

    // DESCRIPTION:

// In case you got lost, here's precisely what you have to do: define a 
// method Number.prototype.times that accepts a function f as an argument 
// and executes it as many times as the integer it is called on (e.g. (100).times 
// would execute something 100 times). The iteration variable i should be supplied 
// to the anonymous function being executed in order to support looping through 
// array elements.

//     // ***STARTER CODE***

//  Number.prototype.times = function (f) {
//    // Go ahead and define me :)
// }   

//     //   ******TEST CASES*****
    
// describe("Number.prototype.times", () => {
//   it("should work exactly like a for loop and throw no errors", () => {
//     Test.expectNoError("Unexpected error was thrown", _ => {
//       (6).times(_ => {
//         console.log("Hello World");
//       });
//       (6).times(i => {
//         if (typeof(i) !== "number") throw "'i' was not properly supplied to the anonymous function ;)";
//         console.log(i);
//       });
//     });
//     console.log("<h3>Same as doing this:</h3>");
//     for (let i = 0; i < 6; i++) {
//       console.log("Hello World");
//     }
//     for (let i = 0; i < 6; i++) {
//       if (typeof(i) !== "number") throw "'i' was not properly supplied to the anonymous function ;)";
//       console.log(i);
//     }
//   });
// });

    // ******MY ANSWER********

Number.prototype.times = function (f) {
  for (let i = 0; i < this; ++i) {
    f(i);
  }
};