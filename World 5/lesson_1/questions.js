var lessonQuestions = [
{
  question: "Factor out the GCF: 9x² + 15x",
  type: "algebra",
  correct: "3x(3x + 5)",
  variable: "x",
  answerSuffix: "",
  hint: "The GCF includes both a number and a variable.",
  steps: [
    "Identify the GCF of 9x² and 15x: GCF = 3x.",
    "Divide each term by 3x: 9x² ÷ 3x = 3x and 15x ÷ 3x = 5.",
    "Write the factored form: 3x(3x + 5).",
  ],
  img_question: ""
},
{
  question: "Factor: x² − 36",
  type: "algebra",
  correct: "(x − 6)(x + 6)",
  variable: "x",
  answerSuffix: "",
  hint: "Recognize this as a difference of squares: a² − b² = (a − b)(a + b).",
  steps: [
    "Write x² − 36 as x² − 6².",
    "Apply the difference of squares pattern: (a − b)(a + b).",
    "Factored form: (x − 6)(x + 6).",
  ],
  img_question: ""
},
{
  question: "Solve for x: x² + 7x + 10 = 0",
  type: "arithmetic",
  correct: "-2",
  variable: "",
  answerSuffix: "and x = -5",
  hint: "Find two numbers that multiply to 10 and add to 7, then set each factor equal to zero.",
  steps: [
    "Factor: find two numbers that multiply to 10 and add to 7: 2 and 5.",
    "Write the factored form: (x + 2)(x + 5) = 0.",
    "Set each factor equal to zero: x + 2 = 0 or x + 5 = 0.",
    "Solve: x = −2 or x = −5."
  ],
  img_question: ""
},
{
  question: "Solve for x: x² − 3x − 18 = 0",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "and x = -3",
  hint: "Find two numbers that multiply to −18 and add to −3.",
  steps: [
    "Factor: find two numbers that multiply to −18 and add to -3: -6 and 3.",
    "Write the factored form: (x + 3)(x − 6) = 0.",
    "Set each factor equal to zero: x + 3 = 0 or x − 6 = 0.",
    "Solve: x = −3 or x = 6.",
    "Enter the positive solution: x = 6."
  ],
  img_question: ""
},
{
  question: "Solve for x: x² = 81",
  type: "arithmetic",
  correct: "9",
  variable: "",
  answerSuffix: "and x = -9",
  hint: "Take the square root of both sides. Don't forget the ± sign.",
  steps: [
    "Take the square root of both sides: x = ±√81.",
    "Simplify: x = ±9.",
    "Solutions: x = 9 or x = −9.",
    "Enter the positive solution: x = 9."
  ],
  img_question: ""
},
{
  question: "Solve for x: (x + 2)² = 49",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "and x = -9",
  hint: "Take the square root of both sides, then solve for x.",
  steps: [
    "Take the square root of both sides: x + 2 = ±7.",
    "Solve x + 2 = 7: x = 5.",
    "Solve x + 2 = −7: x = −9.",
    "Solutions: x = 5 or x = −9.",
    "Enter the positive solution: x = 5."
  ],
  img_question: ""
},
{
  question: "Solve for x by completing the square: x² + 8x = 9",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "and x = -9",
  hint: "Add (8 ÷ 2)² = 16 to both sides to create a perfect square trinomial.",
  steps: [
    "Add (8 ÷ 2)² = 16 to both sides: x² + 8x + 16 = 9 + 16 = 25.",
    "Write the left side as a perfect square: (x + 4)² = 25.",
    "Take the square root of both sides: x + 4 = ±5.",
    "Solve: x = 1 or x = −9.",
    "Enter the positive solution: x = 1."
  ],
  img_question: ""
},
{
  question: "Use the quadratic formula to solve: x² + 4x − 12 = 0",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "and x = -6",
  hint: "Identify a = 1, b = 4, c = −12, then substitute into x = (−b ± √(b² − 4ac)) ÷ 2a.",
  steps: [
    "Identify a = 1, b = 4, c = −12.",
    "Compute the discriminant: b² − 4ac = 16 − 4(1)(−12) = 16 + 48 = 64.",
    "Apply the quadratic formula: x = (−4 ± √64) ÷ 2 = (−4 ± 8) ÷ 2.",
    "Solve: x = (−4 + 8) ÷ 2 = 2 or x = (−4 − 8) ÷ 2 = −6.",
    "Enter the positive solution: x = 2."
  ],
  img_question: ""
},
{
  question: "How many real solutions does x² − 6x + 9 = 0 have?",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "",
  hint: "Compute the discriminant b² − 4ac. Its value tells you how many real solutions exist.",
  steps: [
    "Identify a = 1, b = −6, c = 9.",
    "Compute the discriminant: b² − 4ac = (−6)² − 4(1)(9) = 36 − 36 = 0.",
    "A discriminant of 0 means the equation has exactly one real solution.",
    "Additionally, you can graph the function and see how many times the graph cross the x-axis."
  ],
  img_question: ""
},
{
  question: "A ball is launched upward and its height in feet is modeled by h(t) = −t² + 6t − 5, where t is time in seconds. At what positive value of t does the ball hit the ground, after it is launched at t = 1 seconds?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "seconds",
  hint: "The ball hits the ground when h(t) = 0. Set −t² + 6t − 5 = 0 and solve for t.",
  steps: [
    "Set h(t) = 0: −t² + 6t − 5 = 0.",
    "Multiply both sides by −1: t² − 6t + 5 = 0.",
    "Factor: find two numbers that multiply to 5 and add to −6: −1 and −5.",
    "Factored form: (t − 1)(t − 5) = 0.",
    "Solutions: t = 1 or t = 5.",
    "The ball is launched at t = 1 (first leaves the ground) and hits the ground at t = 5 seconds."
  ],
  img_question: ""
},


];
