    // CHALLENGE NAME-  practice problem

    // DESCRIPTION:

// write a for loop that loops through 1 to 15
// if number is odd, print 'odd'
// if num is even, print 'even'
// if num is divisible by 5, print 'five'

//     // ***STARTER CODE***

//  n/a   

//     //   ******TEST CASES*****
    
// n/a

    // ******MY ANSWER********

function oddEvenDiv5(n){
let res=[]
    for (let i=1; i<=n; i++){
//  res.push(i%5===0?'five':i%2===0?'even':'odd')
  res.push(i%5===0?`${i} five`:i%2===0?`${i} even`:`${i} odd`)
//  res.push(i)
//  console.log(i)
    }
console.log(res)

}
oddEvenDiv5(15)