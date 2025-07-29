// Traditionally functiions in javascript is made different 
const Car = new Function("brand , color", `
    this.brand = brand;
    this.color = color;
    this.start= function(){
        console.log("The car is started");
    }
    `);

// Creating an instance of the car
let car1 = new Car("BMW", "Black");
console.log(car1);
console.log(Car.prototype);
console.log(Object.getPrototypeOf(car1));