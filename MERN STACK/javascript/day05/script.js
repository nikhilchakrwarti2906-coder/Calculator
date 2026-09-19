// Number
// let a=10;
// let b=345.6871;
// console.log(b.toFixed(1)); //but it gives the answer in string
// // .toPrecision  -> means kitni numbers lega ye aapke liye   -->> it also returns the value in string form only     
// console.log(b.toPrecision(4));
// console.log(b.toExponential(2));
// console.log(b.toLocaleString());


// // we have one more method to create the number using object 
// // console.log(a);
// // console.log(typeof(a));
// let a = new Number(20) ;// -> yaha par jo new word likha hai vahi usko change kar raha hai object me agar hata de to vo number hi rahega 
// let b = new Number(20);
// console.log(a==b);//->this returns false even the value ar e same bcoz voth are oblject and object ar eequal when both pointing the same adress value 
// // it meanss if we write a =b then only a==b works
// let c = new Number(20) ;
// let d = c;
// console.log(a==b);  

//primitive me data copy hota hai aur non priimitve me reference copy hota hai 

console.log(Math.abs(-4));
console.log(Math.log10);
console.log(Math.random(1,10));
