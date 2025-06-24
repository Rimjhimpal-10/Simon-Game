let gameseq=[];
let userseq=[];

let btns=["y","r","g","b"];
let started=false;
let level=0;

let h=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }

});

function flash(btn) {
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function userflash(btn) {
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}
function levelup(){
    level++;
    userseq=[];

    
    h.innerText=`level ${level}`;
    //random choose
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);

    flash(randbtn);

}

function check (idx){
    //let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
            
        }
        
    }
    else{
        gameseq=[];
        h.innerHTML=`game over!Your Score was <b>${level}</b> <br>press any key to start`;
        started=false;
        level=0;
    }
}
function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    check(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(bt of allbtns){
    bt.addEventListener("click",btnpress);//agar inme se koi bhi press ho
}