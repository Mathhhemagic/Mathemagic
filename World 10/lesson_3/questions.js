const lessonQuestions = [
{
  question: "If f(x) = x² − 3x + 2, what is f(−2)?",
  type: "arithmetic",
  correct: "12",
  variable: "",
  answerSuffix: "",
  hint: "Substitute x = −2 into the function. Use parentheses to keep the sign correct.",
  steps: [
    "Substitute x = −2 into f(x) = x² − 3x + 2.",
    "f(−2) = (−2)² − 3(−2) + 2 = 4 + 6 + 2 = 12."
  ],
  img_question: ""
},
{
  question: "Solve for x: (x + 3)/4 = 5",
  type: "algebra",
  correct: "17",
  variable: "x",
  answerSuffix: "",
  hint: "Multiply both sides by 4 first to eliminate the fraction, then solve.",
  steps: [
    "Multiply both sides by 4: x + 3 = 20.",
    "Subtract 3 from both sides: x = 17."
  ],
  img_question: ""
},
{
  question: "A line passes through (0, 4) and has a slope of −2. What is the equation of the line? What is the value of y when x = 3?",
  type: "arithmetic",
  correct: "-2",
  variable: "",
  answerSuffix: "",
  hint: "Write the equation using y = mx + b, then substitute x = 3.",
  steps: [
    "The equation is y = −2x + 4.",
    "Substitute x = 3: y = −2(3) + 4 = −6 + 4 = −2."
  ],
  img_question: ""
},
{
  question: "Solve for x: x² − 5x + 6 = 0. Enter the larger solution.",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "and x = 2",
  hint: "Factor the trinomial, then set each factor equal to zero.",
  steps: [
    "Factor: find two numbers that multiply to 6 and add to −5: −2 and −3.",
    "Factored form: (x − 2)(x − 3) = 0.",
    "Solve: x = 2 or x = 3.",
    "The larger solution is x = 3."
  ],
  img_question: ""
},
{
  question: "Two similar triangles have corresponding sides of 6 and 9. A side of the smaller triangle is 10. What is the corresponding side of the larger triangle?",
  type: "arithmetic",
  correct: "15",
  variable: "",
  answerSuffix: "",
  hint: "Find the scale factor first, then multiply.",
  steps: [
    "Scale factor = 9 ÷ 6 = 1.5.",
    "Corresponding side = 10 × 1.5 = 15."
  ],
  img_question: ""
},
{
  question: "The mean of five values is 14. Four of the values are 10, 12, 16, and 18. What is the fifth value?",
  type: "arithmetic",
  correct: "14",
  variable: "",
  answerSuffix: "",
  hint: "Total sum = mean × number of values. Subtract the known values from the total.",
  steps: [
    "Total sum = 14 × 5 = 70.",
    "Sum of known values: 10 + 12 + 16 + 18 = 56.",
    "Fifth value = 70 − 56 = 14."
  ],
  img_question: ""
},
{
  question: "A company's profit is modeled by P(x) = −x² + 14x − 40, where x is the number of items sold. How many items should be sold to maximize profit?",
  type: "arithmetic",
  correct: "7",
  variable: "",
  answerSuffix: "items",
  hint: "Use the axis of symmetry formula x = −b ÷ (2a) to find the maximum.",
  steps: [
    "Identify a = −1 and b = 14.",
    "Apply the formula: x = −14 ÷ (2 × −1) = −14 ÷ −2 = 7.",
    "The company should sell 7 items to maximize profit."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 6 and a central angle of 120°. What is the arc length? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "π",
  hint: "Use arc length = θ ÷ 360 × 2πr. Simplify 120/360 first.",
  steps: [
    "Simplify: 120/360 = 1/3.",
    "Substitute: arc length = 1/3 × 2π(6) = 1/3 × 12π = 4π."
  ],
  img_question: ""
},
{
  question: "The table shows survey results from 80 students. What is the probability that a randomly selected senior does not own a laptop?",
  type: "arithmetic",
  correct: "\\frac{1}{4}",
  variable: "",
  answerSuffix: "",
  hint: "This is a conditional probability. The denominator is the total number of seniors.",
  steps: [
    "Total seniors: 40.",
    "Seniors who do not own a laptop: 10.",
    "P(no laptop | senior) = 10/40 = 1/4."
  ],
  img_question: "A two-way table with row labels 'Juniors' and 'Seniors' and a 'Total' row. Column labels are 'Owns a Laptop', 'Does Not Own a Laptop', and 'Total'. Values: Juniors: 25, 15, 40. Seniors: 30, 10, 40. Total: 55, 25, 80. All labels and values are clearly shown."
},
{
  question: "A ball is thrown upward from the ground. Its height in feet is modeled by h(t) = −16t² + 48t. At what time does the ball reach its maximum height?",
  type: "arithmetic",
  correct: "\\frac{3}{2}",
  variable: "",
  answerSuffix: "seconds",
  hint: "Use the axis of symmetry formula t = −b ÷ (2a).",
  steps: [
    "Identify a = −16 and b = 48.",
    "Apply the formula: t = −48 ÷ (2 × −16) = −48 ÷ −32 = 3/2.",
    "The ball reaches its maximum height at t = 3/2 seconds."
  ],
  img_question: ""
},

];