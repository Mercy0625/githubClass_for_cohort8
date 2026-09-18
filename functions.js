function greeting (){
    console.log("Hello, World!");
}
greeting();

function welcome(name){
    console.log(`Welcome to class Miss ${name}`);
}
welcome("Mercy");

function add (){
    let x = 6;
    let y = 8;
    return x + y; 
}
console.log(add());

function addition (x, y){
    return x+y;
}
console.log(addition(9, 10));

function ageCheck(age){
    if(age<= 18){
        return "Please GET OUT... You are too youg to be here";
    }else{
        return "Buy me a drink... You are old enough to be here";
    }
}
 let estherAge = ageCheck(30)
 console.log(estherAge);

 function lotteryCheck(num){
    if (num ===15){
        return 'Congratulations! You are MINE';
    }else{
        return 'Sorry! You are for the streets';
    }
 }

let damiNumber = lotteryCheck(15);
console.log(damiNumber);

let score;

function gradingSystem(score){
    if (score >=70){
        return "A";
    }else if (score >=50 && score <70){
        return "B";
    }else{
        return "C";
    }
}
let myScore = gradingSystem(100);
console.log(myScore);

function scoreChecker(score){
    if (score ===100){
        return "WOW";
    }else{
        return "OH";
    }
}
let myScore2 = scoreChecker(100);
console.log(myScore2);

function weightCheck(weight){
    if (weight >= 95){
        return "You are overweight, please lose weight";
    }else{
        return "You are fit, keep it up";
    }
}
let myWeight = weightCheck(95);
console.log(myWeight);

function weightChecker(weight){
    if (weight <= 65){
        return "You are underweight, please gain weight";
    }else{
        return "You are fit, keep it up";
    }
}

let myWeight2 = weightChecker(65);
console.log(myWeight2);

console.log (score + 10);

const minus = (num) => {
   let calculated =  num - 50
    if (calculated >= 75){
    return "You are a genius";
   }else{
    return "You are not a genius";
   }
}
let result = minus(75);
console.log(result);