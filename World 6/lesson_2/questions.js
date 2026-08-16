const lessonQuestions = [
 {
  question: "Simplify: x⁴ × x³",
  type: "algebra",
  correct: "x^7",
  variable: "x",
  answerSuffix: "",
  hint: "When multiplying powers with the same base, add the exponents.",
  steps: [
    "Apply the product rule: x⁴ × x³ = x⁴⁺³.",
    "Simplify: x⁷."
  ],
  img_question: ""
},
{
  question: "Simplify: x⁸ ÷ x³",
  type: "algebra",
  correct: "x^5",
  variable: "x",
  answerSuffix: "",
  hint: "When dividing powers with the same base, subtract the exponents.",
  steps: [
    "Apply the quotient rule: x⁸ ÷ x³ = x⁸⁻³.",
    "Simplify: x⁵."
  ],
  img_question: ""
},
{
  question: "Simplify: (x⁴)²",
  type: "algebra",
  correct: "x^8",
  variable: "x",
  answerSuffix: "",
  hint: "When raising a power to a power, multiply the exponents.",
  steps: [
    "Apply the power rule: (x⁴)² = x⁴ˣ².",
    "Simplify: x⁸."
  ],
  img_question: ""
},
{
  question: "Evaluate: 2⁻⁴",
  type: "arithmetic",
  correct: "\\frac{1}{16}",
  variable: "",
  answerSuffix: "",
  hint: "A negative exponent means take the reciprocal of the base raised to the positive exponent.",
  steps: [
    "Apply the negative exponent rule: 2⁻⁴ = 1 ÷ 2⁴.",
    "Evaluate the denominator: 2⁴ = 16.",
    "Result: 1/16."
  ],
  img_question: ""
},
{
  question: "Simplify: (3x²)³",
  type: "algebra",
  correct: "27x^6",
  variable: "x",
  answerSuffix: "",
  hint: "Apply the exponent to each factor inside the parentheses separately.",
  steps: [
    "Apply the power to each factor: 3³ × (x²)³.",
    "Simplify: 27 × x²ˣ³ = 27x⁶."
  ],
  img_question: ""
},
{
  question: "Evaluate: 27^(1/3)",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "A fractional exponent with denominator 3 means take the cube root.",
  steps: [
    "Rewrite using root notation: 27^(1/3) = ³√27.",
    "Find the cube root: ³√27 = 3, since 3³ = 27."
  ],
  img_question: ""
},
{
  question: "Evaluate: 16^(3/4)",
  type: "arithmetic",
  correct: "8",
  variable: "",
  answerSuffix: "",
  hint: "Take the root first, then raise to the power. The denominator is the root and the numerator is the power.",
  steps: [
    "Rewrite: 16^(3/4) = (⁴√16)³.",
    "Find the fourth root: ⁴√16 = 2, since 2⁴ = 16.",
    "Raise to the power: 2³ = 8."
  ],
  img_question: ""
},
{
  question: "Write 0.000047 in scientific notation. Enter the number that multiplies the power of 10.",
  type: "arithmetic",
  correct: "4.7",
  variable: "",
  answerSuffix: "× 10⁻⁵",
  hint: "Move the decimal point until you have a number between 1 and 10. Count the number of places moved.",
  steps: [
    "Move the decimal point 5 places to the right to get 4.7.",
    "Since the original number is less than 1, the exponent is negative.",
    "Scientific notation: 4.7 × 10⁻⁵."
  ],
  img_question: ""
},
{
  question: "Simplify: (x⁻³ × x⁵) ÷ x⁰",
  type: "algebra",
  correct: "x^2",
  variable: "x",
  answerSuffix: "",
  hint: "Apply the product rule in the numerator first, then remember what x⁰ equals.",
  steps: [
    "Apply the product rule in the numerator: x⁻³ × x⁵ = x⁻³⁺⁵ = x².",
    "Recall that x⁰ = 1 for any nonzero x.",
    "Divide: x² ÷ 1 = x²."
  ],
  img_question: ""
},
{
  question: "Two numbers are written in scientific notation: 3.0 × 10⁴ and 2.5 × 10³. What is their product? Enter the coefficient of the result written in scientific notation.",
  type: "arithmetic",
  correct: "7.5",
  variable: "",
  answerSuffix: "× 10⁷",
  hint: "Multiply the front numbers together, then add the exponents.",
  steps: [
    "Multiply the coefficients: 3.0 × 2.5 = 7.5.",
    "Add the exponents: 10⁴ × 10³ = 10⁴⁺³ = 10⁷.",
    "Result: 7.5 × 10⁷."
  ],
  img_question: ""
},


];