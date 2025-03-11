// create an array of user adding their favourite shoes and enter value using do while loop unless user exits using stop for prompt

//Run this in browser

// let collections=[]
// let shoes;

// do{
//     shoes = prompt(`Enter your favourite shoes:("enter stop to exit")`)
//     if (shoes!== stop){

//         collections.push(shoes)
//     }

// }
// while(shoes!==stop);


// usage of for loop

// let arr1=[2,4,6]
// let multiplied=[]

// for(let i=0; i<arr1.length; i++){
//     multiplied.push(arr1[i]*2)
// }


// let cities=['Paris','Kathmandu','Pokhara','Tokyo']
// let citiesList=[]

// for(let i=0; i<cities.length; i++){
//  citiesList.push(cities[i])
// }

// console.log(citiesList)



// usage of map function

// let arr=[2,4,6]
// let multipliedbyNumber= arr.map((val,index)=>{return val*2})
// console.log(multipliedbyNumber)



// we have an array of foods ---> if found briyani, dont include the biryani and other items after that...add this in new array

// const foods=['chowmein','momo','sandwich','biryani','chiya','coffee' ]
// const selectedFoods=[]

// for (let i=0; i<foods.length; i++){
//     if(foods[i]==='biryani'){
//         break;
//     }
//     selectedFoods.push(foods[i])
// }

// console.log(selectedFoods)


// usage of forEach loop

// let cities=['Paris','London','Kathmandu','Delhi','Islamabad']
// let skippedArr=[]

// cities.forEach(function(city){
//     if(city==='London'){
//        return;
//     }
//     skippedArr.push(city)
// })

// console.log(skippedArr)


let arr1=[2,5,7,9]
let doubledValues=[]

for(let i=0; i < arr1.length;i++){
    if(arr1[i]===7){
        continue;
    }
    doubledValues.push(arr1[i]*2)
}

console.log(doubledValues)