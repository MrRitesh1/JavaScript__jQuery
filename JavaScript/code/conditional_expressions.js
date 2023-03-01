/*
if  stetmant
if ...else stetmant
if .. else if ..else stetmant
 
prompt (usar input )
alert
parseInt (Converting the string to a number)


*/

console.log("-------------------------------------");

let a = "Hey whats you age ";
a = Number.parseInt(a); // Converting the string to a number
console.log(typeof a);

//----------------------------------------------------------------------------------------

console.log("-- if Satamt -----------------------------------");

let b = 15;

if (b > 14) {
    console.log("This is a valid age");
}

// velue same bat data type difrant = false
if (b === "15") {
    console.log("Welcome");
}
console.log("false");

// value same bat data type difrant = true 
if (b == "15") {
    console.log("Welcome");
}

var c = 10;
var d = 15;
// c condisan true and d condisan false = true
if (c >= 9 || d <= 14) {
    console.log("Yas you are eliogib");
}

var c = 10;
var d = 15;
// c condisan true and d condisan false = false
// tow condisan true = true
if (c >= 9 && d <= 16) {
    console.log("Yas you are eliogib");
}

//----------------------------------------------------------------------------------------

console.log("-- if...else Satamt -----------------------------------");

let e = 10;
if (e > 9) {
    console.log("if part");
} else {
    console.log("else part");
}

let q = 10;
if (q == 10) {
    console.log("Q is Same");
} else {
    console.log("Q is not Same");
}
// value and data type chak 
if (q === '10') {
    console.log("Q is Same");
} else {
    console.log("Q is not Same");
}

//----------------------------------------------------------------------------------------

console.log("-- if...else if...else Satamt ------------------------------");

let r = 21;

if (r < 10) {
    console.log("good morning");
} else if (r < 20) {
    console.log("good day");
}
else {
    console.log("All condisan false")
}


let p = 55;

if (p >= 80 && p <= 100) {
    console.log("You are in Merit");
} else if (p >= 60 && p < 80) {
    console.log("You are in 1st Division");
} else if (p >= 45 && p < 60) {
    console.log("You are in 2st Division");
} else if (p >= 33 && p <= 45) {
    console.log("You are in 3st Division");
} else if (p < 33) {
    console.log("You are Fail");
} else {
    console.log("Pliase Enter Valis Percentage..");

}