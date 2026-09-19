// // variable ko kaise banate hai
// let name="Nikhil";
// let age = 18;
// console.log(name , age);
// const acc = 123;
// acc = acc + 1;
// console.log(acc);

// data types

// primitive data types
// number , string , boolean , undefined , bigint , symbol
// number
let a = 10;
let b = 2.53;
console.log(a , b);

//  string
let c = "Strike is coming";
let d = 'Anjali';
console.log(c , d);
console.log(c + d);

// boolean
let login = true;
let f = false;
console.log(login , f);

// undefined <--jisme hum koi bhi value assign nahi karte hai tab uska data type undefined hota hai <<----aur hum lekin ye cheez const variable ke saath nahi kar sakte verna eror aajayrgi   hume usi time value assign karna padta hai const me
let user ;
console.log(user);

// bigint
let num = 654654654654654231n;
console.log(num);

// null <<---it is differ than undefined it have datatype but it doesnot have any vlaue
let weather = null;
console.log(weather);


// non primitive data types
// array , object , function

// array
let arr=[10,20,3.45,"Nikhil",true];
console.log(arr);

// object <<-- it is present in key value pair like dictionary in python
let obj = {name:"Nikhil",
    account:321654,
    age:1188
};
console.log(obj);

// function datatype
let s = function add(a,b){
    return a+b;
};
a=10;
b=20;
console.log(s(10,20));