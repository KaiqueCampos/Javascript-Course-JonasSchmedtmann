/*
    CODING CHALLENGE 32

    Use the BMI example from Challenge #1, and the code you already wrote, and
    improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

*/

function calcBodyMassIndex(mass, height) {
  return (mass / height ** 2).toFixed(2);
}

function handleBMICompare(markBMI, johnBMI) {
  if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
  } else {
    console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})`);
  }
}

// Data 1
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markBMI = calcBodyMassIndex(markMass, markHeight)
let johnBMI = calcBodyMassIndex(johnMass, johnHeight)

handleBMICompare(markBMI, johnBMI)

// Data 2
markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markBMI = calcBodyMassIndex(markMass, markHeight)
johnBMI = calcBodyMassIndex(johnMass, johnHeight)

handleBMICompare(markBMI, johnBMI)
