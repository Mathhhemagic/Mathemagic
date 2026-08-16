const lessonQuestions = [
{
  question: "Evaluate: √144",
  type: "arithmetic",
  correct: "12",
  variable: "",
  answerSuffix: "",
  hint: "Ask yourself: what number multiplied by itself equals 144?",
  steps: [
    "Find the number that satisfies n × n = 144.",
    "12 × 12 = 144, so √144 = 12."
  ],
  img_question: ""
},
{
  question: "Simplify: √48",
  type: "algebra",
  correct: "4\\sqrt{3}",
  variable: "",
  answerSuffix: "",
  hint: "Look for the largest perfect square factor of 48.",
  steps: [
    "Find the largest perfect square factor of 48: 16 × 3 = 48.",
    "Apply the product rule: √48 = √16 × √3.",
    "Simplify: 4√3."
  ],
  img_question: ""
},
{
  question: "Simplify: √(50x²)",
  type: "algebra",
  correct: "5x\\sqrt{2}",
  variable: "x",
  answerSuffix: "",
  hint: "Separate the perfect square factors from the non-perfect-square factors, including the variable.",
  steps: [
    "Factor inside the radical: √(25 × 2 × x²).",
    "Apply the product rule: √25 × √(x²) × √2.",
    "Simplify: 5 × x × √2 = 5x√2."
  ],
  img_question: ""
},
{
  question: "Simplify: 4√3 + 7√3",
  type: "algebra",
  correct: "11\\sqrt{3}",
  variable: "",
  answerSuffix: "",
  hint: "Radicals with the same radical part can be added like like terms.",
  steps: [
    "The radical parts are the same: √3.",
    "Add the coefficients: 4 + 7 = 11.",
    "Result: 11√3."
  ],
  img_question: ""
},
{
  question: "Simplify: √50 + √8",
  type: "algebra",
  correct: "7\\sqrt{2}",
  variable: "",
  answerSuffix: "",
  hint: "Simplify each radical first, then check if the radical parts match.",
  steps: [
    "Simplify √50: √(25 × 2) = 5√2.",
    "Simplify √8: √(4 × 2) = 2√2.",
    "Add: 5√2 + 2√2 = 7√2."
  ],
  img_question: ""
},
{
  question: "Solve for x: √x = 9",
  type: "arithmetic",
  correct: "81",
  variable: "",
  answerSuffix: "",
  hint: "Square both sides to remove the radical.",
  steps: [
    "Square both sides: (√x)² = 9².",
    "Simplify: x = 81.",
    "Check: √81 = 9. ✓"
  ],
  img_question: ""
},
{
  question: "Solve for x: √(x − 5) = 4",
  type: "arithmetic",
  correct: "21",
  variable: "",
  answerSuffix: "",
  hint: "The radical is already isolated. Square both sides, then solve for x.",
  steps: [
    "Square both sides: (√(x − 5))² = 4².",
    "Simplify: x − 5 = 16.",
    "Solve: x = 21.",
    "Check: √(21 − 5) = √16 = 4. ✓"
  ],
  img_question: ""
},
{
  question: "Evaluate: 64^(1/3)",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "",
  hint: "An exponent of 1/3 means take the cube root.",
  steps: [
    "Rewrite using root notation: 64^(1/3) = ∛64.",
    "Find the cube root: ∛64 = 4, since 4³ = 64."
  ],
  img_question: ""
},
{
  question: "Evaluate: 32^(2/5)",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "",
  hint: "Take the fifth root first, then raise to the second power.",
  steps: [
    "Rewrite: 32^(2/5) = (⁵√32)².",
    "Find the fifth root: ⁵√32 = 2, since 2⁵ = 32.",
    "Raise to the power: 2² = 4."
  ],
  img_question: ""
},
{
  question: "Solve for x: √(x + 3) = x − 3",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "",
  hint: "Square both sides to remove the radical, then solve the resulting quadratic. Check both solutions in the original equation.",
  steps: [
    "Square both sides: x + 3 = (x − 3)².",
    "Expand the right side: x + 3 = x² − 6x + 9.",
    "Rearrange: x² − 7x + 6 = 0.",
    "Factor: (x − 1)(x − 6) = 0.",
    "Solutions: x = 1 or x = 6.",
    "Check x = 1: √(1 + 3) = √4 = 2, but 1 − 3 = −2. Since 2 ≠ −2, x = 1 is extraneous.",
    "Check x = 6: √(6 + 3) = √9 = 3, and 6 − 3 = 3.",
    "The only valid solution is x = 6."
  ],
  img_question: ""
},


];