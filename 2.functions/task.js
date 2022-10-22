// Задание 1
function getArrayParams(arr) {
  let avg;
  let min = max = arr[0]
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
    sum += arr[i]
  }
  avg = Number((sum / arr.length).toFixed(2))
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0])
  for (let i = 1; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) max = func(arrOfArr[i])
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i]
    if (min > arr[i]) min = arr[i]
  }
  return max - min;
}
