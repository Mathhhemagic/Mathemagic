var lessonQuestions = [
{
  question: "Solve the system by substitution. What is the value of x?\ny = 2x − 1\nx + y = 8",
  type: "algebra",
  correct: "3",
  variable: "x",
  answerSuffix: "",
  hint: "Since y is already isolated, substitute the expression for y directly into the second equation.",
  steps: [
    "Substitute y = 2x − 1 into x + y = 8.",
    "x + (2x − 1) = 8",
    "Combine like terms: 3x − 1 = 8",
    "Add 1 to both sides: 3x = 9",
    "Divide both sides by 3: x = 3"
  ],
  img_question: ""
},
{
  question: "Solve the system by substitution. What is the value of y?\nx = y + 4\n3x − 2y = 17",
  type: "algebra",
  correct: "5",
  variable: "y",
  answerSuffix: "",
  hint: "Substitute the expression for x from the first equation into the second equation.",
  steps: [
    "Substitute x = y + 4 into 3x − 2y = 17.",
    "3(y + 4) − 2y = 17",
    "Distribute: 3y + 12 − 2y = 17",
    "Combine like terms: y + 12 = 17",
    "Subtract 12 from both sides: y = 5"
  ],
  img_question: ""
},
{
  question: "Solve the system by elimination. What is the value of y?\n2x + y = 11\n2x − y = 5",
  type: "algebra",
  correct: "3",
  variable: "y",
  answerSuffix: "",
  hint: "Subtract the second equation from the first to cancel the x-terms.",
  steps: [
    "Subtract the second equation from the first: (2x + y) − (2x − y) = 11 − 5",
    "Simplify: 2y = 6",
    "Divide both sides by 2: y = 3"
  ],
  img_question: ""
},
{
  question: "Solve the system by elimination. What is the value of x?\n3x + 2y = 20\nx + y = 8",
  type: "algebra",
  correct: "4",
  variable: "x",
  answerSuffix: "",
  hint: "Multiply the second equation so the y-coefficients match, then subtract.",
  steps: [
    "Multiply the second equation by 2: 2x + 2y = 16",
    "Subtract from the first equation: (3x + 2y) − (2x + 2y) = 20 − 16",
    "Simplify: x = 4"
  ],
  img_question: ""
},
{
  question: "Solve the system and find the value of x + y.\ny = 3x − 2\n2x + y = 13",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "",
  hint: "Solve the system first, then add the two values together.",
  steps: [
    "Substitute y = 3x − 2 into 2x + y = 13.",
    "2x + (3x − 2) = 13",
    "Combine like terms: 5x − 2 = 13",
    "Add 2 to both sides: 5x = 15",
    "Divide both sides by 5: x = 3",
    "Find y: y = 3(3) − 2 = 7",
    "x + y = 3 + 7 = 10"
  ],
  img_question: ""
},
{
  question: "Solve the system by elimination. What is the value of y?\n3x + 4y = 24\n2x + 3y = 17",
  type: "algebra",
  correct: "3",
  variable: "y",
  answerSuffix: "",
  hint: "Multiply both equations to match the x-coefficients, then subtract to eliminate x.",
  steps: [
    "Multiply the first equation by 2: 6x + 8y = 48",
    "Multiply the second equation by 3: 6x + 9y = 51",
    "Subtract the first result from the second: (6x + 9y) − (6x + 8y) = 51 − 48",
    "Simplify: y = 3"
  ],
  img_question: ""
},
{
  question: "The lines y = 2x − 1 and y = −x + 5 are graphed on the same coordinate plane. What is the x-coordinate of their intersection?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Set the two expressions for y equal to each other and solve for x.",
  steps: [
    "Set the equations equal: 2x − 1 = −x + 5",
    "Add x to both sides: 3x − 1 = 5",
    "Add 1 to both sides: 3x = 6",
    "Divide both sides by 3: x = 2"
  ],
  img_question: ""
},
{
  question: "How many solutions does the following system have?\ny = 4x + 3\ny = 4x − 1\nEnter 0 for no solution, 1 for one solution, or 2 for infinitely many.",
  type: "arithmetic",
  correct: "0",
  variable: "",
  answerSuffix: "",
  hint: "Compare the slopes and y-intercepts of the two lines.",
  steps: [
    "Both equations are in slope-intercept form.",
    "Both lines have slope 4, but different y-intercepts (3 and −1).",
    "Lines with the same slope and different y-intercepts are parallel and never intersect.",
    "The system has no solution."
  ],
  img_question: ""
},
{
  question: "The sum of two numbers is 30, and one number is twice the other. What is the larger number?",
  type: "arithmetic",
  correct: "20",
  variable: "",
  answerSuffix: "",
  hint: "Write a system of two equations using the two conditions, then solve by substitution.",
  steps: [
    "Let x = the smaller number and y = the larger number.",
    "Set up the system: x + y = 30 and y = 2x",
    "Substitute y = 2x into the first equation: x + 2x = 30",
    "Combine like terms: 3x = 30",
    "Divide both sides by 3: x = 10",
    "Find y: y = 2(10) = 20",
    "The larger number is 20."
  ],
  img_question: ""
},
{
  question: "Adult tickets cost $12 and child tickets cost $8. A group buys 5 adult tickets and 3 child tickets for $84. Another group buys 3 adult tickets and 5 child tickets. How much does the second group pay?",
  type: "arithmetic",
  correct: "76",
  variable: "",
  answerSuffix: "$",
  hint: "Use the first group's purchase to confirm ticket prices, then calculate the second group's total.",
  steps: [
    "Set up the system: 5a + 3c = 84 and verify with a = 12, c = 8.",
    "Check: 5(12) + 3(8) = 60 + 24 = 84. ✓",
    "Calculate the second group's total: 3(12) + 5(8) = 36 + 40 = 76",
    "The second group pays $76."
  ],
  img_question: ""
},
];
