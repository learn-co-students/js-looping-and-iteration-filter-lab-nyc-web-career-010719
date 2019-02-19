// Code your solution in this file
function findMatching(list, string){
  return list.filter(function (driverName){
    return driverName.toLowerCase() == string.toLowerCase()
  })
}


function fuzzyMatch(list, letters){
  return list.filter(function (name){
    return letters == name.substring(0,2)
  })
}


function matchName(list, string){
  return list.filter(function(driver){

    return driver.name == string
  })
}
// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
