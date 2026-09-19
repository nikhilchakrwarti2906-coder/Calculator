//In this lecture we are going to learn about how the javascript runs the code what is BTS
//Question can asked in interview related to this topic it is very important lecture

//let we have a code 
var a = 10;
var b = 20;

const addNumber = (a,b) => {
    let sum = a+b;
    return sum;
}

let sumResult1 = addNumber(a,b);
let sumResult2 = addNumber(4,5);

console.log(sumResult1 , sumResult2);

//LETS SEE HOW THE CODE RUN IN JAVASCRIPT IT IS SLIGHTLY DIFFERENT THAN OTHER CODING LANGUAGES
//1.Whenever we run the code it generates the execution context [EXECUTION CONTEXT-->  if we run the code we could run in two phase]
//  // PHASE -1 --> MEMORY ALLOCATION
//  // PHASE - 2 --> CODE EXECUTIION 

//PHASE 1 
//it generates a memory for all variable it does not give any value to the variable so it stores undefined
//a=undefined
//b=undefined
//addNumber = {function  code}// in function it puts whole code in the fumction variable
//sumResult1 = undefined
//sumResult2 = undefined
//phase 1 is completed 

//Phase 2 -- Execution Phase
//at this phase it given the values to the all undefied variavle
// a=10;
// b=20;
//then sumResult1 and the function called and the same both phases are generated in function  also 
//it is samething that will happen in sumResult2 it also genereates both parts


//let
//but but but if we use let insetad of var  and then if we console.log that varable vefore passign the vaue then it gives the error here
//because at memory allocation time it stores uninitialised (temporal dead zone --> it allocates the memory but it is uninitialised)

