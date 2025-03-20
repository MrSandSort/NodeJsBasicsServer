// Hashing or hashmaps

/* 

Count word or words frequency in string

*/


function wordFrequency(str){
var hashmaps= new Map()

for(var char of str){
    char= char.toLowerCase();
    hashmaps.set(char, (hashmaps.get(char)||0)+1)
}

return hashmaps

}

console.log(wordFrequency('Sandesh'))


/* 

Two-sum array

*/


function twoSumArray(arr, target){
    var hashmap= new Map();

    for(var i=0; i<arr.length; i++){
        var complement= target-arr[i]
        if(hashmap.has(complement)){
            return [hashmap.get(complement), i]
        }
        hashmap.set(arr[i], i) 
    }

    return []

}

console.log(twoSumArray([3,5,6],9))



/* 

Recursion and backtracking

*/



function fibonacciSeries(n){
    if (n===0){
        return 0
    }
    else if (n===1){
        return 1
    }
    return fibonacciSeries(n-1) + fibonacciSeries(n-2)
}



// finding the subsets of an array using backtracking recursively

function findingSubsets(arr, index=0, subsets=[], result=[]){

    if(index === arr.length){
        result.push([...subsets])
        return
    }
    
    // work on the left branch by adding on elements in a subsets 
    subsets.push(arr[index])
    findingSubsets(arr,index+1, subsets, result)

    // work on the right branch to pop and remove the elements and store

    subsets.pop()
    findingSubsets(arr, index+1, subsets, result)

   return result 

}


function N_Queens(n){
    let board= new Array(n).fill().map(()=>new Array(n).fill("."))
    let results=[]

    function isSafe(board, row, col, n){

      // check for the columns above rows
        
      for(let i=0; i<row; i++){
        if(board[i][col] === "Q") return false
      }

      // check for the upper left diagonal

      for(let i=row, j=col; i>=0 && j>=0; i--,j--){
        if(board[i][j] === "Q") return false
      }

      // check for the upper right diagonal

      for(let i=row, j=col; i>=0 && j<n; i--,j++){
        if(board[i][j] === "Q") return false
      }
      return true
    }

    function backtrack(row){
        if(row===n){
            results.push(board.map((r)=>r.join("")))
            return;
        }

        for (let col=0; col<n; col++){
            if(isSafe(board, row, col, n)){
                board[row][col]="Q";
                backtrack(row+1)
                board[row][col]="."
            }
        }

    }

    backtrack(0)
    return results
  
}

console.log(N_Queens(4))

