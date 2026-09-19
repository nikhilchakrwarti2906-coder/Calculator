// //Array

// // let marks1 = 100;
// // let marks2 = 50;
// // let marks3 = 70;
// // let marks4 = 80;

// // let marks = [100,50,70,80,90];


// // console.log(marks);
// // console.log(marks.length);

// //array is a hetrogeneous datatype
let arr = [100,30,"Nikhil",true];  //we can store multiple types of data in array which is make different from any other languages

// // console.log(arr);
// // console.log(typeof arr);  // --->  it is not an array it is an object  <---
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);

// //Mutabiltity ->  Array is a mutable data type 
// arr[1] = 90;
// console.log(arr);

// // add at end -->push
// arr.push(50);
// arr.push("strike is coming");
// console.log(arr);

// //delete at end ->pop 
// arr.pop();
// console.log(arr);

// // adding at start 
// arr.unshift(90);
// arr.unshift(50);
// console.log(arr);

// //Deleting at start
// arr.shift();
// console.log(arr);


// iteration in arr
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//for of loop is different from for loop ,  for of loop is directly access the array  {and for loop access the indexing of an array}
// for(let num of arr){
//     console.log(num);
// }
//agar mai kisi arary ko print karaunga to mai for of loop chalaunga aur vahi kisi objects ke liye for in loop chalaunga
for(let i in arr){
    console.log(i);
}


// we know that array is an object and object is copied by reference does not by value when we change any array it affects all  
// let arr = [10,30,50,90,11];
// let arr2 = arr;
// arr2.push(45);
// console.log(arr);


// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(1,3)
// console.log(arr2);
// //splice --> splice(from index  ,  how many values)
// const arr3 = arr.splice(1,3,"Nikhil" , 19);       //it trims the part of an aray  remove out even it is const variable
// console.log(arr3);   //does not adda nay vlaue in array 3 but rmoves from an arr
// console.log(arr);

// DIFFERENCE BETWEEN SLICE AND SPLICE 

// const arr = [10,30,50,90,11];
// const arr2 = ["Nikhil",11,true];
// const arr4 = [90,4,false];

// for concatenate the two array
// arr3 = arr.concat(arr2,arr4);    // return new array cant change in original 
// console.log(arr3);
// const arr3 = [arr,arr2,arr4];//[ [ 10, 30, 50, 90, 11 ], [ 'Nikhil', 11, true ], [ 90, 4, false ] ]


//spread operator   v.v.important
// const arr3 = [...arr,...arr2,...arr4];  
// [
//   10,    30,
//   50,    90,
//   11,    'Nikhil',
//   11,    true,
//   90,    4,
//   false
// ]//the core difference between the spread operator and simple
// console.log(arr3);

//by str.split we can change the string to an array
// by the help of .tostring we can change the array to string
// const names = ["Alice" , "Bob" , "Charlie" , "Nikhil" , "Rohit" , "Mohit"];
// console.log(names.toString());    //return new string    separate with ,
// console.log(names.join("-"));    //return new string   separated with any type we want;

// console.log(names.indexOf("Bob"));
// names.sort();
// names.reverse();
// console.log(names); //does not return new array changes the original array //[ 'Alice', 'Bob', 'Charlie', 'Mohit', 'Nikhil', 'Rohit' ]


// const a = ["101","90","80","32","31"];
// a.sort();//[ '101', '31', '32', '80', '90' ]
// const b = [101,90,80,32,31];
// b.sort();
// console.log(b);
// console.log(a);//ye bas uske 1st wala ko dekhega pehle 101 me 1 hai to sabse pehle 101 aaryag fir 31 ...