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

// Day One - Real World trial
function Payment(card_type, number, exp_date, cvv, name){
    this.card_type = card_type;
    this.number = number;
    this.exp_date;
    this.cvv = cvv;
    this.name = name
}

let payment1 = new Payment('MasterCard', 1234, 12/24, 123, 'Steve Harvey');
let payment2 = new Payment('Visa', 4567, 12/25, 123, 'Dr Strange');
let payment3 = new Payment('Amex', 1282, 6/24, 123, 'Tony Stark');
let payment4 = new Payment('Paypal', 182, 12/23, 123, 'Lil Miss Queens');

console.log(payment1);
console.log(payment2);
console.log(payment3);
console.log(payment4);

function Loans(name, product, amount, savings){
    this.name = name;
    this.product = product;
    this.amount= amount
    this.savings = savings;
}

let loan = new Loans('Mwihaki', 'Express', 100000, 20000);
let loan1 = new Loans('Njoroge', 'Pesa', 100000, 20000);
let loan2 = new Loans('Winner', 'Advantage', 3839092, 83000);
let loan3 = new Loans('Steve', 'W Capital', 3893900, 23900);

console.log(loan);
console.log(loan1);
console.log(loan2);
console.log(loan3);

function loanContent(){
    var myloan = document.getElementById('loan');
    myloan.innerHTML = [loan.name, loan.product, loan.amount, loan.savings]
}

window.onload = loanContent;


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
