// ***practice problem***


// task

// create a function that takes in a Number. console log every number from 1 
// to that number while skipping multiples of 5.

//   ***answer***

function multiFives(n){
   let res=''
    for (let i=1; i<=n; i++) {
      res+=  i%5!=0?console.log(i):i
    }
   return res
}
multiFives(10)

// the answer above is sloppy, but it is correct