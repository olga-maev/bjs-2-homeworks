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
  percent=percent/100
  let countMonth=Math.round((date - Date.now())/(29.5*24*60*60*1000))
  let payMonth=s*(percent+(percent/(((1+percent)**countMonth)-1)))
  totalAmount=parseFloat((Math.round(payMonth*100)/10).toFixed(2))
 
  return totalAmount;
}
