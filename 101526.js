    // CHALLENGE NAME-  Fuel Calculator: Total Cost

    // DESCRIPTION:

// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

// Good Luck!

// Note
// 1 Dollar = 100 Cents

//     // ***STARTER CODE***

//  function fuelPrice(litres, pricePerLitre) {
//   // your code here
//   // Good luck with it!
// }   

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(fuelPrice(5, 1.23), 5.65);
// Test.assertEquals(fuelPrice(8, 2.5), 18.40);
// Test.assertEquals(fuelPrice(5, 5.6), 27.50);
//   });
// });

    // ******MY ANSWER********

function fuelPrice(l, p) {
 
return +((l>=10?(p-.25)*l:l>=8?(p-.20)*l:l>=6?(p-.15)*l:l>=4?(p-.10)*l:l>=2?(p-.05)*l:l*p).toFixed(2))  
  // your code here
  // Good luck with it!
}