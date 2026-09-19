let percentage = prompt("enter the percentage of a sudent");
if(percentage <=100 && percentage >= 90){
    console.log("Grade is A");
}else if(percentage <90 && percentage >= 80){
    console.log("Grade is B");
}else if(percentage <80 && percentage >= 70){
    console.log("Grade is C");
}else if(percentage <70 && percentage >= 60){
    console.log("Grade is D");
}else if(percentage <60 && percentage >= 50){
    console.log("Grade is E");
}else {
    console.log("the student is fail");
}