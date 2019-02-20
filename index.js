// Code your solution in this file

function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, partialName) {
    let length = partialName.length;
    return drivers.filter(function(driverName){
    return driverName.slice(0, length) === partialName;
  });
}

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
