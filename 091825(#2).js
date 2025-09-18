// ****Fizz buzz practice****

// The task is to print numbers from 1 to a given number, replacing:

// Multiples of 3 with "Fizz",
// Multiples of 5 with "Buzz",
// Multiples of both 3 and 5 with "FizzBuzz".

// ******answer******

function fizzBuzzPractice(num) {
let res= [ ]
for (let i=1; i<=num; i++){
// res.push(i)
//  res.push( num[i]%3===0 && num[i]%5===0?`fizzbuzz`:num[i]%3===0?`fizz`:num[i]%5===0?`buzz`:num[i])
 res.push(i%3===0 && i%5===0?`fizzbuzz`:i%3===0?`fizz`:i%5===0?`buzz`:i)
}
console.log(res.join(', '))
}
fizzBuzzPractice(33)