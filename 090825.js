  // CHALLENGE NAME-  Double Char

    // DESCRIPTION:

    // Given a string, you have to return a string in which each 
    // character (case-sensitive) is repeated once.

    // Examples (Input -> Output):
    // * "String"      -> "SSttrriinngg"
    // * "Hello World" -> "HHeelllloo  WWoorrlldd"
    // * "1234!_ "     -> "11223344!!__  "

    // // ***STARTER CODE***

    // function doubleChar(str) {
    //     // Your code here
    //   }
          

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("doubleChar", function() {
    //   it("works for some examples", function() {
    //     Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    //     Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    //     Test.assertEquals(doubleChar("1337"), "11333377");
    //     Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    //     Test.assertEquals(doubleChar("123456"), "112233445566");
    //     Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
    //   });
    // });

    // ******MY ANSWER********

    function doubleChar(s) {
        let res=''
        for (let i=0;i<=s.length-1;i++){
          res+=s[i]+s[i]
        }
          return res
        //   return [s].map((a)=>a*a)
          // Your code here
        }