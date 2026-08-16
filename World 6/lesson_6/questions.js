const lessonQuestions = [
{
  question: "Simplify: (4x² + 3x − 7) − (x² − 5x + 2)",
  type: "algebra",
  correct: "3x^2 + 8x - 9",
  variable: "x",
  answerSuffix: "",
  hint: "Distribute the negative sign to every term in the second polynomial, then combine like terms.",
  steps: [
    "Distribute the negative sign: 4x² + 3x − 7 − x² + 5x − 2.",
    "Group like terms: (4x² − x²) + (3x + 5x) + (−7 − 2).",
    "Simplify: 3x² + 8x − 9."
  ],
  img_question: ""
},
{
  question: "Expand: (x + 6)(x − 3)",
  type: "algebra",
  correct: "x^2 + 3x - 18",
  variable: "x",
  answerSuffix: "",
  hint: "Multiply each term in the first binomial by each term in the second. Watch the signs.",
  steps: [
    "Multiply: x · x + x · (−3) + 6 · x + 6 · (−3).",
    "Simplify: x² − 3x + 6x − 18.",
    "Combine like terms: x² + 3x − 18."
  ],
  img_question: ""
},
{
  question: "Simplify: (x⁵ · x⁻²) ÷ x²",
  type: "algebra",
  correct: "x",
  variable: "x",
  answerSuffix: "",
  hint: "Apply the product rule in the numerator first by adding exponents, then apply the quotient rule.",
  steps: [
    "Apply the product rule: x⁵ · x⁻² = x⁵⁺⁽⁻²⁾ = x³.",
    "Apply the quotient rule: x³ ÷ x² = x³⁻² = x.",
    "Simplified result: x."
  ],
  img_question: ""
},
{
  question: "Evaluate: 125^(2/3)",
  type: "arithmetic",
  correct: "25",
  variable: "",
  answerSuffix: "",
  hint: "The denominator of the exponent is the root and the numerator is the power. Take the cube root first, then square.",
  steps: [
    "Rewrite: 125^(2/3) = (∛125)².",
    "Find the cube root: ∛125 = 5, since 5³ = 125.",
    "Raise to the power: 5² = 25."
  ],
  img_question: ""
},
{
  question: "Simplify: √72",
  type: "algebra",
  correct: "6\\sqrt{2}",
  variable: "",
  answerSuffix: "",
  hint: "Find the largest perfect square factor of 72.",
  steps: [
    "Find the largest perfect square factor of 72: 36 × 2 = 72.",
    "Apply the product rule: √72 = √36 × √2.",
    "Simplify: 6√2."
  ],
  img_question: ""
},
{
  question: "Solve for x: √(2x + 7) = 5",
  type: "arithmetic",
  correct: "9",
  variable: "",
  answerSuffix: "",
  hint: "Square both sides to remove the radical, then solve for x.",
  steps: [
    "Square both sides: 2x + 7 = 25.",
    "Subtract 7 from both sides: 2x = 18.",
    "Divide by 2: x = 9.",
    "Check: √(2(9) + 7) = √25 = 5. ✓"
  ],
  img_question: ""
},
{
  question: "A population of 3,000 grows at a rate of 8% per year. What will the population be after 2 years, rounded to the nearest whole number?",
  type: "arithmetic",
  correct: "3499",
  variable: "",
  answerSuffix: "",
  hint: "Use y = a(1 + r)ˣ with a = 3,000, r = 0.08, and x = 2.",
  steps: [
    "The growth factor is 1 + 0.08 = 1.08.",
    "Substitute x = 2: y = 3,000(1.08)².",
    "Calculate (1.08)² = 1.1664.",
    "Multiply: 3,000 × 1.1664 = 3,499.2.",
    "Rounded to the nearest whole number: 3,499."
  ],
  img_question: ""
},
{
  question: "A machine worth $10,000 depreciates at 20% per year. What is its value after 3 years?",
  type: "arithmetic",
  correct: "5120",
  variable: "",
  answerSuffix: "$",
  hint: "Use y = a(1 − r)ˣ with a = 10,000, r = 0.20, and x = 3.",
  steps: [
    "The decay factor is 1 − 0.20 = 0.80.",
    "Substitute x = 3: y = 10,000(0.80)³.",
    "Calculate (0.80)³ = 0.512.",
    "Multiply: 10,000 × 0.512 = 5,120.",
    "The machine's value after 3 years is $5,120."
  ],
  img_question: ""
},
{
  question: "Simplify (x² − 9) ÷ (x² + x − 6). What is the value of the simplified expression when x = 5?",
  type: "arithmetic",
  correct: "\\frac{2}{3}",
  variable: "",
  answerSuffix: "",
  hint: "Factor both the numerator and denominator completely, cancel common factors, then substitute x = 5.",
  steps: [
    "Factor the numerator: x² − 9 = (x − 3)(x + 3).",
    "Factor the denominator: x² + x − 6 = (x − 2)(x + 3).",
    "Cancel the common factor (x + 3): simplified expression is (x − 3) ÷ (x − 2).",
    "Substitute x = 5: (5 − 3) ÷ (5 − 2) = 2 ÷ 3.",
    "The value is 2/3."
  ],
  img_question: ""
},
{
  question: "Solve for x: 6 ÷ (x + 1) = 2",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Multiply both sides by (x + 1) to eliminate the fraction, then solve.",
  steps: [
    "Note the restriction: x ≠ −1.",
    "Multiply both sides by (x + 1): 6 = 2(x + 1).",
    "Distribute: 6 = 2x + 2.",
    "Subtract 2: 4 = 2x.",
    "Divide by 2: x = 2."
  ],
  img_question: ""
},

]