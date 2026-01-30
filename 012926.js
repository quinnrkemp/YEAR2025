  // CHALLENGE NAME-  Reversing Words in a String

    // DESCRIPTION:

// You need to write a function that reverses the words in a 
// given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need 
// to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

//     // ***STARTER CODE***

//  def reverse(st):
//     # Your Code Here
//     return st   

//     //   ******TEST CASES*****
    
// import codewars_test as test
// from solution import reverse

// @test.describe("Fixed Tests")
// def fixed_tests():
//     @test.it('Basic Test Cases')
//     def basic_test_cases():
//         test.assert_equals(reverse('Hello World'), 'World Hello')
//         test.assert_equals(reverse('Hi There.'), 'There. Hi')

    // ******MY ANSWER********

function reverse(string){
 return string.split(" ").reverse().join(' ')
  //your code here
}