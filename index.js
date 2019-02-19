// Code your solution in this file

// => [4, 5]
function findMatching (list, name) {
  return list.filter(function (driverName) { return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, beginningOfName) {
  let lengthOfName = beginningOfName.length;
  return list.filter(function (driverName) { return driverName.slice(0, lengthOfName) === beginningOfName;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) { return driver.name.toLowerCase() === name.toLowerCase();
  });
}
