//Funció "findOne" amb tres arguments:
//list
//objecte amb "key" i "value"
//objecte "onSuccess" i "onError" que son dues funcions de callback
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  //"setTimeout" fa un "delay" de 2 segons abans d'executar el seu interior
  setTimeout(() => {
    //Cerca de la llista "users" la propietat "key" que sigui igual a "value" passats com a arguments
    //Per exemple, en la primera crida a la funció: element['name'] === "Carlos"
    const element = list.find(element => element[key] === value);
    //Si existeix crida a la funció "onSuccess" passant l'element trobat
    //Si no existeix, crida a la funció "onError" passant un missatge d'error
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    //2 segons escrits com a milisegons (2000 = 2 segons)
  }, 2000);
};
//Funció que s'empra com a "callback", "onSuccess" que rep un objecte amb la propietat de "name" i fa un "console.log"
const onSuccess = ({ name }) => console.log(`user: ${name}`);
//Funció que s'empra com a "callback", "onError" que rep un objecte amb la propietat "msg" i mostra el missatge d'error via "console.log"
const onError = ({ msg }) => console.log(msg);

//Llista amb els usuaris i el seu rol
const users = [
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];
//Missatge que diu que la funció serà exitosa
console.log('findOne success');
//Crida a la funció "findOne" pasant la llista 'users', un objecte amb la "key" i "value", i un altre objecte amb els "callback"
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
//Missatge que diu que la funció serà un fracàs
console.log('findOne error');
//Crida a la funció "findOne" pasant la llista 'users', un objecte amb la "key" i "value", i un altre objecte amb els "callback"
//En aquest cas, el "value" no existeix i per tant, cridarà al "callback" donant error
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success             // Això es el resultat de la línia 34
findOne error               // Això es el resultat de la línia 38
 //wait 2 seconds
user: Carlos                // Això es el resultat de la línia 36
ERROR: Element Not Found    // Això es el resultat de la línia 41
*/

