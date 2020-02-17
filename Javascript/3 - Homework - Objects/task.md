## Theoretical question:

1. Explain in your own words what the object method is

## The task is:

Implement a function to create a "user" object.

#### Technical requirements:
- Write the `createNewUser()` function, which will create and return the `newUser` object.
- The function should ask the caller for the name and surname during the call.
- Create an object `newUser` with properties `firstName` and `lastName`, using the data entered by the user.
- Add the `getLogin()` method to the `newUser` object, which will return the first letter of the user name connected to the user surname, all in lower case (for example, `Ivan Kravchenko → ikravchenko`).

- Create a user using the `createNewUser()` function. Call the `getLogin()` function from the user. Display the result of the function execution in the console.

Translated with www.DeepL.com/Translator

#### An optional advanced complexity assignment:
- Make the properties `firstName` and `lastName` cannot be changed directly. Create setter functions `setFirstName()` and `setLastName()`, which will allow you to change these properties.

#### Literature:
- [Objects](https://learn.javascript.info/object)
- [Object.defineProperty()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
