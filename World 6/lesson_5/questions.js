const lessonQuestions = [
{
  question: "Simplify: (x² + 6x + 8) ÷ (x + 2)",
  type: "algebra",
  correct: "x + 4",
  variable: "x",
  answerSuffix: "",
  hint: "Factor the numerator, then cancel any common factors with the denominator.",
  steps: [
    "Factor the numerator: x² + 6x + 8 = (x + 2)(x + 4).",
    "Write the expression: (x + 2)(x + 4) ÷ (x + 2).",
    "Cancel the common factor (x + 2): result is x + 4."
  ],
  img_question: ""
},
{
  question: "Simplify: (x² − x − 6) ÷ (x − 3)",
  type: "algebra",
  correct: "x + 2",
  variable: "x",
  answerSuffix: "",
  hint: "Factor the numerator into two binomials, then cancel the common factor.",
  steps: [
    "Factor the numerator: x² − x − 6 = (x − 3)(x + 2).",
    "Write the expression: (x − 3)(x + 2) ÷ (x − 3).",
    "Cancel the common factor (x − 3): result is x + 2."
  ],
  img_question: ""
},
{
  question: "What is the restriction on the expression (x + 5) ÷ (x − 7)?",
  type: "arithmetic",
  correct: "7",
  variable: "",
  answerSuffix: "≠ x",
  hint: "Set the denominator equal to zero and solve. The restriction is the value x cannot equal.",
  steps: [
    "Set the denominator equal to zero: x − 7 = 0.",
    "Solve: x = 7.",
    "The restriction is x ≠ 7."
  ],
  img_question: ""
},
{
  question: "Simplify (x² − 9) ÷ (x − 3). What value of x is still a restriction on the simplified expression?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "≠ x",
  hint: "Find the restriction from the original denominator before simplifying.",
  steps: [
    "Find the restriction from the original denominator: x − 3 = 0, so x ≠ 3.",
    "Factor the numerator: x² − 9 = (x − 3)(x + 3).",
    "Cancel the common factor (x − 3): the simplified expression is x + 3.",
    "Even though (x − 3) was canceled, x = 3 is still a restriction from the original denominator."
  ],
  img_question: ""
},
{
  question: "Solve for x: 5 ÷ x = 10",
  type: "arithmetic",
  correct: "\\frac{1}{2}",
  variable: "",
  answerSuffix: "",
  hint: "Multiply both sides by x to eliminate the fraction, then solve.",
  steps: [
    "Note the restriction: x ≠ 0.",
    "Multiply both sides by x: 5 = 10x.",
    "Divide both sides by 10: x = 1/2.",
    "Check: 5 ÷ (1/2) = 10. ✓"
  ],
  img_question: ""
},
{
  question: "Solve for x: 3 ÷ x + 2 = 5",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "",
  hint: "Isolate the rational term first, then multiply both sides by x.",
  steps: [
    "Note the restriction: x ≠ 0.",
    "Subtract 2 from both sides: 3 ÷ x = 3.",
    "Multiply both sides by x: 3 = 3x.",
    "Divide both sides by 3: x = 1.",
    "Check: 3 ÷ 1 + 2 = 3 + 2 = 5. ✓"
  ],
  img_question: ""
},
{
  question: "Solve for x: 1 ÷ x + 1 ÷ 3 = 5 ÷ 6",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Multiply every term by the least common denominator to eliminate all fractions.",
  steps: [
    "Note the restriction: x ≠ 0.",
    "The least common denominator of x, 3, and 6 is 6x.",
    "Multiply every term by 6x: 6 + 2x = 5x.",
    "Subtract 2x from both sides: 6 = 3x.",
    "Divide by 3: x = 2.",
    "Check: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. ✓"
  ],
  img_question: ""
},
{
  question: "Simplify (3x² + 6x) ÷ (x² + 4x + 4). What is the value of the expression when x = 5?",
  type: "arithmetic",
  correct: "\\frac{15}{7}",
  variable: "",
  answerSuffix: "",
  hint: "Simplify the rational expression first, then substitute x = 5.",
  steps: [
    "Factor the numerator: 3x² + 6x = 3x(x + 2).",
    "Factor the denominator: x² + 4x + 4 = (x + 2)(x + 2).",
    "Cancel one common factor of (x + 2): simplified expression is 3x ÷ (x + 2).",
    "Substitute x = 5: 3(5) ÷ (5 + 2) = 15 ÷ 7 = 15/7."
  ],
  img_question: ""
},
{
  question: "Solve for x: 4 ÷ (x − 1) = 2",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Multiply both sides by (x − 1) to eliminate the fraction, then solve.",
  steps: [
    "Note the restriction: x ≠ 1.",
    "Multiply both sides by (x − 1): 4 = 2(x − 1).",
    "Distribute: 4 = 2x − 2.",
    "Add 2 to both sides: 6 = 2x.",
    "Divide by 2: x = 3.",
    "Check: 4 ÷ (3 − 1) = 4 ÷ 2 = 2. ✓"
  ],
  img_question: ""
},
{
  question: "Simplify (x² + 2x − 8) ÷ (x² − 4). Enter the positive restriction on the simplified expression.",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "and x ≠ −2",
  hint: "Factor both the numerator and denominator completely. Find restrictions from the original denominator before canceling.",
  steps: [
    "Find restrictions from the original denominator: x² − 4 = 0 gives (x − 2)(x + 2) = 0, so x ≠ 2 and x ≠ −2.",
    "Factor the numerator: x² + 2x − 8 = (x + 4)(x − 2).",
    "Factor the denominator: x² − 4 = (x − 2)(x + 2).",
    "Cancel the common factor (x − 2): result is (x + 4) ÷ (x + 2).",
    "The simplified expression is (x + 4) ÷ (x + 2), with restrictions x ≠ 2 and x ≠ −2.",
    "The positive restriction is x ≠ 2."
  ],
  img_question: ""
},


]