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
  console.log(species)
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
