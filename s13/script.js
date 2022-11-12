console.log("connected")
// JS Operators
// symbols used to manipulate values/operators
// used to perform specific mathematical and logical computation in operands

//1. Assignment Operators
// represents the equal symbol (=)

let a = 14;
a = 18;

let b = a
console.log (b);
// in this sample, using let can reassign the values of a variable.

//2. Arithmetic Operators - mathematical operations on a numerical values/operands and returns a single numerical value.

console.log(20+30); //50 Primitive Data Type

console.log("20"+"30"); //String
//String Concatenation or just the plain concatenation
//it links or combines 2 strings together

//Subtraction/difference (-)
console.log (20-10)//10 - this was declared as a number

console.log("50"-"10");//40
//Type Coercion - automatic/implicit conversion of values from one data type to another.

let val1 = 50;
let val2 = '30';
let diff = val1-val2;
console.log(diff)

console.log("twenty" - "ten");
//NaN - Not a Number

//Division (/)
console.log(50/5);//Number under primitive data type
console.log("50"/"5");//coercion
console.log("fifty"/"five");
//NaN -Not a Number

//Modulus Division (modulo - %)
console.log(100%3);//1 - remainder

//Increment (++) and Decrement (--)

let c = 30;

/*

    if operator comes first, it performs arithmetic operation before displaying the result.

*/ 

console.log(++c); //31 - add
console.log(c); //31 - the existing value has been added previously so that is why the new value displayed as 31.

/*
    if the operand comes first before the operator, it displays the value of the operand before performing arithmetic operation

*/


console.log (--c);//30
console.log(c);//30

console.log(c++);//30
console.log(c);//31 - current value of c

console.log (c--)//31
console.log(c);//30


//Log the results in the console
//Perform arithmetic Operation on two numbers.
//1
console.log(250/25)

//Perform arithmetic Operation on two variables with numerical values.
//2
let d = 47;
let f = 88;
console.log (d-f);

//Multiply a number to the difference of two numbers
	//PEMDAS RULE
//3
console.log(2*(8-5));

//Compound Assignment Operator
//shortcut for arithmetic and assignment operation.
//performs mathematical operation then assigning the result back to the variable.
/*
Long method:
Let j = 15;
console.log(j+3);//18
console.log(j); //15
*/

//Addition Assignment Operator (+=)
let i = 15;
console.log(i += 3);//18- adds the number in the initial value
console.log(i);//18

//Substraction Assignment Operators (-=)
console.log(i -= 10);//8

//Multiplication Assignment Operator (*=)
console.log(i *= 15); //120
//i = 8
// 8*15 = 120

//Division Assignment Operator (/=)
console.log(i /= 2); //60
// i = 120 based on above
// 120/2 = 60

//Modulus Assignment Operator (%=)
console.log(i %= 8);//remainder is 4

//Companion Operators
//compares two operands and returns a logical value (tru or false)

/*
    < = less than
    > = greater than

*/ 

//Equality Operator (==) a.k.a "Loose Equality"
//compares the same value regardless of data type because of coersion.

console.log("Jan" == "Jan")//true

console.log(true==true);//true
console.log(false==true);//false
console.log(true==false);//false
console.log(false==false);//true -same value
console.log(null==undefined);//true

console.log("20"==20);// true -because of coercion

/*
    Binary Numbers
    1 = true
    0 = false
*/ 

//implicit coercion
console.log(true==1);//true
console.log(true==2);//false
console.log(false==0);//true
console.log(false==1);//false

console.log(4.00==4);//true