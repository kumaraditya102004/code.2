let prompt = require("prompt-sync")();
let age = Number(prompt("Enter your age :"))

if(age>=19){
    console.log("valid age");
} else{
    console.log("invalid age");
}



let marks =Number(prompt("Enter your marks"))

if (marks>85&& marks <=95)
    console.log("excellent");
else if ( marks>80 && marks<=85)
    console.log("very good");
else if (marks>70&& marks<=80)
    console.log("good");
else console.log("fair");


