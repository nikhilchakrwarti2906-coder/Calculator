alert("Tic Tac Toe game");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner = document.querySelector("h2");
let turno = true;
reset.addEventListener("click",() => {

});
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turno == true){
            box.innerText = "O";
            turno = false;
        }else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
const disabled = () => {
    boxes.forEach((box) => {
        box.disabled= true;
    });
}
const checkwinner = () =>{
    for(let i of winpattern){
        let pos1value = boxes[i[0]].innerText;
        let pos2value = boxes[i[1]].innerText;
        let pos3value = boxes[i[2]].innerText;
        if(pos1value != "" && pos2value != "" && pos3value != "" ){
            if(pos1value == pos2value && pos2value == pos3value){
                alert(`winner is ${pos1value}`);
                console.log("you won the game");
                showwinner();
                disabled();
            }
        }
    }
}
const showwinner = () => {
    winner.classList.remove("hide");
}
reset.addEventListener("click",() =>{
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    winner.classList.add("hide");
    winner.innerText = "";
    turno = false;
})