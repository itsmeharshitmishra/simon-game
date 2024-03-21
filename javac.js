let checker=[];
let user=[];
let btns  =["n1","n2","n3","n4"];
let start=0;
let level=0;
let high=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(start==0)
    {
        console.log("game is Started");
        start=1;
        levelup();
    }
});


function flashup(btn){
    // console.log(btn);
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userflashup(btn){
    // console.log(btn);
    btn.classList.add("upflash");
    setTimeout(function(){
        btn.classList.remove("upflash");
    },250);
}

function checkers(idx)
{
        if(user[idx]===checker[idx])
        {
            if(user.length==checker.length)
            {
            setTimeout(levelup,1000);
            }
        }
    else
    {
        if(high<level)
        {
            high=level;
            document.querySelector("h3").innerHTML=`Highest score is ${high}.`;
        }
            console.log("Game OVer");
            document.body.classList.add("red");
            setTimeout(function(){
                document.body.classList.remove("red");
            },200);
            h2.innerHTML=`Game Over! Your score was ${level}.<br>press any key to restart`;

            start=0;
            checker=[];
            level=0;
            user=[];

    }
}
function levelup()
{
    user=[];
    level++;
    h2.innerText=`Level ${level}`;

    let b=Math.floor(Math.random()*4);
    
    let randColor=btns[b];
    checker.push(randColor);
    //  console.log(checker);
    let ranbtn=document.querySelector(`.${randColor}`);
    // console.log(ranbtn);
    flashup(ranbtn);
}

let allbtn=document.querySelectorAll(".main div");
for(let btn2 of allbtn)
{
    btn2.addEventListener("click",function(event)
    {
        userflashup(this); 
        user.push(this.id);
        console.log(user)
        console.log(checker);
        checkers(user.length-1);
    });
}