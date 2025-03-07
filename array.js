
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