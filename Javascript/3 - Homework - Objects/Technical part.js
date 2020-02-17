
let user =  new createNewUser("Hey", "Dude") 

alert(`${user.getName()} ${user.getSurname()}`);

alert(user.getLogin());




function createNewUser(name, surname) {
    debugger
    this.firstName = name;
    this.lastName = surname;

    this.setName = (tmpName) => {
        this.firstName = tmpName; 
    }
    this.setSurname = (tmpSurname) => {
        this.lastName = tmpSurname;
    }

    this.getName = () => {
        return this.firstName;
    }
    
    this.getSurname = () => {
        return this.lastName;
    }

    this.getLogin  = () => {
        return this.firstName.slice(0,1).toLowerCase() + this.lastName.toLowerCase();
    }
}



// function createNewUser(name, surname) {
//     debugger
//     this.firstName = Symbol(name);
//     this.lastName = Symbol(surname);

//     this.setName = (tmpName) => {
//         this.firstName = Symbol(tmpName); 
//     }
//     this.setSurname = (tmpSurname) => {
//         this.lastName = Symbol(tmpSurname);
//     }

//     this.getName = () => {
//         return this.firstName.description;
//     }

//     this.getSurname = () => {
//         return this.lastName.description;
//     }

//     this.getLogin  = () => {
//         return this.firstName.description.toString().slice(0,1).toLowerCase() + this.lastName.description.toString().toLowerCase();
//     }
// }

