## Theoretical question

1. Explain in your own words the difference between declaring variables via `var`, `let` and `const`. 
2. Why is declaration of a variable via `var` considered a bad tone?

## The task is:

Implement a simple Javascript program that will interact with the user using modal browser windows - `alert`, `prompt`, `confirm`.

#### Technical requirements:
- Use the modal browser window to read user credentials: name and age. 
- If the age is less than 18 years - show the message: `You are not allowed to visit this website`.
- If the age of 18 to 22 years (inclusive) - show the window with the following message: `Are you sure you want to continue?` and buttons `Ok`, `Cancel`. If the user has pressed `Ok`, display a message on the screen: `Welcome, ` + username. If the user has clicked `Cancel`, display a message on the screen: `You are not allowed to visit this website`. 
- If users age is over 22 years old, display the following message on the screen: `Welcome, ` + username.
- Be sure to use the ES6 syntax (ES2015) when creating variables.

#### An optional advanced complexity task:
- Add a check for correctness of the entered data. If the user has not entered a name, or if the age is not a number, ask again for the name and age (the default value for each of the variables must be the previously entered information). 
