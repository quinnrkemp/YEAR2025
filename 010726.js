  // CHALLENGE NAME-  Filter out the geese

    // DESCRIPTION:

// Write a function that takes a list of strings as an argument and returns 
// a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

//     // ***STARTER CODE***

// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
//   // return an array containing all of the strings in the input array except those that match strings in geese
// };    

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Basic tests",function(){
//   it("Mixed list",function(){
//     Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
//   });
//   it("No geese",function(){
//     Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
//   });
//   it("All geese",function(){
//     Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
//   });
// });

    // ******MY ANSWER********

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};