//Funció "findOne" amb tres arguments:
//list
//objecte amb "key" i "value"

/* CANVIS sobre ejer1-a.js */
/* ----------------------------------- */
// L'objecte amb els "onSuccess" i "onError" no farien falta ja que amb la promesa no necessitaríem fer els "callback", així que no ho passem per arguments
/* ----------------------------------- */
const findOne = (list, { key, value }) => {
  return new Promise((resolve, reject) => {                               //ABANS: const findOne = (list, { key, value }, { onSuccess, onError }) => {
    //"setTimeout" fa un "delay" de 2 segons abans d'executar el seu interior
    setTimeout(() => {
      //Cerca de la llista "users" la propietat "key" que sigui igual a "value" passats com a arguments
      //Per exemple, en la primera crida a la funció: element['name'] === "Carlos"
      const element = list.find(element => element[key] === value);
      /* CANVIS sobre ejer1-a.js */
      /* ----------------------------------- */
      //Si existeix feim un resolve(element), aceptant la promesa
      //Si no existeix, feim un reject amb l'error, rebutjant la promesa
      /* ----------------------------------- */
      element ? resolve(element) : reject(new Error('ERROR: Element Not Found'));
    //2 segons escrits com a milisegons (2000 = 2 segons)
    }, 2000);
  })
};

/* CANVIS sobre ejer1-a.js */
/* ----------------------------------- */
//"onSuccess" i "onError" no farien falta ja que amb la promesa no necessitaríem fer els "callback"
/* ----------------------------------- */
  /*
  //Funció que s'empra com a "callback", "onSuccess" que rep un objecte amb la propietat de "name" i fa un "console.log"
  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  //Funció que s'empra com a "callback", "onError" que rep un objecte amb la propietat "msg" i mostra el missatge d'error via "console.log"
  const onError = ({ msg }) => console.log(msg);
  */

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
/* CANVIS sobre ejer1-a.js */
/* ----------------------------------- */
// Al fer-ho amb promeses, no fa falta passar el objecte amb "onSucces" i "onError" per tal de que fes els "callsbacks"
/* ----------------------------------- */
findOne(users, { key: 'name', value: 'Carlos' })                          //ABANS: findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError })
  .then(e => {console.log(`user: ${e.name}`)})
  .catch(e => {console.log(e.message)});

//Missatge que diu que la funció serà un fracàs
console.log('findOne error');
/* CANVIS sobre ejer1-a.js */
/* ----------------------------------- */
// Al fer-ho amb promeses, no fa falta passar el objecte amb "onSucces" i "onError" per tal de que fes els "callsbacks"
/* ----------------------------------- */
findOne(users, { key: 'name', value: 'Fermin' })                          //ABANS: findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError })
  .then(e => {console.log(`user: ${e.name}`)})
  .catch(e => {console.log(e.message)});

/*
findOne success           // Això es el resultat de la línia 51
findOne error             // Això es el resultat de la línia 61
 //wait 2 seconds
user: Carlos              // Això es el resultat de la línia 56
ERROR: Element Not Found  // Això es el resultat de la línia 66
*/