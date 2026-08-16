var lessonQuestions = [
{
  question: "Simplify: (3x² + 5x − 2) + (x² + 4x + 7)",
  type: "algebra",
  correct: "4x^2 + 9x + 5",
  variable: "x",
  answerSuffix: "",
  hint: "Combine like terms: match x² terms, x terms, and constants separately.",
  steps: [
    "Group like terms: (3x² + x²) + (5x + 4x) + (−2 + 7).",
    "Simplify each group: 4x² + 9x + 5."
  ],
  img_question: ""
},
{
  question: "Simplify: (6x² − 2x + 4) − (3x² + x − 5)",
  type: "algebra",
  correct: "3x^2 - 3x + 9",
  variable: "x",
  answerSuffix: "",
  hint: "Distribute the negative sign to every term in the second polynomial before combining like terms.",
  steps: [
    "Distribute the negative sign: 6x² − 2x + 4 − 3x² − x + 5.",
    "Group like terms: (6x² − 3x²) + (−2x − x) + (4 + 5).",
    "Simplify: 3x² − 3x + 9."
  ],
  img_question: ""
},
{
  question: "Simplify: (2x² + 7x − 1) − (x² − 3x + 4)",
  type: "algebra",
  correct: "x^2 + 10x - 5",
  variable: "x",
  answerSuffix: "",
  hint: "Be careful with signs when distributing the negative — every term in the second polynomial changes sign.",
  steps: [
    "Distribute the negative sign: 2x² + 7x − 1 − x² + 3x − 4.",
    "Group like terms: (2x² − x²) + (7x + 3x) + (−1 − 4).",
    "Simplify: x² + 10x − 5."
  ],
  img_question: ""
},
{
  question: "Expand: 4x(x + 6)",
  type: "algebra",
  correct: "4x^2 + 24x",
  variable: "x",
  answerSuffix: "",
  hint: "Multiply 4x by each term inside the parentheses.",
  steps: [
    "Distribute 4x: 4x · x + 4x · 6.",
    "Simplify: 4x² + 24x."
  ],
  img_question: ""
},
{
  question: "Expand: x²(x − 7)",
  type: "algebra",
  correct: "x^3 - 7x^2",
  variable: "x",
  answerSuffix: "",
  hint: "When multiplying powers with the same base, add the exponents.",
  steps: [
    "Distribute x²: x² · x + x² · (−7).",
    "Simplify using exponent rules: x³ − 7x²."
  ],
  img_question: ""
},
{
  question: "Expand: (x + 4)(x + 9)",
  type: "algebra",
  correct: "x^2 + 13x + 36",
  variable: "x",
  answerSuffix: "",
  hint: "Multiply each term in the first binomial by each term in the second binomial.",
  steps: [
    "Multiply: x · x + x · 9 + 4 · x + 4 · 9.",
    "Simplify each product: x² + 9x + 4x + 36.",
    "Combine like terms: x² + 13x + 36."
  ],
  img_question: ""
},
{
  question: "Expand: (x − 3)(x + 8)",
  type: "algebra",
  correct: "x^2 + 5x - 24",
  variable: "x",
  answerSuffix: "",
  hint: "Multiply each term in the first binomial by each term in the second. Watch the signs carefully.",
  steps: [
    "Multiply: x · x + x · 8 + (−3) · x + (−3) · 8.",
    "Simplify: x² + 8x − 3x − 24.",
    "Combine like terms: x² + 5x − 24."
  ],
  img_question: ""
},
{
  question: "Factor completely: 5x² + 10x",
  type: "algebra",
  correct: "5x(x + 2)",
  variable: "x",
  answerSuffix: "",
  hint: "Look for the greatest common factor of both terms before factoring.",
  steps: [
    "Identify the GCF of 5x² and 10x: GCF = 5x.",
    "Divide each term by 5x: 5x² ÷ 5x = x and 10x ÷ 5x = 2.",
    "Write the factored form: 5x(x + 2).",
    "Check: 5x(x + 2) = 5x² + 10x. ✓"
  ],
  img_question: ""
},
{
  question: "Factor: x² + 2x − 15",
  type: "algebra",
  correct: "(x - 3)(x + 5)",
  variable: "x",
  answerSuffix: "",
  hint: "Find two numbers that multiply to −15 and add to 2.",
  steps: [
    "Find two numbers that multiply to −15 and add to 2: −3 and 5.",
    "Write the factored form: (x − 3)(x + 5).",
    "Check: (x − 3)(x + 5) = x² + 5x − 3x − 15 = x² + 2x − 15. ✓"
  ],
  img_question: ""
},
{
  question: "Which of the following is equivalent to (2x + 3)² − (x + 1)(x − 4)? Enter the coefficient of x in the simplified expression.",
  type: "arithmetic",
  correct: "15",
  variable: "",
  answerSuffix: "",
  hint: "Expand each part separately, then subtract and combine like terms.",
  steps: [
    "Expand (2x + 3)²: (2x + 3)(2x + 3) = 4x² + 12x + 9.",
    "Expand (x + 1)(x − 4): x² − 4x + x − 4 = x² − 3x − 4.",
    "Subtract: (4x² + 12x + 9) − (x² − 3x − 4).",
    "Distribute the negative sign: 4x² + 12x + 9 − x² + 3x + 4.",
    "Combine like terms: 3x² + 15x + 13.",
    "The coefficient of x is 15."
  ],
  img_question: ""
},



];
