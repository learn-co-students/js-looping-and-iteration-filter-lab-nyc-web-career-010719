// Code your solution in this file
function findMatching(drivers,name)
{
  arr = []
  for(let i=0;i<drivers.length;i++)
  {
    if (drivers[i].toLowerCase()== name.toLowerCase())
    {
      arr.push(drivers[i]);
    }
  }
  return arr;
};

function fuzzyMatch(drivers,letters)
{
  arr =[];
  for(const name of drivers)
  {
    // console.log(name)
    if (name.slice(0,letters.length)== letters)
    {
      // console.log('in if')
      arr.push(name)
    }
  }
  // console.log(arr)
  return arr;
};

function matchName(drivers,name)
{
  arr =[]
  for (const obj of drivers)
  {
    // console.log(obj.name)
    if (obj.name == name)
    {
      // console.log(obj);
      arr.push(obj);
    }
  }
  return arr;

}
