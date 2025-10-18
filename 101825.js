// ***Fizz Buzz Practice***

function fizzBuzz(num){
    let res= []
    for (let i=1; i<=num; i++){
       res.push (i%3===0 && i%5===0?'fizzbuzz':i%3===0?'fizz':i%5===0?'buzz':i)
    }
    console.log(res)  

}
fizzBuzz(15)
