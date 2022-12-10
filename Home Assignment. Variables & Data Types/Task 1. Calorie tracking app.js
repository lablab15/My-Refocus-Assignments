
let halfHrCal = 225; //Cycling for 30minutes burns calories 
let DaysHrPerCyc = 0.5;
let TotalDaysHrPerCyc = 0.5*2; // Hour per day Sam decided to cycling
let DaysCyc = 15; // No. of days Sam decided to cycling

TotalCal = TotalDaysHrPerCyc * DaysCyc * halfHrCal;

console.log(`Great work, Sam! After ${DaysHrPerCyc}`, `hours of running everyday for a week, you may lose a total of ${TotalCal}`,`calories`); //display message
