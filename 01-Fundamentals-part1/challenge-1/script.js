// CHALLENGE #1 - FUNDAMENTALS PART 1 
function calcBodyMassIndex(mass, height){
    return mass/ height ** 2;     
}

// Data 1
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

let markHigherBMI = calcBodyMassIndex(markMass, markHeight) > calcBodyMassIndex(johnMass, johnHeight)
console.log(`Mark has higher BMI than John in Data 1? ${markHigherBMI}`)

// Data 2
markMass = 95;
markHeight = 1.88;

johnMass = 85;
johnHeight = 1.76;

markHigherBMI = calcBodyMassIndex(markMass, markHeight) > calcBodyMassIndex(johnMass, johnHeight)
console.log(`Mark has higher BMI than John in Data 2? ${markHigherBMI}`)
