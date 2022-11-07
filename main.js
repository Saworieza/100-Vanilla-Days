// Day One - Constructors
function User(name, age,race) {
    this.name = name;
    this.age = age;
    this.race = race;
}

let User1 = new User('Steve', 32, 'African');
let User2 = new User('Stella', 33, 'European');
let User3 = new User('George', 324, 'Asian');

console.log(User1)
console.log(User1)
console.log(User3)

// Day One - Constructors



// factory function
function createCirle(radius){
    return {
        radius,
        draw(){
            console.log(this.draw)
        }
    };
}

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

const circle = new Circle(1);
console.log(circle)

// Looping through arrays

function Theory(){
    let a = 3;
    let b = 5;

    if ((a === b) && (b = a + 2)) {
        console.log('case 1')
    } else if ((a === b) || (b = a + 2)) {
        console.log('case 2')
    } else {
        console.log('case 3')
    }
}

console.log(Theory())
// document.write(Theory())
