//Funció "findOne" amb tres arguments:
//list
//objecte amb "key" i "value"
const findOne = (list, { key, value }) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      try {
        const element = list.find(element => element[key] === value);
        if (element) {
          resolve(element);
        } else {
          throw new Error('ERROR: Element Not Found');
        }
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
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

//Emprarem el Promise.all per això crearem dues promeses successPromise i errorPromise
const successPromise = findOne(users, { key: 'name', value: 'Carlos' })
  .then(element => `user: ${element.name}`)
  .catch(error => error.message);

const errorPromise = findOne(users, { key: 'name', value: 'Fermin' })
 .then(element => `user: ${element.name}`)
 .catch(error => error.message);

//Amb el Promise.all executarem totes les promeses, al mateix temps que els missatges de consola
//el motiu es per fer-ho tot de cop, ja que Promise.all s'executará quan totes les promeses que té finalitzin
Promise.all([successPromise, errorPromise])
  .then(([successMessage, errorMessage]) => {
      console.log('findOne success');
      console.log('findOne error');
      console.log(successMessage);
      console.log(errorMessage);
  }).catch(error => error.message);

/*
findOne success           // Això es el resultat de la línia 51
findOne error             // Això es el resultat de la línia 61
user: Carlos              // Això es el resultat de la línia 56
ERROR: Element Not Found  // Això es el resultat de la línia 66
*/