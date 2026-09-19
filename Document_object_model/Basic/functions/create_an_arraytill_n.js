let n = prompt("Enter the value of n");
let arr = [];
for(let i=1; i<=n; i++){
    arr.push(i);
}

let sum = arr.reduce((prev, curr) => {
    return prev + curr;
});
console.log(sum);


let product = arr.reduce((prev, curr) => {
    return prev * curr;
});
console.log(product);
