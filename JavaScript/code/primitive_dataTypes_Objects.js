//-------------------------------------------------------------------------------------------------------------

/*
 Typs of Primitives DataType 
  1).Null
  2).Number
  3).Symbol
  4).String
  5).Boolean
  6).Bigint
  7).Undefined

  Object is a non Primitives DataType


*/
//-------------------------------------------------------------------------------------------------------------
// EX:- 
console.log(" Typs of Primitives DataType");
let a = null;
let b = 345;
let c = true;// can also be false
let d = BigInt("25") + BigInt("5");
let e = "Welcome"
let f = Symbol("I m a Nice Symbol");
let g

console.log(
  "\n", "Null =", a, "\n",
  "Number =", b, "\n",
  "Symbol =", c, "\n",
  "String =", d, "\n",
  "Boolean =", e, "\n",
  "Bigint =", f, "\n",
  "Undefined =", g, "\n"
);
console.log("-----------------------------------------------------");
//-------------------------------------------------------------------------------------------------------------
/*
 Objects Basec..
   Objects is Key value pres..
   Non Primitives DataType

*/

//-------------------------------------------------------------------------------------------------------------
//EX:-

const itam = {
  "Ritesh": true,
  "Chirag": false,
  "Doremon": 67,
  "Jignesh": undefined
}

console.log(itam["Ritesh"]);
console.log(itam.Chirag);
console.log("-----------------------------------");
// itam object in values add ..... 
itam['Friend'] = "Harsh";
console.log(itam);
//-----------------------------------------------
