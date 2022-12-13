function bmiCalculator (h,w) {

//  var h = 182;
//  var w = 60;

let bmi = (w/((h * h)/10000)).toFixed(2)
result = bmi;

if (bmi < 18.5) {
    console.log("You are underweight");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are Normal Weight");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("You are Overweight");
}
else  {
    console.log("You are Obese");
}
console.log("Height entered : " + h + "cm");
console.log("Weight entered : " + w + "kg");
}
bmiCalculator(182,60); //correct
bmiCalculator(182,70); //correct
console.log("BMI Result : " + result);


//bmi result is 18.5 below which is equal to underweight
//bmi result 30.0 and Above is equalt to Obese
module.exports = bmiCalculator;
