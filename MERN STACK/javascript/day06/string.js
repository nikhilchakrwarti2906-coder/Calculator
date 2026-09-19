// string ->now we learn about string in depth
// const str1="Nikhil";
// const str2 = 'Nikhil Chakrwarti';
// // const str3 = `Strike 
// // is coming 
// // soon`; // this is the most modern way to create a string
// let day = 18
// const str3 = `strike is coming on ${day} `;
// console.log(str3);


// const str = `Hello Coder army`;
// // console.log(str.length);
// const a = str.toUpperCase();
// console.log(a);
// const user = `Rohit , Mohit , Rohan , Sohan , Anjali`;
// console.log(user.split(","));

// const time = new Date();
// // console.log(time);
// console.log(time.toString());   // I dont know but .tostring is used for change a number into string
// console.log(time.getFullYear());    
// console.log(time.getMonth());    
// console.log(time.getHours());    
// console.log(time.getSeconds());    


// year , month , date , hours , minute , seconds , milisecond
// const now =new Date(2025,10,21,9,7,58,321);   //lekin ye answer dega 5:30  kam krke
// console.log(now);

const now = Date.now();
console.log(now);     //it gives the answer in mili second till the the date started
const date = new Date(now);
console.log(date); 
