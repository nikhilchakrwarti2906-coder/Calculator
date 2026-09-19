let arr = [250,645,300,900,50];
let index=0;
for(let i of arr){
    let new_price=i*0.9;
    console.log(`the price bfore apply discount ${i}`);
    arr[index]=new_price;
    console.log(`the value of after apply discount of 10% ${arr[index]}`);
    i++;
}
