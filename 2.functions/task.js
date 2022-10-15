// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min=101
  max=-101
  sum=0
  for (let counter=0;counter<arr.length;counter++){
    if (arr[counter]>max) max=arr[counter]
    if (arr[counter]<min) min=arr[counter]
    sum+=arr[counter]
  }
  avg=Number((sum/arr.length).toFixed(2))
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum=0
  for (let counter=0;counter<arr.length;counter++) {
    sum+=arr[counter]
  }
  return sum;
}

function makeWork(arrOfArr,func) {
  let max;
  max=func(arrOfArr[0])
  for (counter=1;counter<arrOfArr.length;counter++){
    if (func(arrOfArr[counter])>max) max=func(arrOfArr[counter])
  }
    return max;
}

// Задание 3
function worker2(arr) {
  let max,min;
  max=arr[0];
  min=arr[0];
  for (counter=1;counter<arr.length;counter++){
    if (max<arr[counter]) max=arr[counter]
    if (min>arr[counter]) min=arr[counter]
  }
  let rezult=max-min;
  return rezult;
}
