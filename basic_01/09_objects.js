//singleton
//object.create


//object literals

const mySym = Symbol("key1")

const JsUser = {
    "fullName": "Rohan More", //can't be accessed with dot method
    name: "Rohan",
    [mySym]: "myKey2",
    location: "Jaipur",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}

//console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.email = "rohan@gmail.com";
//Object.freeze(JsUser)

JsUser.email = "rohan@chatgpt.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
