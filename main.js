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
function Vehicle(model, yom, mileage) {
    this.model = model;
    this.yom = yom;
    this.mileage = mileage;
}

let vehicle1 = new Vehicle('Mercedes', 1998, 10000);
let vehicle2 = new Vehicle('Totota', 2005, 5000);
let vehicle3 = new Vehicle('Mazda', 2019, 3000)

console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3)

function House(location, bedrooms, rent){
    this.location = location;
    this.bedrooms = bedrooms;
    this.rent = rent;
}

let house1 = new House('Rongai', 3, 30,000);
let house2 = new House('Kileleshwa', 'Bedsitter', 30000);
let house3 = new House('Kitengela', 5, 25000)

console.log(house1);
console.log(house2);
console.log(house3)
