  // CHALLENGE NAME-  fizz buzz practice

    // DESCRIPTION:

// create a function that takes in a number. console log all values from 1 to that 
// number, but if the number is divisible b 3 log "fizz" instead of that number, 
// if the number is divisible by 5 log "buzz" instead of the number, and if the 
// number is divisible by 3 and 5 log "fizzbuzz" instead of the number.

    // ***STARTER CODE***

// function fizzBuzz(num) {

// }    

    //   ******TEST CASES*****
    


    // ******MY ANSWER********

function fizzBuzz(num) {
let res=[]
for (let i=1; i<=num;i++){
res.push(i%3==0 && i%5==0?'fizzbuzz':i%3==0?'fizz':i%5==0?'buzz':i)
}
    console.log(res)

}    
fizzBuzz(30)