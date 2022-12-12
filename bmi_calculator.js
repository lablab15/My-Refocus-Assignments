function bmiCalculator () {

var h = 182;
var w = 60;

let bmi = (w/((h * h)/10000)).toFixed(2)
result = bmi;

if (bmi < 18.5) {
    console.log(" You are underweight");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal Weight");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight");
}
else  {
    console.log("Obese");
}
console.log("Height entered : " + h + "cm");
console.log("Weight entered : " + w + "kg");
}
console.log("Your result is: " )
bmiCalculator();

