'use strict'
function solveEquation(a, b, c) {
  let arr;
  let d = b**2-4*a*c
  if (d<0){ 
    arr=[]
  }
  if (d==0){
    arr=[-b/(2*a)]
  } 
  if (d>0) {
    arr=[(-b+Math.sqrt(d))/(2*a),(-b-Math.sqrt(d))/(2*a)]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let s=amount-contribution
  percent=percent/12
  let countMonth=(date.getFullYear()-new Date().getFullYear())*12 -new Date().getMonth()+date
  totalAmount=alert(Math.round(s*(percent+(percent/(((1+percent)**countMonth)-1)))*100)/100)+contribution
  console.log(totalAmount)
  return totalAmount;
}
