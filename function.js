// Higher order function 

const radius=[1,2,4]

const area= function (radius){
    return Math.PI* radius *radius
}

const diameter= function(radius){
    return 2* radius
}

const calculate= function(radius, logic){
 const output=[]
 for(let i=0;i<radius.length;i++){
    output.push(logic(radius[i]))
 }
 return output
}

console.log(calculate(radius, diameter))


// usage of reduce function for finding max value in an array;

const numbers=[60,30,10,55,80,76]

const maxValue= numbers.reduce((max, currVal)=>{
    if(currVal>max){
        return currVal
    }
    return max
})

console.log(maxValue)


// using reduce to merge two or more objects in a single object

const obj1={a:1, b:2}
const obj2={c:3, d:4}
const obj3={e:5, f:6}

const mergedObj= [obj1, obj2, obj3].reduce((acc, cur)=>{
    return {...acc, ...cur}
})

console.log(mergedObj)

