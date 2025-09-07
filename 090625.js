  // CHALLENGE NAME-  Safen User Input Part I - htmlspecialchar

//   ****practice from yesterday's challenge*****

function htmlspecialchars(f) {
 
    let res=''
  for (let i=0;i<=f.length-1;i++){
   res+= f[i]==='<'?'&lt;':f[i]==='>'?'&gt;':f[i]==='"'?'&quot;':f[i]==='&'?'&amp;':f[i]
  }
    return res
  }