var lessonQuestions = [
{
question: "What is the value of x in the system 2x + y = 11 and y = x + 2?",
type: "algebra",
correct: "3",
variable: "x",
answerSuffix: "",
hint: "Substitute x + 2 for y in the first equation.",
steps: [
"Substitute y = x + 2 into 2x + y = 11.",
"2x + x + 2 = 11.",
"3x + 2 = 11.",
"3x = 9.",
"x = 3."
],
img_question: ""
},
{
question: "What is the value of y in the system 3x + 2y = 16 and x + 2y = 8?",
type: "algebra",
correct: "2",
variable: "y",
answerSuffix: "",
hint: "Subtract the second equation from the first to eliminate y.",
steps: [
"Subtract x + 2y = 8 from 3x + 2y = 16.",
"2x = 8.",
"x = 4.",
"Substitute x = 4 into x + 2y = 8.",
"4 + 2y = 8.",
"y = 2."
],
img_question: ""
},
{
question: "The graphs of y = 2x + 1 and y = −x + 7 intersect at one point. What is the x-coordinate of the intersection?",
type: "algebra",
correct: "2",
variable: "x",
answerSuffix: "",
hint: "At the intersection, the y-values are equal.",
steps: [
"Set the equations equal: 2x + 1 = −x + 7.",
"3x = 6.",
"x = 2."
],
img_question: ""
},
{
question: "For what value of k does the system y = 4x + 3 and y = 4x + k have infinitely many solutions?",
type: "arithmetic",
correct: "3",
variable: "",
answerSuffix: "",
hint: "Infinitely many solutions occur when both equations represent the same line.",
steps: [
"The slopes are both 4.",
"The y-intercepts must also be equal.",
"k = 3."
],
img_question: ""
},
{
question: "A cyclist travels 72 miles in 4 hours at a constant speed. What is the cyclist's speed?",
type: "arithmetic",
correct: "18",
variable: "",
answerSuffix: "mi/h",
hint: "Rate equals distance divided by time.",
steps: [
"Rate = 72 ÷ 4.",
"Rate = 18 miles per hour."
],
img_question: ""
},
{
question: "A machine completes a job in 4 hours, and another machine completes the same job in 6 hours. How many hours would they take to complete the job working together?",
type: "arithmetic",
correct: "2.4",
variable: "",
answerSuffix: "hours",
hint: "Add the fractions of the job each machine completes in one hour.",
steps: [
"The first machine completes 1 ÷ 4 = 0.25 of the job per hour.",
"The second machine completes 1 ÷ 6 = 0.1666... of the job per hour.",
"Their combined rate is 0.25 + 0.1666... = 0.4166... of the job per hour.",
"The time is 1 ÷ 0.4166... = 2.4 hours."
],
img_question: ""
},
{
question: "A parking garage charges $6 plus $2.50 per hour. If a driver parks for 4 hours, what is the total cost?",
type: "arithmetic",
correct: "16",
variable: "",
answerSuffix: "$",
hint: "Multiply the hourly cost by 4, then add the fixed fee.",
steps: [
"The hourly cost is 2.50(4) = 10 dollars.",
"The total cost is 6 + 10.",
"The total cost is 16 dollars."
],
img_question: ""
},
{
question: "A 20% solution is mixed with a 50% solution to make 30 liters of a 30% solution. How many liters of the 20% solution are needed?",
type: "algebra",
correct: "20",
variable: "x",
answerSuffix: "L",
hint: "Let x be the amount of the 20% solution and 30 − x the amount of the 50% solution.",
steps: [
"Let x be the liters of the 20% solution.",
"The amount of 50% solution is 30 − x liters.",
"The equation is 0.20x + 0.50(30 − x) = 0.30(30).",
"0.20x + 15 − 0.50x = 9.",
"−0.30x = −6.",
"x = 20."
],
img_question: ""
},
{
question: "The sum of three consecutive integers is 75. What is the largest integer?",
type: "algebra",
correct: "26",
variable: "x",
answerSuffix: "",
hint: "Let x be the smallest integer and write the other two as x + 1 and x + 2.",
steps: [
"Let x be the smallest integer.",
"The integers are x, x + 1, and x + 2.",
"x + (x + 1) + (x + 2) = 75.",
"3x + 3 = 75.",
"3x = 72.",
"x = 24.",
"The largest integer is 24 + 2 = 26."
],
img_question: ""
},
{
question: "A music service charges $10 per month plus a one-time $15 setup fee. If C is the total cost after m months, which equation models the cost?",
type: "algebra",
correct: "10m+15",
variable: "C",
answerSuffix: "$",
hint: "The monthly charge depends on m, while the setup fee is fixed.",
steps: [
"The monthly charge for m months is 10m dollars.",
"The fixed setup fee is $15.",
"The total cost is C = 10m + 15."
],
img_question: ""
}

];
