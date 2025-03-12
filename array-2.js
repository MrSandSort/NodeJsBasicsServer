// const arrayEmpty= new Array("2")
// console.log(arrayEmpty.length)
// console.log(arrayEmpty)
// console.log(typeof arrayEmpty)
// console.log(arrayEmpty[0])

// array entries 
// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

const arr1=["a","b","c"]

const itr1= arr1.entries()
console.log(itr1.next().value)

// filter method

const words=["spray","elite","exuberant","destruction"]

const result= words.filter(word=>word.length>5)

console.log(result)


const arr2=["sandesh","sundar","habibi","ayush","allahuu"]

const list= arr2.join("-") // join method
const rmv= arr2.shift() //shift method
arr2.pop()
// const addt= arr2.unshift("ruint")

// console.log(list)
// console.log(rmv)
console.log(arr2)
