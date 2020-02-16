1. Explain in your own words the difference between declaring variables via `var`, `let` and `const`.

var - It is considered to be old-way and is practically not used. And this variables are global variables(except functions). var has no block-scope. 

if (true) {
  var tmp = "Hey"; 
}
alert(tmp); // It works because var has no block-scope

The variables created inside the function with var are function-level-variable, so it works only inside of fucntion. When function called firstly var variables will be declared (it doesn`t depends on which line it is). But its assignment is only when it comes to that line.

function foo() {
  alert(tmp);      // tmp has declared but not assigned thats why it will show undefined
  tmp = "Hey";     // tmp assigns in this line
  var tmp;	   // this line has worked top of the functin 
}
foo();
we can declare var many times it is not problem, it will re-assign value. But let doesn't allow re-declare, only 1 time we can(in same block-scope).
----------------------------------------------------------------------
let - new-way and block-scope variable type. modern variant

if(true) {
  let tmp = "Hey";
}
  alert(tmp); // it will show error because tmp and alert is not the same scope
----------------------------------------------------------------------
const - the same as let but main difference that, we cannot change value after decleration.
----------------------------------------------------------------------

2. Why is declaration of a variable via `var` considered a bad tone?

The main reason is that it is not block-scope because it is created globally and takes up unnecessary space.