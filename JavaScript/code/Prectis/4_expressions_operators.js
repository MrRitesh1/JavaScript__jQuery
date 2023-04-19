// Expressions and Operators
/* 
~~ OPERATORS --- !

Arithmetic Operators   +  -   * %   /
Increment and Decrement Operators   ++ , --
Assignment Operators  = , += , -= ,*= , %= , /= 
Relational Operators == ,<= , >= ,!< , < , >
Logical Operators && , || , !
Bitwise Operators & , | , ^ , ~ , << , >> 

Operator	Description	                                Example
+	Addition	                                        10+20 = 30
-	Subtraction                                      	20-10 = 10
*	Multiplication                                   	10*20 = 200
/	Division	                                        20/10 = 2
%	Modulus (Remainder)                             	20%10 = 0
++	Increment	                                        var a=10; a++; Now a = 11
--	Decrement	                                        var a=10; a--; Now a = 9
==	Is equal to	                                        10==20 = false
===	Identical (equal and of same type)               	10==20 = false
!=	Not equal to	                                    10!=20 = true
!==	Not Identical	                                    20!==20 = false
>	Greater than	                                    20>10 = true
>=	Greater than or equal to                        	20>=10 = true
<	Less than	                                        20<10 = false
<=	Less than or equal to	                            20<=10 = false
&	Bitwise AND                                         (10==20 & 20==33) = false
|	Bitwise OR                                       	(10==20 | 20==33) = false
^	Bitwise XOR                                        	(10==20 ^ 20==33) = false
~	Bitwise NOT                                      	(~10) = -10
<<	Bitwise Left Shift	                                (10<<2) = 40
>>	Bitwise Right Shift                             	(10>>2) = 2
>>>	Bitwise Right Shift with Zero	                    (10>>>2) = 2
&&	Logical AND	                                        (10==20 && 20==33) = false
||	Logical OR	                                        (10==20 || 20==33) = false
!	Logical Not                                     	!(10==20) = true
=	Assign	                                            10+10 = 20
+=	Add and assign                                   	var a=10; a+=20; Now a = 30
-=	Subtract and assign                              	var a=20; a-=10; Now a = 10
*=	Multiply and assign                              	var a=10; a*=20; Now a = 200
/=	Divide and assign                                 	var a=10; a/=2; Now a = 5
%=	Modulus and assign                               	var a=10; a%=2; Now a = 0

*/

console.log("Operators Arithmetic -------------------------");
let a = 10;
let b = 4;
console.log("A + B = ", a + b);
console.log("A - B = ", a - b);
console.log("A * B = ", a * b);
console.log("A / B = ", a / b);
console.log("A % B = ", a % b);
console.log("---------------------------------------------");
let c = 5;
// c-- & c++ prent and updat EX:- c = 5 (c-- = 5)
console.log(c, " =  C-- =", c--);
console.log(c, " =  C++ =", c++);
// --c & ++c updat and prent EX:- c = 5 (--c = 4)
console.log(c, " =  --C =", --c);
console.log(c, " =  ++C =", ++c);

console.log("Operators Assigment -------------------------");

let d = 20;

d += 5;
console.log("Ans + = ", d);
d -= 5;
console.log("Ans - = ", d);
d *= 5;
console.log("Ans * = ", d);
d /= 5;
console.log("Ans / = ", d);

console.log("Operators Comparison -------------------------");


let com1 = 5;
let com2 = 7;
console.log("5 == 7 is ", com1 == com2);
console.log("5 != 7 is ", com1 != com2);
console.log("5 === 7 is ", com1 === com2); // velue and data type bane chek kare 6e 
console.log("5 !== 7 is ", com1 !== com2);
console.log("5 < 7 is ", com1 < com2);
console.log("5 > 7 is ", com1 > com2);
console.log("5 <= 7 is ", com1 <= com2);
console.log("5 >= 7 is ", com1 >= com2);

console.log("Operators Logical -------------------------");

/* 
&& = true && true = true  // tow condisan true hoy toj Ansar true avse

|| = true || false = true // one condisan true hoy and athor condisan fals hoy to pan true Ansar avse

!  =  true ! true false // true hase to fals karse and fals hase to true karse 

*/
