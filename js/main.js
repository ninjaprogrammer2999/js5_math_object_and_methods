// Math methods
console.log(Math.PI);
// our first method is trunc method***
console.log(Math.trunc(Math.PI));
console.log(Math.trunc(2.5));
/* Math.trunc method just returns the integer part
truncs the decimal part of the number */
//************************************************ */
// round method 
console.log(Math.round(5.2));
//************************************************* */
// ceil method 
console.log(Math.ceil(5.2));
console.log(Math.ceil(2.1));
//************************************************* */
// floor method 
console.log(Math.floor(5.8));
console.log(Math.floor(2.9));
//************************************************** */
// pow method (power)
console.log(Math.pow(2,2));
console.log(Math.pow(10,2));
console.log(Math.pow(10,-2));
/*************************************************** */
// min method(minimum value)
console.log(Math.min(2,3,9,6));
console.log(Math.min(9,5,3,0.5));
/**************************************************** */
// max method (maximum)
console.log(Math.max(100,5,8,200));
console.log(Math.max(0.5,0.6,0.9,0.1));
/**************************************************** */
// random method 
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
/* this Math.random method generates random numbers
between 0 to 1*/
/* in order to generate random number from 0 to 1 
we need to write different code */
console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(Math.random()*10);
//still there is decimal values but whole number
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
/* if you don't add 1 at the end you won't get 
numbers from 1 to 10 */
/* why floor method? why not ceil method? */
console.log(Math.ceil(Math.random()*10)+1);
// this is 1 to 11
console.log(Math.ceil(Math.random()*10));
// this is 1 to 10 using ceil method












