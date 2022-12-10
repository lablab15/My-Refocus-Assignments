
let Save =10000; //Amount Sam wants to Save
let AmountSaved = 7500; //Amount Sam has already saved
let diffPercent = Save - AmountSaved; //Computation remaining balance Sam need to save
let TotalPercent = diffPercent / 100; //Remaining Percentage computation 

console.log(`Thank you for your discipline and hardwork, Sam! You are now ` + TotalPercent + `% away from your goal of saving ₱${Save.toLocaleString()}.`); //Dsplay message


