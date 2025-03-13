// STRING SHORTENING

const DICTIONARY= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ  0123456789" .split("");
console.log(DICTIONARY.length)

function reversedWord(str){
    var reversed=""

    for(let i= str.length-1; i>=0; i--){
        reversed+=str.charAt(i)
    }
    return reversed;

}

function encoding(num){
    var base= DICTIONARY.length
    var encoded=""

    if(num===0){
        return DICTIONARY[0]
    }

    while(num>0){
        encoded += DICTIONARY[(num % base)]
        num= Math.floor(num / base)
    }
    return reversedWord(encoded)
}

function decoding(id){
    
    var base= DICTIONARY.length 
    var decoded=0

    for(var index=0; index<id.split("").length;index++ ){
        decoded= decoded*base + DICTIONARY.indexOf(id.charAt(index))
    }
    return decoded
}

// console.log(encoding(453333))
// console.log(decoding("bURv"))
// console.log(reversedWord("sandesh"))



/*

Writing slice function from scratch

--> check for beginIndex and endIndex
--> if found begin index, set endIndex as a size of an array
--> if both begin and end index is specified return the part of the array and push it to an array

*/



function arraySlice(arr, firstIndex, lastIndex){
    if(!firstIndex && !lastIndex){
        return arr
    }

    var partArray=[]

    for(var i=firstIndex; i<lastIndex; i++){
       partArray.push(arr[i])
    }
    return partArray
}

// console.log(arraySlice([1,2,3,4],1,3))