function findMatching(drivers,string){
  return drivers.filter(function(driversName){
    return driversName.toUpperCase() === string.toUpperCase();
  });
}

function fuzzyMatch(drivers,string){
  let substring = string.length
  return drivers.filter(function(driversName){
    return driversName.slice(0,substring) === string;
  });
}

function matchName(drivers,string){
  return drivers.filter(function(driver){
    return driver.name.toUpperCase() === string.toUpperCase();
  });
}
