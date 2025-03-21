  // CHALLENGE NAME-  Sum without highest and lowest number

    // DESCRIPTION:

    // Sum all the numbers of a given array ( cq. list ), except the 
    // highest and the lowest element ( by value, not by index! ).

    // The highest or lowest element respectively is a single element at 
    // each edge, even if there are more than one with the same value.
    
    // Mind the input validation.
    
    // Example
    // { 6, 2, 1, 8, 10 } => 16
    // { 1, 1, 11, 2, 3 } => 6
    // Input validation
    // If an empty value ( null, None, Nothing, nil etc. ) is given instead 
    // of an array, or the given array is an empty list or a list with only 
    // 1 element, return 0.

    // // ***STARTER CODE***

    // function sumArray(arr) {

    // }

    // //   ******TEST CASES*****
    
    // const {assert} = require("chai");

    // it("example tests", ()=>{
    //   assert.strictEqual( sumArray(null)                     , 0 );
    //   assert.strictEqual( sumArray([ ])                      , 0 );
    //   assert.strictEqual( sumArray([ 3 ])                    , 0 );
    //   assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
    //   assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
    //   assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
    //   assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
    //   assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
    // });

    // ******MY ANSWER********

    function sumArray(arr) {
        // return typeof [5,3]
            let max= Math.max(arr)
          let min= Math.min(arr)
          let sum=arr.reduce((a,b)=>a+b,0)
        //   return arr.length>0?sum-(max+min):0
          return arr==undefined ||arr==null || arr==[] || arr.length<2?0:sum
        }

        // ***this answer is not correct***
