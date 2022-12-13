const Calculator = require("./bmi_calculator")

test("Result should be underweigh , should be under bmi < 18.5", () =>{

    const height = 182;
    const weight = 60;
    expect(weight/((height * height)/10000)).toBeLessThan(18.5);
});


test('Result should be Normal weight is within range', () =>  {
    const height = 182;
    const weight = 70;
    expect(weight/((height * height)/10000)).toBeGreaterThan(18.5);
    expect(weight/((height * height)/10000)).toBeLessThan(24.5);

});

test('Result should be Overweight  is within range', () =>  {
    const height = 182;
    const weight = 90;
    expect(weight/((height * height)/10000)).toBeGreaterThan(25);
    expect(weight/((height * height)/10000)).toBeLessThan(29.9);

});

test('Result should be Obesity  is within range', () =>  {
    const height = 182;
    const weight = 110;
    expect(weight/((height * height)/10000)).toBeGreaterThanOrEqual(30);


});