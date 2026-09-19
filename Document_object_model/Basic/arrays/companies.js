let companies = ["bloomberg" , "Microsoft" , "Uber" , "google" , "IBM" , "Netflix"];
companies.shift();
console.log(companies);
companies.splice(1 , 1 , "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);