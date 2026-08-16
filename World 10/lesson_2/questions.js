const lessonQuestions = [
{
  question: "If g(x) = 4x − 3, what is g(5)?",
  type: "arithmetic",
  correct: "17",
  variable: "",
  answerSuffix: "",
  hint: "Substitute x = 5 into the function and simplify.",
  steps: [
    "Substitute x = 5 into g(x) = 4x − 3.",
    "g(5) = 4(5) − 3 = 20 − 3 = 17."
  ],
  img_question: ""
},
{
  question: "Solve for x: 5x − 4 = 21",
  type: "algebra",
  correct: "5",
  variable: "x",
  answerSuffix: "",
  hint: "Add 4 to both sides, then divide by 5.",
  steps: [
    "Add 4 to both sides: 5x = 25.",
    "Divide both sides by 5: x = 5."
  ],
  img_question: ""
},
{
  question: "What is the y-intercept of the line y = 6x − 9?",
  type: "arithmetic",
  correct: "-9",
  variable: "",
  answerSuffix: "",
  hint: "The y-intercept is the value of y when x = 0.",
  steps: [
    "Substitute x = 0: y = 6(0) − 9 = −9.",
    "The y-intercept is −9."
  ],
  img_question: ""
},
{
  question: "Factor: x² + 10x + 21",
  type: "algebra",
  correct: "(x + 3)(x + 7)",
  variable: "x",
  answerSuffix: "",
  hint: "Find two numbers that multiply to 21 and add to 10.",
  steps: [
    "Find two numbers that multiply to 21 and add to 10: 3 and 7.",
    "Write the factored form: (x + 3)(x + 7).",
    "Check: (x + 3)(x + 7) = x² + 10x + 21. ✓"
  ],
  img_question: ""
},
{
  question: "A triangle has a base of 12 cm and a height of 5 cm. What is its area?",
  type: "arithmetic",
  correct: "30",
  variable: "",
  answerSuffix: "cm²",
  hint: "Use A = bh ÷ 2.",
  steps: [
    "Substitute into A = bh ÷ 2: A = 12 × 5 ÷ 2.",
    "Simplify: A = 60 ÷ 2 = 30 cm²."
  ],
  img_question: ""
},
{
  question: "Simplify: x⁶ ÷ x²",
  type: "algebra",
  correct: "x^4",
  variable: "x",
  answerSuffix: "",
  hint: "When dividing powers with the same base, subtract the exponents.",
  steps: [
    "Apply the quotient rule: x⁶ ÷ x² = x⁶⁻².",
    "Simplify: x⁴."
  ],
  img_question: ""
},
{
  question: "Find the median of the data set: 9, 3, 7, 1, 5.",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Arrange the values from least to greatest, then find the middle value.",
  steps: [
    "Arrange in order: 1, 3, 5, 7, 9.",
    "The middle value is the third value: 5.",
    "The median is 5."
  ],
  img_question: ""
},
{
  question: "A cylinder has a radius of 3 cm and a height of 7 cm. What is its volume? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "63",
  variable: "",
  answerSuffix: "π cm³",
  hint: "Use V = πr²h. Square the radius first, then multiply by the height.",
  steps: [
    "Substitute into V = πr²h: V = π(3)²(7).",
    "Simplify: V = π(9)(7) = 63π cm³."
  ],
  img_question: ""
},
{
  question: "A fair coin is flipped twice. What is the probability of getting tails both times?",
  type: "arithmetic",
  correct: "\\frac{1}{4}",
  variable: "",
  answerSuffix: "",
  hint: "The flips are independent events. Multiply the probability of tails for each flip.",
  steps: [
    "P(tails) = 1/2 for each flip.",
    "P(tails and tails) = 1/2 × 1/2 = 1/4."
  ],
  img_question: ""
},
{
  question: "What is the distance between the points (0, 0) and (3, 4)?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Use the distance formula: d = √((x₂ − x₁)² + (y₂ − y₁)²).",
  steps: [
    "Substitute into the distance formula: d = √((3 − 0)² + (4 − 0)²).",
    "Simplify: d = √(9 + 16) = √25 = 5."
  ],
  img_question: ""
},

];