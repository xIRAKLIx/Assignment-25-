let double = n => n * 2;
console.log( double(3) ); 

let sayHi = () => console.log("Hello!");

sayHi();

let age = ("What is your age?", 18);

let welcome = (age < 18) ?
  () => console.log('Hello!') :
  () => console.log("Greetings!");

welcome();

let sum = (a, b) => {  
    let result = a + b;
    return result; 
  };
  
  console.log( sum(1, 2) ); // 3

  console.log('Hello'); console.log('World');

  let age1 = ('Your age?', 18);

switch (age1) {
  case 18:
    console.log("Won't work"); 
    break;

  case "18":
    console.log("This works!");
    break;

  default:
    console.log("Any value not equal to one above");
}

function sum1(a, b) {
    let result = a + b;
  
    return result;
  }


let sum2 = (a, b) => a + b;

let sum3 = (a, b) => {
  
  return a + b;
}

let sayHi1 = () => console.log("Hello");

let double1 = n => n * 2;

if (
    id === 123 &&
    moonPhase === 'Waning Gibbous' &&
    zodiacSign === 'Libra'
  ) {
    letTheSorceryBegin();
  }