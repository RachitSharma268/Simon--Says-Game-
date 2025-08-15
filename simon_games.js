let gameSqns = [];
let userSqns = [];

let color = ["div_conta1","div_2","div_conta2","div_4"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
} 

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
} 

function levelUp() {
    userSqns=[];
    level++;
    h2.innerText = `level ${level}`;

    let rndmIndx = Math.floor(Math.random() * 4);
    let rndmColor = color[rndmIndx];
    let rndmBttn = document.querySelector(`.${rndmColor}`);
    gameSqns.push(rndmColor);
    console.log(gameSqns);
    btnFlash(rndmBttn);
}

function checkAns(idx){
 if(userSqns[idx] === gameSqns[idx]){
    if(userSqns.length == gameSqns.length){
        setTimeout(levelUp,1000);
    }
 }else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start.`
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
 }
}

function btnPress(){
    let btn = this ;
    userFlash(btn);
   userColor = btn.getAttribute("id"); 

    userSqns.push(userColor);
    checkAns(userSqns.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btns of allBtns){
    btns.addEventListener("click",btnPress);
}

function reset(){
    started=false ;
    gameSqns=[];
    userSqns=[];
    level=0;
}
