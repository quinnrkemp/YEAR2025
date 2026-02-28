  // CHALLENGE NAME-  Training JS #34: methods of Math---pow() sqrt() and cbrt()


    // DESCRIPTION:

// Coding in function cutCube. function accept 2 parameter: volume and n. volume is the 
// volume of a cube. If we cut the cube into n block. please determine whether the length 
// of the cube is an integer. return true or false.

//     // ***STARTER CODE***

//  function cutCube(volume,n){
  
//   //coding here...
  
// }   

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Basic Tests", function(){ 
// it("It should works for basic tests.", function(){

//     Test.assertEquals(cutCube(27,27)    , true);
//     Test.assertEquals(cutCube(512,8)    , true);
//     Test.assertEquals(cutCube(512,64)   , true);
//     Test.assertEquals(cutCube(50000,50) , false);
//     Test.assertEquals(cutCube(432,16)   , false);
//     Test.assertEquals(cutCube(256,8)    , false);
//     Test.assertEquals(cutCube(27,3)     , false);
//     Test.assertEquals(cutCube(123,456)  , false);
//     Test.assertEquals(cutCube(27,8)    , false);
    
// })})

    // ******MY ANSWER********

function cutCube(volume,n){
return (Math.cbrt(volume / n)) % 1 ===0 && (Math.cbrt(n)) % 1 ===0 ? true : false
    //coding here...
    
  }

