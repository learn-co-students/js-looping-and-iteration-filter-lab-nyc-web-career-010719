// Code your solution in this file

// Write findMatching- This function takes an array of drivers and a string as arguments,
// and returns the matching list of drivers. The function should be case insensitive.


function findMatching (drivers, name) {
  return drivers.filter(d => d.toLowerCase() === name.toLowerCase())
}


function fuzzyMatch (drivers, name){
  return drivers.filter(d => d.startsWith(name))

}

function matchName(drivers, name){
  return drivers.filter(n => n.name === name)


}
