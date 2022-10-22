'use strict'
function solveEquation(a, b, c) {
  let arr;
  let d = b ** 2 - 4 * a * c
  if (d < 0) {
    arr = []
  }
  if (d === 0) {
    arr = [-b / (2 * a)]
  }
  if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }
  if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  }
  if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
  let s = amount - contribution
  let totalAmount
  percent = percent / 12 / 100
  let countMonth = (date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth() + date.getMonth()
  if (s > 0) {
    totalAmount = Number(((s * (percent + (percent / (((1 + percent) ** countMonth) - 1))) * countMonth).toFixed(2)))
  } else {
    totalAmount = 0
  }

  console.log(totalAmount)
  return totalAmount;
}
