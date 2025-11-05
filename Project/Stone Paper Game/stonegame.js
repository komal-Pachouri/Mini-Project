let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       playgame(userchoice);
    });
})

const playgame=(userchoice)=>{
    // console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);

    if(userchoice===compchoice){
        //draw game
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
          userwin = compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //rock  scissor
           userwin = compchoice === "scissors" ? false : true;
        }else{
            //rock paper
           userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
   const randidx= Math.floor(Math.random()*3);
   return options[randidx];
}
const drawgame=()=>{
    msg.innerText="Game Draw! Play Again";
     msg.style.backgroundColor="#564D80";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
      msg.innerText=`You win! ${userchoice} beats your ${compchoice}`;
      msg.style.backgroundColor="green";
        
    }else{
        compscore++;
        compscorepara.innerText=compscore;
       msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
       msg.style.backgroundColor="red";
        
    }
}