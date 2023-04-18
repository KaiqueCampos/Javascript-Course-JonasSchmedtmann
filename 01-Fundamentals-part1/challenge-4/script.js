/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

function handleCalculateFinalBillValue(billValue) {
  const tipPercentual = billValue >= 50 && billValue <= 300 ? 15 : 20;
  const tip = ((billValue / 100) * tipPercentual).toFixed(2);

  console.log(
    `the bill was ${billValue.toFixed(2)}, the tip was ${tip}, and the total value is ${(billValue + Number(tip)).toFixed(2)}. the percentage charged for the tip is ${tipPercentual}%`
  );
}

handleCalculateFinalBillValue(275);
handleCalculateFinalBillValue(40);
handleCalculateFinalBillValue(430);
