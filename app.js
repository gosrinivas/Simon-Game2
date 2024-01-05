let gameseq=[];
let userseq=[];
let start=false;
let color=["pink","blue","green","red"];
let level=0;
let h3=document.querySelector("h3");
let highScore=[0];
document.addEventListener("keypress", function(){
    if(start==false){
        start=true;

        levelUp();
    }
});
function levelUp(){
    userseq=[];
    level++;
    h3.innerHTML=`level ${level}`
    let random=Math.floor(Math.random()*3);
    let randcolor=color[random];
    let btn=document.querySelector(`.${randcolor}`)
    btnflash(btn);
    gameseq.push(randcolor);
    console.log(gameseq);

    console.log("Game Started")

   btnflash(btn);
}
function btncheck(inx){
    
    

    if(gameseq[inx]===userseq[inx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game Over!! <br> Your Score was:<b>${level-1}<b> 
        <br> press any key to start`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200)
        if(level>highScore[0]){
            highScore[0]=level-1;
            let h4=document.querySelector("h4");
            h4.innerText=`Highscore is : ${highScore[0]} `;
        }
        
        reset();
    }
}

function btnpress(){
    let btn=this;
    
    userflash(btn);

    let usercolor=btn.getAttribute("id");
    

    userseq.push(usercolor);
    console.log("user seq:", userseq)
    console.log("Usercolor",usercolor.length)

    btncheck(userseq.length-1);
}

function btnflash(btn){
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash")
    
    },250)
    

}

function userflash(btn){
    btn.classList.add("userflash");
    
    setTimeout(function(){
        btn.classList.remove("userflash")
    
    },250)
    

}




let allbtns=document.querySelectorAll(".btn")

for(btn of allbtns){
    btn.addEventListener("click",btnpress)

}

function reset(){
     gameseq=[];
     userseq=[];
    start=false;
    level=0;
}