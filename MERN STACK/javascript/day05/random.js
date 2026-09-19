// let num = Math.floor(Math.random()*(9000)+1000);
// console.log(num);
function random(n){
    let num = n;
    while(num >= 1){
        num = num * Math.random();
    }
    let otp = num * 10000;
    if(otp < 1000 || otp >9999){
        random(num);    
    }else{
        console.log(Math.floor(otp));
        return 0;
    }
}
let num = 8160263087;
random(num);

// lekin otp agar banana hai to kabhi bhi random function ka use mat karo kyuki usem bhot risk hota hia jaise ki yaha pe kiya 
// iski jagah hm device ka time lelenge mili seconde me jo ki change hota rehta hai lekin isme bhi thoda sa risk hota hai kyuki user algorithi samajh ke time pe otp generate kar sakta hai aur time bhi sabke liye same hota hai 
// 3 rd it is too important bcoz we take the input by the crypto libraries just like from our mouse pointer s our ram storage
