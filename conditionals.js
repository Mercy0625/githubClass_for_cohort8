let age = 15;
if (age >= 18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}

let gender = "Trans";
if(gender === "Female"){
    console.log("You are a female, use the lady's restroom");
}else if(gender === "Trans"){
    console.log("Use the trans' room");
}else if(gender === "Non-binary"){
    console.log("Use the non-binary room");
}else{
    console.log("You are a male, use the men's room");
}

for (let i = 0; i<10; i++){
    console.log(i);
}

let arrOfNames = ["Mercy", "Faith", "Hope", "Love", "Joy"];
for (let names = 0; names < arrOfNames.length; names++){
    console.log("TECHCRUSH" + arrOfNames[names]);
}

for (let x =0; x<13; x++){
    console.log(x*2);
}

for (let u = 150; u>=3; u--){
    console.log(u/3);
}

let loginAttempts = 0;
while(loginAttempts < 3){
    console.log(`attempt number ${loginAttempts}`);
    loginAttempts++;
}

let scores =[20,12, 25, 15];
for(let newScores = 0; newScores < scores.length; newScores++){
    console.log(20 + scores[newScores]);
}