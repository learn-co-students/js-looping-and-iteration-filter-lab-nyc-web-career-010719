// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (element) {
    return element.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch(array, string) {
  return array.filter(function (element) {
    return element[0].toLowerCase() === string[0].toLowerCase()
  });
}

function matchName(array, string) {
  return array.filter(function (object) {
    return object['name'].toLowerCase() === string.toLowerCase()
  });
}
