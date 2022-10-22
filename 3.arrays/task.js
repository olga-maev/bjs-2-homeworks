function compareArrays(arr1, arr2) {

  let result = (arr1.length == arr2.length && arr1.every((v, i) => v === arr2[i]))

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(count => count % 3 === 0).filter(count => count > 0).map((count) => count * 10)

  return resultArr; // array
}
