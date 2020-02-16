const ENTER_NAME_MS = "Please enter your name.";
const ENTER_AGE_MS = "Please enter your age.";
const NOT_ALLOWED = "You are not allowed to visit this website!";
const ARE_YOU_SURE = "Are you sure you want to continue?";

let name;
let age;

while (true) {
    name = prompt(ENTER_NAME_MS);
    console.log(name);
    if (name != '' && name != null && !Number(name)) break;
}

while (true) {
    age = +prompt(ENTER_AGE_MS);
    console.log(age);
    if (age != 0 && !isNaN(age) && age > 0) break;
}



if (age < 18) alert(NOT_ALLOWED)
else if (age >= 18 && age <= 22) {
    if (confirm(ARE_YOU_SURE)) {
        alert(`Welcome, ${name}`);
    } else {
        alert(NOT_ALLOWED);
    }
}
else if(age > 22) {
    alert(`Welcome, ${name}`);
}