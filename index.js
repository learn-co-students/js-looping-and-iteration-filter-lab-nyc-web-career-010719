function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, name) {
  return list.filter(function (driverName) {
    return driverName[0] === name[0];
  });
}

function matchName(list, name) {
  return list.filter(function (driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
}
