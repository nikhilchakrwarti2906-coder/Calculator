// function

// function greeting(){
//     console.log("Strike is coming on 18 th October");
// };
// greeting();

// function addNumber(num1,num2,num3=0,num4=0){  //it stores the default value 0 if we pass the value on an argument then only it will take the value if not then it will take the value default value 0
//     let sum = num1+num2+num3;
//     console.log(sum);
// }

//rest operator looks like spread operator but it is different;
// function addNumber(...num){//it creates an array of a number in argument presents
//     let sum = 0;
//     for(let n of num){
//         sum = sum + n;
//     }
//     console.log(sum);
// }
// addNumber(3,4);
// addNumber(3,4,5);
// addNumber(3,4,5,7);
// addNumber(3,4,5,75,8,69,65,6,8,9,25,8,9,54);

//difference between spread operator and rest operator
// let arr = [5,9,321,984,654,54,87,51,64];
//destructureing of an array
// const [a , second,...num] = arr;  // we learn on previous lecture we can store the value of an array using this
// console.log(a,second,num); //the num gives an answer in array form 

//SIMPLE HOW THE REST OPERATOR WORKS -->  IT STORES THE REMAINING VALUE IN ARRAY FORM .
//SIMPLE HOW THE SPREAD OPERATOR WORKS -->  IT USED TO JOIN THE TWO ARRAYS OR MAKE A NEW ARRAY USING THIS.
// hume is array ko kholna hai do array ko mila ke ek naya array banana hai
// let arr2 = [4,1,94,4];
// const ans = [...arr , ...arr2];
// console.log(ans);
// REST --> WORKS IN SINGLE ARRAY OR SINGLE SET OF NUMBER
// SPREAD --> WORKS IN MORE THAN ONE SET OF AN NUMBER
// const [...num] = arr;
// console.log(num);

// REST OPERATOR --> WORKS IN SINGLE ARRAY OR SINGLE SET OF NUMBER TO TAKE ALL REMANIG VALUES
// SPREAD  OPERATOR--> WORKS IN MORE THAN ONE SET OF NUMBER TO DO ANY OPERATION IN THEM OR STORING IT

//There are two methods for making a function 
//function : expression
// let a = function(num1 , num2){
//     return num1+num2;
// }
// console.log(a(3,4));

//IS THERE ANY DIFFERENCE BETWEEN BOTH THE FUNCTION CALLING
// let a = function(num1 , num2){
//     return num1+num2;
// }
// console.log(a(3,4));//WE CAN,T PUT THIS LINE BEFORE THE FUNCTION IT WILL GIVES ERROR

//THIS IS THE MAIN DIFFERENCE BETWEEN THESE TWO FUNCTION

// function a (num1 , num2){
//     return num1+num2;
// }
// console.log(a(3,4));//we can put this line before the function it doesn't give any errror


//The most important function type is an --> Arrow function


//ARROW FUNCTION  --> ki uske andar koi function keyword present nahi hota hai uski jagah = () =>{} ye present hota hai
// const addNumber = (num1,num2) =>{
//     return num1+num2;
// }
// const addNumber = (num1,num2) => num1+num2; //it still work if we want only to returning a number then we can use it one liner
// console.log(addNumber(3,5));
// let arr = [56,21,64,712,32,68,1,69];
// arr.sort((a,b) => a-b);
// console.log(arr);

// const square = num => num*num  //if we have only one parameter then we don't need to write a bracket side of num
// console.log(square(6.5));
 
//What happened if we want to return an object from an function

// 1st method: Normal one
// const greeting = () =>{
//     let user = {
//         name : "Nikhil",
//         age : 18,
//     };
//     return user;
// }


// 2nd method
// const greeting = () =>{
//     return {
//         name : "Nikhil",
//         age : 18,
//     };
// }


// 3rd method
// const greeting = () =>({name : "Nikhil",age : 18,})

//they all are giving same answer
// console.log(greeting());


//IIFE : Immidiately Invoked Function:

//this fuction calls itself so we use paranthesis 
// (function greeting(){//()()1st paranthesis point that this is a  function 2nd one calling it 
//     console.log("Be Ready");
// })();

//IIFE Immidiately called function for aarrow function

// (() =>{
//     console.log("Hello , How are you ?");
// })();

//CALLBACK FUNCTION: a function will act as an argument and passed its value to another function


function greet (){
    console.log("Hello ji, Kaise ho?");
    meet();
}

function meet(){
    console.log("i am going to meet someone.");
}

// meet();
greet();