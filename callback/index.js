function suma(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2,2, suma));


// ejemplo con tiempos. 

function date(callback) {
   console.log(new Date); // aquí accedemos a la fecha actual. 
   setTimeout(function() {
    let date = new Date;
    callback(date) 
   }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);