longestCommonSubsequence=(m,n)=>{
    var L = []
    for(let i=0;i<=m.length;i++){
        let result=[]
        for(let j=0;j<=n.length;j++){
            result.push(0);

        }
        L.append(result);
    }
    console.log(L)
    for (let i=0; i<=m.length; i++) 
    { 
      for (let j=0; j<=m.length; j++) 
      { 
        if (i == 0 || j == 0) 
            L[i][j] = 0; 
        else if (X[i-1] == Y[j-1]) 
            L[i][j] = L[i-1][j-1] + 1; 
        else
            L[i][j] = max(L[i-1][j], L[i][j-1]); 
      } 
    } 
  return L[m][n];
}
var max=(x,y)=>x>y?x:y;

print(longestCommonSubsequence("ronak","ron"))