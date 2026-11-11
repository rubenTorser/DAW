/*****************************************************************
18.	Crea un script que:
•	Crea un objeto user vacío.
•	Agrega la propiedad name con el valor John.
•	Agrega la propiedad surname con el valor Smith.
•	Cambia el valor de name a Pete.
•	Elimina la propiedad name del objeto.
*****************************************************************/

let user = {};

user.name = 'John';
user.surname = 'Smith';

console.log(user); // { name: 'John', surname: 'Smith' }

console.log(user.name); // John
console.log(user.surname); // Smith

user.name = 'Pete';

console.log(user.name); // Pete

delete user.surname;

console.log(user);

console.log(user.surname); // undefined
