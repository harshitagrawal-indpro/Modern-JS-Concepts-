// to add a method or property to an object 

// creating the constructor function 

const Car= function(brand,color){
    this.brand = brand;
    this.color = color;
    this.start = function() {
        console.log("The car is started");
    }   
}
// add an engine status 
Car.prototype.engineStatus = function() {
    console.log("The" + this.brand + " engine is running smoothly.");
};


// Creating an instance of the car
let car1 = new Car("BMW", "Black");

// calling the method
console.log(car1.engineStatus());

