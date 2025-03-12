const newArray= new Array("hey","what", "why","who","when")
// console.log(newArray)
// console.log(typeof newArray)
// console.log(Array.isArray(newArray))
// console.log(Object.entries(newArray))

const slicedArray= newArray.slice(1,4)
console.log(slicedArray)

const finding= newArray.find((item)=> item.includes("h"))
console.log(finding)

const findAll= newArray.filter((items)=>items.includes("wh"))
console.log(findAll)