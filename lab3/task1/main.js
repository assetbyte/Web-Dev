alert('Hello');
alert('World');

alert("Hello");
[1, 2].forEach(alert);

let message;
message = 'Hello!';

alert(message); 

let user = 'John';
let age = 25;

let n = 123;
n = 12.345;

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;