  // CHALLENGE NAME-  Printing Array elements with Comma delimiters

    // DESCRIPTION:

    // Input: Array of elements

    // ["h","o","l","a"]
    
    // Output: String with comma delimited elements of the array in th same order.
    
    // "h,o,l,a"
    
    // Note: if this seems too simple for you try the next level
    
    // Note2: the input data can be: boolean array, array of objects, array of 
    // string arrays, array of number arrays... 😕

    // // ***STARTER CODE***

    // function printArray(array){
    //      //show me the code!
    //    }   

    // //   ******TEST CASES*****
    
    // const { assert, config } = require("chai");
    // config.truncateThreshold = 0;
    
    // describe("printArray", function() {
    //   it("Sample tests", function() {
    //     tester([ 2, 4, 5, 2 ], "2,4,5,2");
    //     tester([ 2.0, 4.2, 5.1 ,2.2 ], "2,4.2,5.1,2.2");
    //     tester([ "2", "4", "5", "2" ], "2,4,5,2");
    //     tester([ [ "hello", "this", "is", "an", "array!" ], [ 1, 2, 3, 4, 5 ] ], "hello,this,is,an,array!,1,2,3,4,5");
    //     tester([ { firstName: "Ruslan", lastName: "López" }, { firstName: "John", lastName: "Doe" } ], '[object Object],[object Object]');
    //     tester([ true, false ], 'true,false');
    //   });
      
    //   function tester(input, expected) {
    //     assert.strictEqual(printArray(input), expected, `Failed for input: ${JSON.stringify(input, null, 2)}\n`);
    //   }
    // });

    // ******MY ANSWER********

    function printArray(a){
        return a.join(',')
         //show me the code!
       }