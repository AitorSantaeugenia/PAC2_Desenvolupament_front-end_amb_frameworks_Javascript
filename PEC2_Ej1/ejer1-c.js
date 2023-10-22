//Funció "findOne" amb tres arguments:
//list
//objecte amb "key" i "value"

const findOne = (list, { key, value }) => { 
  /* CANVIS sobre ejer1-b.js - Comencen amb *** tres asteriscos */
  /* ----------------------------------- */
  // *** al crear la nova promesa tenim que possar el async per tal de poder emprar el await i fer-la asincrona
  /* ----------------------------------- */
  return new Promise(async (resolve, reject) => {                           //*** ABANS: return new Promise((resolve, reject) => {
    setTimeout(() => {
      //*** possem un try per intentar fer la seguent línia
      try {
        //Cerca de la llista "users" la propietat "key" que sigui igual a "value" passats com a arguments
        //Per exemple, en la primera crida a la funció: element['name'] === "Carlos"
        const element = list.find(element => element[key] === value);
        //*** Tenim que emprar el throw new Error per tal de que doni error si no s'ha complert la promesa
        if (element) {
          resolve(element);
        } else {
          throw new Error('Error: Element Not Found');
        }
      }
      //*** possem un catch per a capturar l'error i rebutgem la promesa
      catch (error) {
        reject(error);
      }
    //2 segons escrits com a milisegons (2000 = 2 segons)
    }, 2000);
  })
};

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

//*** Feim la funció asincrona amb try i catch, es una funció anónima que s'executará inmediatament
(async () => {
  //*** intenta el següent codi
  try {
    //*** resol la promesa i la guarda
    const element = await findOne(users, { key: 'name', value: 'Carlos' });
    //*** mostra el resultat de la promesa
    console.log(`user: ${element.name}`);
  //*** Captura el error del bloc de codi anterior, si n'hi ha
  } catch (error) {
    //*** Mostra el error, que en aquest cas NO HI HA error
    console.log(error.message);
  }
})();

/* COMPARACIÓ AMB ejer1-b.js 
findOne(users, { key: 'name', value: 'Carlos' })
  .then(e => {console.log(`user: ${e.name}`)})
  .catch(e => {console.log(e.message)});
*/

//Missatge que diu que la funció serà un fracàs
console.log('findOne error');

//*** Feim la funció asincrona amb try i catch, es una funció anónima que s'executará inmediatament
(async () => {
  //*** intenta el següent codi
  try {
    //*** resol la promesa i la guarda - En aquest cas error
    const element = await findOne(users, { key: 'name', value: 'Fermin' });
    //*** mostra el resultat de la promesa guardada en "element", en aquest cas no
    console.log(`user: ${element.name}`);
  //*** Captura el error del bloc de codi anterior, si n'hi ha
  } catch (error) {
    //*** Mostra el error, que en aquest cas si que existeix
    console.log(error.message);
  }
})();

/* COMPARACIÓ AMB ejer1-b.js 
findOne(users, { key: 'name', value: 'Fermin' })
  .then(e => {console.log(`user: ${e.name}`)})
  .catch(e => {console.log(e.message)});
*/

/*
findOne success           // Això es el resultat de la línia 51
findOne error             // Això es el resultat de la línia 61
 //wait 2 seconds
user: Carlos              // Això es el resultat de la línia 56
ERROR: Element Not Found  // Això es el resultat de la línia 66
*/