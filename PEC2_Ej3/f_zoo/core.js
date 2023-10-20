const data = require('./data');

function entryCalculator(entrants) {
  // your code here
  const prices = data.prices;;
    
  if(!entrants || Object.keys(entrants).length === 0){
    return 0;

  }else{
    const keyValues = Object.entries(entrants);
    const total = keyValues
    .map(([key, amount]) => {
      return prices.hasOwnProperty(key) ? prices[key] * amount : 0;
  })
    .reduce((acc, prices) => acc + prices, 0);

    return total;
  }
}

function schedule(dayName) {
  // your code here
  const schedule = data.hours;

   if (schedule.hasOwnProperty(dayName)) {
    const horario = schedule[dayName];
     
    if (horario.open === 0 && horario.close === 0) {
      const closedDay = {};
      closedDay[dayName] = 'CLOSED';
      
      return closedDay;
    } else {
      const openHours = horario.close <= 12 ? horario.close + 'am' : (horario.close - 12) + 'pm';
      const openDay = {};
      openDay[dayName] = `Open from ${horario.open}am until ${openHours}`;
      
      return openDay;
    }
  } else {
    const readableSchedule = {};
    
    for (const dia in schedule) {
      const horario = schedule[dia];
      
      if (horario.open === 0 && horario.close === 0) {
        readableSchedule[dia] = 'CLOSED';
      } else {
        const openHours = horario.close <= 12 ? horario.close + 'am' : (horario.close - 12) + 'pm';
        readableSchedule[dia] = `Open from ${horario.open}am until ${openHours}`;
      }
    }
    return readableSchedule;
  }
}

function animalCount(species) {
  // your code here
  const dataAnimals = data.animals;
  
  const animalCounts = dataAnimals.map(animal => ({
    name: animal.name,
    count: animal.residents.length,
  }));

 if (!species) {
    return animalCounts.reduce((count, animal) => {
      count[animal.name] = animal.count;
      return count;
    }, {});
 } else {
    const animal = animalCounts.find(animal => animal.name === species);
    return animal ? animal.count : 0;
 }
}

function animalMap(options) {
  // your code here
  const animals = data.animals;

  if (!options) {
    return animals.reduce((acc, animal) => {
      if (!acc[animal.location]) {
        acc[animal.location] = [];
      }
      acc[animal.location].push(animal.name);
      return acc;
    }, {});
  } else {
    const locationMap = {};

    animals.forEach((animal) => {
      if (!locationMap[animal.location]) {
        locationMap[animal.location] = [];
      }

      const animalType = animal.name;
      const residents = animal.residents.filter((resident) => {
        return !options.sex || resident.sex === options.sex;
      }).map((resident) => resident.name);

      if (residents.length >= 0) {
        if (options.includeNames) {
          locationMap[animal.location].push({ [animalType]: residents });
        } else if (!options.sex || residents.length > 0) {
          locationMap[animal.location].push(animalType);
        }
      }
    });

    return locationMap;
  }
}

function animalPopularity(rating) {
  // your code here
  const ratingMap = {};

  if(!rating){
    data.animals.forEach((animal) => {
    const { name, popularity } = animal;

      if (!ratingMap[popularity]) {
        ratingMap[popularity] = [];
      }

    ratingMap[popularity].push(name);
  });

  const sortedRatingMap = Object.keys(ratingMap)
  .sort((a, b) => b - a)
  .reduce((acc, key) => {
    acc[key] = ratingMap[key];
    return acc;
  }, {});

  return sortedRatingMap;

  }else{
    const animalMatch = data.animals
    .filter((animal) => animal.popularity === rating)
    .map((animal) => animal.name);

    return animalMatch.length ? animalMatch : null;
  }
}

function animalsByIds(ids) {
  // your code here
  const animals = data.animals;
  if(!ids){
    return [];
  }else {
    const animalById = animals.filter(animal => ids.includes(animal.id));

    return animalById;
  }
}

function animalByName(animalName) {
  // your code here
  const animals = data.animals;

  const matchingAnimal = animals
    .map(animal => animal.residents.find(resident => resident.name === animalName))
    .filter(resident => resident)
    .map(resident => ({
      name: resident.name,
      sex: resident.sex,
      age: resident.age,
      species: animals.find(animal => animal.residents.includes(resident)).name,
    }))[0];

  return matchingAnimal || {};
}

function employeesByIds(ids) {
  // your code here
  const employees = data.employees;
  if(!ids){
    return [];
  }else {
    const employeesById = employees.filter(employee => ids.includes(employee.id));

    return employeesById;
  }
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
