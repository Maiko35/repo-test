//Components are mostly used in front end development to create reusuable UI elements.

let person1 = {
    name: "Asiimwe",
    age: 20,
}
let person2 = {
    name: "Asiimwe",
    age: 20,
}

//Constructor function, starts with capital letters
function Person(name, age) {
    this.name = name
    this.age = age
}
let person3 = new Person("Micheal", 30);
let person4 = new Person("Christine", 20);
let person5 = new Person("Matthew", 30);
let person6 = new Person("Pablo", 32);
let person7 = new Person("Pluto", 40);
console.log(person1, person2, person3, person4, person5, person6, person7);

//Class in Javascript is a blueprint for creating objects.
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let person8 = new Person("Peter", 30);
let person9 = new Person("Ronaldo", 30);
let person10 = new Person("Jane", 30);
let person11 = new Person("John", 30);
let person12 = new Person("Joshua", 30);

console.log(person8, person9, person10, person11, person12);


let rectangle1 = {
    length: 5,
    width: 3,
}

let rectangle2 = {
    length: 10,
    width: 4,
}


function Rectangles(length, width) {
    this.length = length
    this.width = width

}

let rectangle3 = new Rectangles(10, 5);
let rectangle4 = new Rectangles(10, 5);

let rectangle5 = new Rectangles(10, 5);

let rectangle6 = new Rectangles(10, 5);

console.log(rectangle1, rectangle2, rectangle3, rectangle4, rectangle5, rectangle6)



//Function to create a rectangle and find its area
class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
    calculateArea() {
        return this.length * this.width

    }
}

let rectangle9 = new Rectangle(16, 8);
let rectangle10 = new Rectangle(15, 5);
console.log(rectangle9.calculateArea())


//Inheritance
class Cse {
    constructor(name) {
        this.name = name;

    }
    writeCode(){
        console.log(`${this.name} writes code.`);

    }
   
}


class Js extends Cse {
    constructor(name){
        super(name);
    }
    writeCode(){
        console.log(`${this.name} writes javascript code.`);

    }
   
}

let jsEngineer = new Js("Asiimwe");

console.log(jsEngineer);
