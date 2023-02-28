console.log("Welcome To JavaScript");

let a = 67 // variabal Declaring 
// Variabal Difin for A , a , _ Acsepted bat numbar and @#$%& not Acsepted
console.log(a);

/*
---------------------------------------------------------------------------------------------------------------
Difference between let and var and const
---------------------------------------------------------------------------------------------------------------
1).let = (Not.let is now preferred for variable declaration. 
              It's no surprise as it comes as an improvement to var declarations.
              It also solves the problem with var that we just covered. 
              Let's consider why this is so.)

   EX:-

           let greeting = "say Hi";
             let times = 4;

           if (times > 3) {
             let hello = "say Hello instead";
             console.log(hello);// "say Hello instead"
           }
         console.log(hello) // hello is not defined

---------------------------------------------------------------------------------------------------------------
2).const = (Not.Variables declared with the const maintain constant values. 
                const declarations share some similarities with let declarations.)

     EX:-
         
         const greeting = "say Hi";
         const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
         
---------------------------------------------------------------------------------------------------------------
3).var = (Not.Before the advent of ES6, var declarations ruled.
              There are issues associated with variables declared with var, though. 
              That is why it was necessary for new ways to declare variables to emerge.
              First, let's get to understand var more before we discuss those issues. )

   EX:-
        var tester = "hey hi";
    
        function newFunction() {
             var hello = "hello";
        }
        console.log(hello); // error: hello is not defined

---------------------------------------------------------------------------------------------------------------
Difference between let and var and const
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 var declarations are globally scoped or function scoped while let and const are block scoped.
 var variables can be updated and re-declared within its scope; let variables can be updated 
   but not re-declared; const variables can neither be updated nor re-declared.
 While var and let can be declared without being initialized, const must be initialized during 
  declaration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  

*/
