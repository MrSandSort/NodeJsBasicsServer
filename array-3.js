const newArray = new Array("hey", "what", "why", "who", "when")
// console.log(newArray)
// console.log(typeof newArray)
// console.log(Array.isArray(newArray))
// console.log(Object.entries(newArray))

const slicedArray = newArray.slice(1, 4)
console.log(slicedArray)

const finding = newArray.find((item) => item.includes("h"))
console.log(finding)

const findAll = newArray.filter((items) => items.includes("wh"))
console.log(findAll)


// function addTwoNumbers(arr, weight){
//     for(var i=0; i<arr.length; i++){
//         for(var j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j]==weight)
//             {
//                 return [i,j]
//             }
//         }
//     }
//     return -1
// }

// const arr=[1,2,4,0]
// console.log(addTwoNumbers(arr, 5))


// function findNumbers(arr, weight){

//     var hashTable={}

//     for(var i=0; i<arr.length; i++){
//         var current= arr[i], diff= weight-current

//         if(hashTable[current]!=undefined){
//             return [i, hashTable[weight-current]]
//         }
//         else{
//             hashTable[diff]=i
//         }
//     }

//     return -1

// }

// const arr=[1,2,4,0]

// console.log(findNumbers(arr,6))

function findSumBetter(arr, weight) {
    var hashtable = {};
    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        var currentElement = arr[i],
            difference = weight - currentElement;

        // check the right one already exists
        if (hashtable[currentElement] != undefined) {
            return [i, hashtable[weight - currentElement]];
        } else {
            // store index
            hashtable[difference] = i;
        }
    }
    return -1
}

const arr=[1,2,4,0]
console.log(findSumBetter(arr,6))