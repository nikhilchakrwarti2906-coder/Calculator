let arr = [250,645,300,900,50];
for(let i in arr){
    let new_price=arr[i]*0.9;
    arr[i]=new_price;
    console.log(`the value of after apply discount of 10% ${arr[i]}`);
}
