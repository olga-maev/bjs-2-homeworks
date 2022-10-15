function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length !== arr2.length) result=false
  else{
    result=true;
    for (let counter=0;counter<arr1.length;counter++){
      if (arr1[counter]!==arr2[counter]) {
        result = false;
        break;
      }
    }
  }
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr=arr.filter(count => count%3===0)
  resultArr=resultArr.filter(count => count>0)
  resultArr=resultArr.map((count)=>count*10)
  
  return resultArr; // array
}
