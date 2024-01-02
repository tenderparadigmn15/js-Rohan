"use strict"; // treat all JS code as newer version

//alert("hello") //we are using nodejs,  not browser

// console.log(3 + 3)
//code readability should be high
//console.log("Hitesh") 
 //
let name = "Rohan" //string
let age = 20 //number
let isLoggedIn = false //boolean
let state = null 

//number ==> 2 to power 53
//bigint
// string => ""
//boolean => true/false
//null => standalone value
//undefined =>

//********************summary******************** */

//Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 33343455544455455n //bigInt



//Referrence (Non-Primitive)

//Array, Objects, functions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name:"Rohan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myFunction);