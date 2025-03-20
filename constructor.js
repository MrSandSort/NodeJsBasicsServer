function Person(name, age){
    this.name= name
    this.age= age
}

let myDetails= new Person("Sandesh", 21)

// console.log(myDetails)

function Tea(type){
    this.type= type
    this.describe= function (){
        return `${this.type} is best tea which i usually drink`
    }
}

let blackTea= new Tea("blackTea")
// console.log(blackTea.describe())


class Vehicle{
    constructor(name, model){
        this.name= name
        this.model=model
    }

    start(){
        return `${this.name} is started`
    }
}
 
// Inheritance 

class Car extends Vehicle {
    drive(){
        return `${this.name} is an inherited part`
    }
}

let tt= new Vehicle("Toyota","Corolla")

console.log(tt.start()) 


// Encapsulation

class BankAcc{
    #balance= 0;

    constructor(name){
        this.name= name
    }

    getBalance(){
        return this.#balance
    }

}

let Bank= new BankAcc("Nabil")
console.log(Bank.getBalance())


// Abstraction

// Polymorphism

// Static Methods 