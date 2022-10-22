function compareArrays(arr1, arr2) {
  let result;
  if ((arr1.length !== arr2.length) & ( )){
    result = true
  }
  else{
    result=false
      }
    
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr=arr.filter(count => count%3===0).filter(count => count>0).map((count)=>count*10)
  
  return resultArr; // array
}
