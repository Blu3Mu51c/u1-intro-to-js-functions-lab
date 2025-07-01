//Exercise 1
const maxOfTwoNumbers = (num1,num2)=>{
if(num1>=num2){
    return num1;}
else {
    return num2;
}
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));





//Exercise 2
const isAdult = (age)=>{
    if (age>=18){
        return 'Adult';
    }
    else {return 'Minor'

    }
}
console.log('Exercise 2 Result:', isAdult(21));






//Exercise 3

const isCharAVowel = (char)=>{
    char = char[0]; //Takes first character
    char = char.toLowerCase(); //Removes case sensitivity
    if (char === 'a' || char === 'e'|| char === 'i'|| char === 'o'|| char === 'u'){
        return true;
    }
    else{
        return false;
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));







//Exercise 4
const generateEmail = (name,domain) =>{
    return `${name}@${domain}`;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));







//Exercise 5
const greetUser = (name,timeOfDay) =>{
    timeOfDay = timeOfDay.toLowerCase();
    if (timeOfDay == 'morning' || 'afternoon' || 'evening'){
    return `${name}, ${timeOfDay}`}
    else {
        console.log("INVALID TIME OF DAY")
        return null;
    }
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));






//Exercise 6
const maxOfThree = (x,y,z) => {
    if(x>=y && x>=z){
        return x;
    }
    else if (y>=x && y>=z){
        return y;
    }
    else {return z;}
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));






//Exercise 7
const calculateTip = (billAmount,tipPercentage) => {
    tipPercentage = Math.floor(tipPercentage);  //Removes Float value
    return billAmount/100 *tipPercentage;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));





//Exercise 8
const convertTemperature = (temperature,unit) => {
        unit = unit.toUpperCase(); //Removes case sensitivity
    if (unit === 'C'){
        temperature = (temperature * 9/5) + 32;
        return temperature;
    }
    else if (unit === 'F'){
        temperature = (temperature - 32) * 5/9 ;
        return temperature;
    }
    else {
        return console.log("INVALID UNIT")
    }

}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));





//Exercise 9
const basicCalculator = (num1, num2, operation) => {
    operation = operation.toLowerCase(); //Removes case sensitivity
    if (operation == 'add'){
        num1 = num1+num2;
        return num1;
    }
    else if (operation == 'subtract'){
        num1 = num1-num2;
        return num1;
    }
    else if (operation == 'multiply'){
        num1 = num1*num2;
        return num1;
    }
    else if (operation == 'divide'){
        num1 = num1/num2;
        return num1;

    }
    else {
        console.log("INVALID OPERATION")
                return null
    }

}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

//LEVEL UP CONTENT

//Exercise 10
function calculateGrade(score){
    if(score>=90){
        return `A`;
    }
    
   else if(score >= 80 && score <= 89){
        return `B`;
    }
    
   else if(score >= 70 && score <= 79){
        return `C`;
    }
    
   else if(score >= 60 && score <= 69){
        return `D`;
    }

    else {
        return `F`;
    }
    
}

console.log('Exercise 10 Result:', calculateGrade(85));

//Exercise 11
const createUsername = (firstName, lastName) => {
    let count = firstName.length+lastName.length;
    username=firstName.slice(0,3)+lastName.slice(0,3)+count;
    return username;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));


//Exercise 12

const numArgs = (...argument) => {   
        return argument.length;
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));