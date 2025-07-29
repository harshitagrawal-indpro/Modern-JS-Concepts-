// explaining an dworking with inheritence using classes

class Animal{
    constructor(name,avgspan){
        this.name = name;
        this.avgspan = avgspan;
    }

    getSpan(){
        return `This animal ${this.name} has an average span of ${this.avgspan}`
    }
}

class Dog extends Animal {
    constructor(name, avgspan, breed) {
        super(name, avgspan); // calling the parent class constructor
        this.breed= breed;
    }
    bark(){
        console.log(`${this.name} is barking!`);
    }
}

let dog1 = new Dog("Buddy", "12 years", "Golden Retriever");
console.log(dog1.getSpan()); // This animal Buddy has an average span of 12