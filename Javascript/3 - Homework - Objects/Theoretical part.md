1. Explain in your own words what the object method is

Object is a complex data type. It can store many primitive data types.

Objects works with by reference not by value. Thats why we need sometimes deep-copy. 

We can create object inside the object it possible.

And we can create constructor for object, so we will use it to create same structure object.

Object methods looks like a variable. It store a function code 

ex.

let tmp = {
    name: "Hey",
    surname: "Dude",

    run = function () {
        alert("Im running");
    }

    <!-- run = () => {
        alert("Im running");   Arrow functions has no "this" it uses parent     objects "this"
    } -->
}