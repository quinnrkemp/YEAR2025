// ****practice work from 031825 commit**** 

function first(arr, n=1) {
    if (n==0){
      return []
    }
      else if (n==undefined) {
         n=1
      }
      return arr.slice(0,n)
      // return arr;
    }
    
    // ***alternate answer***
    
    // function first(arr, n=1) {
    // if (n==0){
    //   return []
    // }
    //   return arr.slice(0,n)
    //   // return arr;
    // }