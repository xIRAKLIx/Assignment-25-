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



  let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );

let date2 = new Date("2017-01-26");
console.log(date2);

let date3 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log( date3 ); 

let today = new Date();

today.setHours(0);
console.log(today); 

today.setHours(0, 0, 0, 0);
console.log(today); 

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end1 = new Date(); // end measuring time

console.log( `The loop took ${end1 - start} ms` );


let start1 = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

console.log( `The loop took ${end - start} ms` );
