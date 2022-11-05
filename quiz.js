import PromptSync from "prompt-sync";
const prompt = PromptSync();
let answer1 = prompt("What is the Capital of Pakistan? ");

answer1 = answer1.toLowerCase();

let number = 0;

if(answer1==="islamabad"){
    console.log("Your entered correct answer.");
    number= number+5;
}else{
    console.log("Your entered Wrong answer");
}

let answer2 = prompt("What is the biggest province of Pakistan? ");
answer2 = answer2.toLowerCase();
if(answer2==="lahore"){
    console.log("Your entered correct answer.");
    number= number+5;
}else{
    console.log("Your entered Wrong answer");
}

let answer3 = prompt("What is the nationcal game of Pakistan? ");
answer3 = answer3.toLowerCase();
if(answer3==="hockey"){
    console.log("Your entered correct answer.");
    number= number+5;
}else{
    console.log("Your entered Wrong answer");
}


console.log("Your total Score is :",number);