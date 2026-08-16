const lessonQuestions = [
{
question: "A car travels 55 miles per hour for 4 hours. How many miles does it travel?",
type: "arithmetic",
correct: "220",
variable: "",
answerSuffix: "mi",
hint: "Use distance = rate × time.",
steps: [
"Distance = 55 × 4.",
"Distance = 220 miles."
],
img_question: ""
},
{
question: "A cyclist travels 36 miles in 3 hours. What is the cyclist's average speed?",
type: "arithmetic",
correct: "12",
variable: "",
answerSuffix: "mi/h",
hint: "Rate equals distance divided by time.",
steps: [
"Rate = 36 ÷ 3.",
"Rate = 12 miles per hour."
],
img_question: ""
},
{
question: "A machine completes a job in 5 hours. What fraction of the job does it complete in 1 hour?",
type: "arithmetic",
correct: "\\frac{1}{5}",
variable: "",
answerSuffix: "",
hint: "If the whole job takes 5 hours, divide 1 job into 5 equal parts.",
steps: [
"The machine completes 1 whole job in 5 hours.",
"The amount completed in 1 hour is 1 ÷ 5.",
"The machine completes ⅕ of the job per hour."
],
img_question: ""
},
{
question: "A machine can complete a job in 6 hours, and another machine can complete the same job in 3 hours. How many hours would they take working together?",
type: "arithmetic",
correct: "2",
variable: "",
answerSuffix: "hours",
hint: "Add their rates of work per hour.",
steps: [
"The first machine works at a rate of ⅙ job per hour.",
"The second machine works at a rate of ⅓ job per hour.",
"The combined rate is ⅙ + ⅓ = ½ job per hour.",
"Time = 1 ÷ ½ = 2 hours."
],
img_question: ""
},
{
question: "A parking garage charges $6 plus $3 per hour. How much does parking cost for 5 hours?",
type: "arithmetic",
correct: "21",
variable: "",
answerSuffix: "$",
hint: "Add the fixed fee to the hourly charge multiplied by the number of hours.",
steps: [
"The hourly charge is 3(5) = 15 dollars.",
"The total cost is 6 + 15.",
"The total cost is 21 dollars."
],
img_question: ""
},
{
question: "A store sells notebooks for $4 each and pens for $2 each. If a student buys 6 notebooks and 5 pens, what is the total cost?",
type: "arithmetic",
correct: "34",
variable: "",
answerSuffix: "$",
hint: "Find the cost of each type of item separately, then add the costs.",
steps: [
"The notebooks cost 4(6) = 24 dollars.",
"The pens cost 2(5) = 10 dollars.",
"The total cost is 24 + 10 = 34 dollars."
],
img_question: ""
},
{
question: "A 10% salt solution is mixed with a 30% salt solution to make 20 liters of a 20% salt solution. How many liters of the 10% solution are needed?",
type: "algebra",
correct: "10",
variable: "x",
answerSuffix: "L",
hint: "Let x be the liters of the 10% solution and write an equation for the amount of salt.",
steps: [
"Let x be the liters of the 10% solution.",
"The amount of 30% solution is 20 − x liters.",
"The salt equation is 0.10x + 0.30(20 − x) = 0.20(20).",
"0.10x + 6 − 0.30x = 4.",
"−0.20x = −2.",
"x = 10."
],
img_question: ""
},
{
question: "The sum of three consecutive integers is 72. What is the smallest integer?",
type: "algebra",
correct: "23",
variable: "x",
answerSuffix: "",
hint: "Represent the integers as x, x + 1, and x + 2.",
steps: [
"Let x be the smallest integer.",
"The three integers are x, x + 1, and x + 2.",
"x + (x + 1) + (x + 2) = 72.",
"3x + 3 = 72.",
"3x = 69.",
"x = 23."
],
img_question: ""
},
{
question: "The sum of two consecutive even integers is 86. What is the larger integer?",
type: "algebra",
correct: "44",
variable: "x",
answerSuffix: "",
hint: "Represent the smaller even integer as x and the larger as x + 2.",
steps: [
"Let x be the smaller even integer.",
"The larger integer is x + 2.",
"x + (x + 2) = 86.",
"2x + 2 = 86.",
"2x = 84.",
"x = 42.",
"The larger integer is 42 + 2 = 44."
],
img_question: ""
},
{
question: "A car travels 180 miles at a constant speed. If its speed were increased by 15 miles per hour, the trip would take 1 hour less. What is the original speed?",
type: "algebra",
correct: "45",
variable: "x",
answerSuffix: "mi/h",
hint: "Set the original travel time equal to the new travel time plus 1 hour.",
steps: [
"Let x be the original speed in miles per hour.",
"The original travel time is 180/x hours.",
"The new travel time is 180/(x + 15) hours.",
"180/x = 180/(x + 15) + 1.",
"Multiplying by x(x + 15) gives 180(x + 15) = 180x + x(x + 15).",
"2700 = x² + 15x.",
"x² + 15x − 2700 = 0.",
"(x − 45)(x + 60) = 0.",
"The speed must be positive, so x = 45."
],
img_question: ""
}

];