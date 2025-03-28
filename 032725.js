  // CHALLENGE NAME-  Training JS #32: methods of Math---round() ceil() and floor()

    // DESCRIPTION:

    // Task
    // Coding in function roundIt. function accept 1 parameter n. 
    // It's a number with a decimal point. Please use different methods
    //  based on the location of the decimal point, turn the number into
    //   an integer.
    
    // If the decimal point is on the left side of the number (that is, 
    //     the count of digits on the left of the decimal point is less 
    //     than that on the right), Using ceil() method.
    
    // roundIt(3.45) should return 4
    // If the decimal point is on the right side of the number (that is, 
    //     the count of digits on the left of the decimal point is more 
    //     than that on the right), Using floor() method.
    
    // roundIt(34.5) should return 34
    // If the decimal point is on the middle of the number (that is, the 
    //     count of digits on the left of the decimal point is equals that 
    //     on the right), Using round() method.
    
    // roundIt(34.56) should return 35

    // // ***STARTER CODE***

    // function roundIt(n){
    //   //coding here...
          
    //     }   

    // //   ******TEST CASES*****
    
    // describe("Tests", () => {
    //     it("test", () => {
    //       Test.assertSimilar(roundIt(3.45) , 4);
    //       Test.assertSimilar(roundIt(34.5) , 34);
    //       Test.assertSimilar(roundIt(34.56) , 35);
    //     });
    //   });

    // ******MY ANSWER********

function roundIt(n){
    let v1= n.toString().split('.')
    return v1[0].length<v1[1].length?Math.ceil(n):v1[0].length>v1[1].length?Math.floor(n):Math.round(n)
      //coding here...
      
    }
    
    // ***this is my answer***