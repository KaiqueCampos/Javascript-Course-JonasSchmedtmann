/*

Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:

1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

*/

/* #1 Understand the problems

    1. How we print the forecasted maximum temperatures like this ... "17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."? 

    # Sub-Problems

    1. Create a function 'printForecast' which takes in an array 'arr'
    2. Create a for looping to print the maximum temperature according to the day.de acordo com o dia em
    3. Store this information in a new array, separating the information by "..."

*/

const data1 = [17, 21, 23]
const data2 =  [12, 5, -5, 0, 4]

let forecastedMaximumTemperatures = '';

function printForecast(temperatures) { 

    for (let i = 0; i < temperatures.length; i++){
        forecastedMaximumTemperatures += `${temperatures[i]}°C in ${i + 1} day... `
    }

    console.log(forecastedMaximumTemperatures)
}

printForecast(data1)
printForecast(data2)