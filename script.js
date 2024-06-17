let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let userChoiceDisplay=document.querySelector(".user-choice");
let compChoiceDisplay=document.querySelector(".com-choice");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let user_Score=document.querySelector("#user-score");
let comp_Score=document.querySelector("#comp-score");
user_choice_dis=(userChoice)=>{
    userChoiceDisplay.innerHTML=`<img src='${userChoice}.jpg' >`;
    userChoiceDisplay.classList.remove("hide");
    userChoiceDisplay.innerHTML+=`<p> You Picked : ${userChoice}</p>`;
}
comp_choice_dis=(compChoice)=>{
    compChoiceDisplay.innerHTML=`<img src='${compChoice}.jpg' >`;
    compChoiceDisplay.classList.remove("hide");
    compChoiceDisplay.innerHTML+=`<p> Computer   Picked : ${compChoice}</p>`;
}
const genCompChoice=function(){
    const options=['rock','paper','scissors'];
    let randIdx=Math.floor(Math.random()*3);
    let compChoice=options[randIdx];
    console.log(randIdx);
    return compChoice;
    //rock paper scissor
}

const drawGame=function(){
    console.log("The Game Was Draw")
    msg.innerText="It is a Draw!"
}

const showWinner=(userWin)=>{
    if(userWin){
        console.log("You Win!");
        msg.innerText="You Win!"
        userScore++;
        user_Score.innerText=`${userScore}`;
    }
    else{
        console.log("Computer Wins")
        msg.innerText="Computer Wins"
        compScore++;
        comp_Score.innerText=`${compScore}`;
    }

}

const playGame=function(userChoice){
    console.log("user Choice is: ",userChoice);

    user_choice_dis(userChoice);
        //Generate Computer Choice
    let compChoice=genCompChoice();
    console.log("Comp Choice is: ",compChoice);

    comp_choice_dis(compChoice);
    //Check for Winner
    if(userChoice===compChoice){
        //Draw 
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else{//userchoice is scissor
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})