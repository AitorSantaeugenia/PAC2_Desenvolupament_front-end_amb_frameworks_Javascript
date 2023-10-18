function entryCalculator(entrants) {
  // your code here
  const prices = {
    Adult: 49.99,
    Child: 20.99,
    Senior: 24.99
  };
    
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
  const schedule = {Tuesday: 'Open from 8am until 6pm',
                    Wednesday: 'Open from 8am until 6pm',
                    Thursday: 'Open from 10am until 8pm',
                    Friday: 'Open from 10am until 8pm',
                    Saturday: 'Open from 8am until 10pm',
                    Sunday: 'Open from 8am until 8pm',
                    Monday: 'CLOSED'}

  if(!dayName ||dayName.length === 0){
    return {Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED'};

  }else{
    const horario = {[dayName] : schedule[dayName]};
    return horario; 
  }
}

function animalCount(species) {
  // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
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
