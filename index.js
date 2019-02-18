function findMatching(drivers, name){
  return drivers.filter(function (findDriverByName){
     return findDriverByName.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(drivers, name){
  let lengthOfName = name.length;
  return drivers.filter(function(partialName){
    return partialName.slice(0, lengthOfName) === name
  })
}

function matchName(drivers, name){
  return drivers.filter(function(matchName){
    return matchName.name.toLowerCase() === name.toLowerCase()
  })
}
