//object
//key : value pair 
// const user = {
//     name : "Nikhil",
//     age : 18,
//     emailId : "nikhil@gmail.com",
//     amount : 60000,
// };//Create

// //CRUD operation : Create Read Update Delete operaiton it means that the user can perform these operation in any object
// console.log(user);//Read
// console.log(user[age]);

// user.age = 15;//Update
// user.aadhar = 4463;//Update

// delete user.amount;//delete
// console.log(user);

// const user = {
//     name : "Nikhil",
//     age : 18,
//     emailId : "nikhil@gmail.com",
//     amount : 60000,
// };

//it gives the the dta in an array form
// console.log(Object.keys(user));//for printing only keys    [ 'name', 'age', 'emailId', 'amount' ]
// console.log(Object.values(user));//for printing only values          [ 'Nikhil', 18, 'nikhil@gmail.com', 60000 ]
// console.log(Object.entries(user));//for printing both keys : values

// for (let keys of user){
//     console.log(keys,user[keys]);//we dont write user.keys because if we write user.keys then it will treat as keys is a key in user object 
// }

// const name = user.name;
// const age = user.age;
// console.log(name,age);

//Destructure okf an object
// const{name,age} = user;
// console.log(name,age);

// const temparr = Object.keys(user)
// for (let i of temparr){
//     console.log(i);
// }

// const user = {
//     name : "Alice",
//     age : 18,
//     greeting : function(){
//         //Here this refers to user objects 
//         console.log(`Hello my name is ${user.name} and my age is ${this.age}`)//we use this keyword instead of user
//     }
// };
// user.greeting();

//nested objects

const user = {
    name : "Nikhi",
    age : "18",
    emailId : "nikhil123@gmail.com",
    amount : 64854,
    address : {
        state : "Gujarat",
        city : "Surat",
    }
}

//if we copy the user to user2  then we know both refernce have same it means if we change into one it will be change on both
// but question arises what could we do so our user2 is independent to user 
// then we use spread operator
// const user2 = {...user};//shallow copy
// user2.amount = 65485;
// console.log(user2);//but it can works on one level it does not work on nested objects

// console.log(user);
// console.log(user.address.city);

//deep copy
const user2 = structuredClone(user);
console.log(user2);


// const car = {
//     make : "Honda",
//     mode1 : "Civic",
//     year : 2021,
// };

// for (let key in car){
//     console.log(`key : ${key} , value : ${car[key]}`);
// };

// for (const [key,value] of Object.entries(car)){
//     console.log(`${key} : ${value}`);
// }

// const original = { name: "Alice", age: 30 };

// // Using spread syntax (most common and modern)
// const copy = { ...original };

// copy.age = 31;

// console.log(original.age); // 30 (The original is safe!)
// console.log(copy.age);     // 31
