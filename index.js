// function findMatching (drivers, query) {
//   matchingDrivers = drivers.filter(driver =>
//     driver.toLowerCase() === query.toLowerCase()
//   )
//
//   return matchingDrivers
// }
//
// function fuzzyMatch (drivers, query) {
//   matchingDrivers = drivers.filter(driver =>
//     for (let i = 0; i < query.length; i++) {
//       if (query[i].toLowerCase() !== driver[i].toLowerCase()) {
//         return false
//       }
//     }
//   )
//   return matchingDrivers
// }
//
// function matchName (drivers, string) {
//   matchingDrivers = drivers.filter(driver =>
//     driver.name.toLowerCase() === string.toLowerCase()
//   )
//   return matchingDrivers
// }

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
