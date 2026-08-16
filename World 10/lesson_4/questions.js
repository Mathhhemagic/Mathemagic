const lessonQuestions = [
{
  question: "If f(x) = 3x² − 2x + 1, what is f(−1)?",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "",
  hint: "Substitute x = −1 into the function. Use parentheses to keep the sign correct.",
  steps: [
    "Substitute x = −1 into f(x) = 3x² − 2x + 1.",
    "f(−1) = 3(−1)² − 2(−1) + 1 = 3 + 2 + 1 = 6."
  ],
  img_question: ""
},
{
  question: "Solve the system of equations: y = 2x + 1 and y = −x + 7. What is the value of x?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Set the two expressions for y equal to each other and solve for x.",
  steps: [
    "Set equal: 2x + 1 = −x + 7.",
    "Add x to both sides: 3x + 1 = 7.",
    "Subtract 1: 3x = 6.",
    "Divide by 3: x = 2."
  ],
  img_question: ""
},
{
  question: "A line has a slope of 3 and passes through the point (2, 7). What is the y-intercept?",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "",
  hint: "Use y = mx + b. Substitute the slope and the point to solve for b.",
  steps: [
    "Substitute m = 3, x = 2, and y = 7 into y = mx + b.",
    "7 = 3(2) + b.",
    "7 = 6 + b.",
    "b = 1."
  ],
  img_question: ""
},
{
  question: "Solve for x: √(3x + 1) = 7",
  type: "arithmetic",
  correct: "16",
  variable: "",
  answerSuffix: "",
  hint: "Square both sides to remove the radical, then solve for x.",
  steps: [
    "Square both sides: 3x + 1 = 49.",
    "Subtract 1: 3x = 48.",
    "Divide by 3: x = 16.",
    "Check: √(3(16) + 1) = √49 = 7. ✓"
  ],
  img_question: ""
},
{
  question: "The graph shows a parabola with vertex at (3, −4) that opens upward. How many x-intercepts does the parabola have?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "The vertex is below the x-axis and the parabola opens upward. Think about how many times it crosses the x-axis.",
  steps: [
    "The vertex is at (3, −4), which is below the x-axis.",
    "Since the parabola opens upward, it must cross the x-axis twice.",
    "The parabola has 2 x-intercepts."
  ],
  img_question: ""
},
{
  question: "A machine costs $15,000 and loses 10% of its value each year. What is its value after 2 years?",
  type: "arithmetic",
  correct: "12150",
  variable: "",
  answerSuffix: "$",
  hint: "Use y = a(1 − r)ˣ with a = 15,000, r = 0.10, and x = 2.",
  steps: [
    "Decay factor: 1 − 0.10 = 0.90.",
    "Substitute x = 2: y = 15,000(0.90)².",
    "Calculate (0.90)² = 0.81.",
    "Multiply: 15,000 × 0.81 = 12,150."
  ],
  img_question: ""
},
{
  question: "Simplify: (2x³)(3x⁴)",
  type: "algebra",
  correct: "6x⁷",
  variable: "x",
  answerSuffix: "",
  hint: "Multiply the coefficients and add the exponents.",
  steps: [
    "Multiply the coefficients: 2 × 3 = 6.",
    "Add the exponents: x³ × x⁴ = x³⁺⁴ = x⁷.",
    "Result: 6x⁷."
  ],
  img_question: ""
},
{
  question: "A right triangle has a 30° angle and a hypotenuse of 18. What is the length of the side opposite the 30° angle?",
  type: "arithmetic",
  correct: "9",
  variable: "",
  answerSuffix: "",
  hint: "In a 30°-60°-90° triangle, the side opposite 30° is half the hypotenuse.",
  steps: [
    "The side opposite 30° = hypotenuse ÷ 2.",
    "Side = 18 ÷ 2 = 9."
  ],
  img_question: ""
},
{
  question: "The scatterplot shows a line of best fit with equation y = 2x + 5. A data point is at (6, 20). How far above the line of best fit is this point?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Use the equation to find the predicted y-value at x = 6, then subtract from the actual value.",
  steps: [
    "Predicted value at x = 6: y = 2(6) + 5 = 17.",
    "Actual value: 20.",
    "Difference: 20 − 17 = 3.",
    "The point is 3 units above the line of best fit."
  ],
  img_question: ""
},
{
  question: "The two-way table shows data from 200 students. What percentage of freshmen prefer math?",
  type: "arithmetic",
  correct: "40",
  variable: "",
  answerSuffix: "%",
  hint: "Divide the number of freshmen who prefer math by the total number of freshmen, then multiply by 100.",
  steps: [
    "Freshmen who prefer math: 48.",
    "Total freshmen: 120.",
    "48 ÷ 120 = 0.40 = 40%."
  ],
  img_question: "A two-way table with row labels 'Freshmen' and 'Sophomores' and a 'Total' row. Column labels are 'Math', 'English', and 'Total'. Values: Freshmen: 48, 72, 120. Sophomores: 32, 48, 80. Total: 80, 120, 200. All labels and values are clearly shown."
},
];