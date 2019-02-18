function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.slice(0, 2) === name.slice(0, 2));
};

function matchName(drivers, name) {
  return drivers.filter(driver => driver['name'] === name);
};
