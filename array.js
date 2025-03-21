
// usage of pop function


let teaOrders= ["chai","iced tea","matcha","earl grey"]
const lastOrder= teaOrders.pop()
console.log(lastOrder)


// soft copy of an array

let popularTeas=["black tea","green tea", "milk tea"]
let softCopyTeas= popularTeas
popularTeas.pop()

console.log(softCopyTeas)
console.log(popularTeas)


// hard copy of an array

let topCities=["Berlin","Singapore","Germany","New York"]
let hardCopyCities= [...topCities]
topCities.pop() 

console.log(topCities)
console.log(hardCopyCities)


// merging two arrays

let europeanCities=["Paris","Rome"]
let asianCities=["Tokyo", "Bangkok"]

let worldCities= europeanCities.concat(asianCities)

console.log(worldCities)


// finding the items in array

let cityBucketList=["Kyoto","London","Capetown","Vancouver"]

let isLondonInList= cityBucketList.includes("London")

console.log(isLondonInList)



const squareNum=(arr)=>(arr.map((n)=>n**2))
console.log(squareNum([1,2,4]))

const sumPositiveNumbers=(arr)=>(arr.filter(num=> num>0).reduce((sum,num)=>sum+num,0))
console.log(sumPositiveNumbers([1,-1,2,-2]))