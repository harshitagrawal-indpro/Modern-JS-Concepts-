class Player {
    constructor(fname, lname , age ){
        this.fname= fname;
        this.lname= lname;
        this.age = age; 
    }
    getFullName(){
        return this.fname + " "+ this.lname;
    }
}

let player1 = new Player("John", "Doe", 25);
console.log(player1.getFullName()); // John Doe