  // CHALLENGE NAME-  Remove First and Last Character Part Two

    // DESCRIPTION:

    // You are given a string containing a sequence of character 
    // sequences separated by commas.

    // Write a function which returns a new string containing the 
    // same character sequences except the first and the last ones 
    // but this time separated by spaces.
    
    // If the input string is empty or the removal of the first 
    // and last items would cause the resulting string to be empty, 
    // return an empty value (represented as a generic value NULL 
    //     in the examples below).
    
    // Examples

    // // ***STARTER CODE***

    // function array(string) {

    //     // TODO
    //   }    

    // //   ******TEST CASES*****
    
    // const {assert} = require('chai');

    // describe('Sample Tests', function() {
    //   function test(string, expected) {
    //     it(`string='${string}'`, function() {
    //       assert.strictEqual(array(string), expected);
    //     });
    //   }
    
    //   test('', null);
    //   test('1', null);
    //   test('A1,B2', null);
    //   test('1,2,3', '2');
    //   test('1,2,3,4', '2 3');
    //   test('A1,B2,C3,D4,E5', 'B2 C3 D4');
    //   test('A,1,23,456,78,9,Z', '1 23 456 78 9');
    // });

    // ******MY ANSWER********

    function array(s) {

        // ******  answer #1 ******
          return s.split(',').slice(1,-1).join(' ')||null
          
        //   ****ANSWER #2 ******
        
        //   let res=s.split(',').slice(1,-1).join(' ')
        //   return res===""?null:res
        
        //   ******ANSWER #2a (more concise)*****
          
          //   return s.split(',').slice(1,-1).join(' ')===""?null:s.split(',').slice(1,-1).join(' ')
        
          
        // ****these are my answers****  
        }