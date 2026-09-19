// // let heading = document.querySelector("h2");
// // console.dir(heading.innerText);
// // heading.innerText = heading.innerText + " from apna college students";

// let box = document.querySelectorAll(".box");

// for(let i=0; i<box.length; i++){
//     console.log(box[i].innerText);
//     box[i].innerText = box[i].innerText + ` new value is ${i}`;
// }
// // box[0].innerText = box[0].innerText + " change";
// // box[1].innerText = box[1].innerText + " change is";
// // box[2].innerText = box[2].innerText + " change is done";
// let newbtn = document.createElement("button");
// newbtn.innerText = "Click me!";
// newbtn.style.color = "white";
// newbtn.style.backgroundColor = "red";
// let body = document.querySelector("body");
// body.prepend(newbtn);

// let para = document.querySelector("p");
// console.dir(para);
// let mode = document.querySelector("button");
// let body = document.querySelector("body");
// let currmode = "light";
// mode.addEventListener("click",() => {
//     if(currmode === "light"){
//         currmode = "dark";
//         body.style.backgroundColor = "black";
//         mode.style.borderColor = "white";
//         mode.style.backgroundColor = "black";
//         mode.style.color = "white";
//     }
//     else{
//         currmode = "light";
//         body.style.backgroundColor = "white";
//         mode.style.borderColor = "black";
//         mode.style.backgroundColor = "white";
//         mode.style.color = "black";
//     }
// });

let box = document.querySelectorAll(".box");
for(let i of box){
    i.addEventListener("mouseover",() => {
        if(i.innerText == "color violet"){
            i.style.backgroundColor = "violet";
            i.style.backgroundColor = "violet";
        }
        else if(i.innerText == "color indigo"){
            i.style.backgroundColor = "indigo";
        }
        else{
            i.style.backgroundColor = "brown"
        }
    });
    i.addEventListener("mouseout",() => {
        if(i.innerText == "color violet"){
            i.style.backgroundColor = "";
        }
        else if(i.innerText == "color indigo"){
            i.style.backgroundColor = "";
        }
        else{
            i.style.backgroundColor = "";
        }
    });
}