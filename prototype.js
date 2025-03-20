let genericCar={tyres:4}

let tesla={driver:"AI"}

// usage of __proto__

Object.setPrototypeOf(tesla, genericCar)

console.log("Tesla", Object.getPrototypeOf(tesla))


function Animal(name){
    this.name= name    
}

Animal.prototype.sound= function (){
    return `${this.name} produces a barking sound`
}

let dog= new Animal("Dog")
console.log(dog.sound())