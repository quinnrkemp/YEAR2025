  // CHALLENGE NAME-  Find Maximum and Minimum Values of a List


    // DESCRIPTION:

    // Your task is to make two functions ( max and min, or maximum and minimum, etc., 
    //     depending on the language ) that receive a list of integers as input, and 
    //     return the largest and lowest number in that list, respectively. Each function 
    //     returns one number.

    // Examples (Input -> Output)
    // * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
    // * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
    // * [42, 54, 65, 87, 0]             -> min = 0, max = 87
    // * [5]                             -> min = 5, max = 5
    // Notes
    // You may consider that there will not be any empty arrays/vectors.

    // // ***STARTER CODE***

    // var min = function(list){
    
    //     return list[0];
    // }
    
    // var max = function(list){
        
    //     return list[0];
    // }

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Test", function(){
    //   it("Examples", function(){
    //     Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    //     Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    //     Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    //     Test.assertEquals(max([5]), 5);
    //   });
    // });

    // ******MY ANSWER********

    var min = function(list){
    
        return Math.min(...list)
    }
    
    var max = function(list){
        
        return Math.max(...list);
    }