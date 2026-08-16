const lessonQuestions = [
{
  question: "Factor: x² + 11x + 24",
  type: "algebra",
  correct: "(x + 3)(x + 8)",
  variable: "x",
  answerSuffix: "",
  hint: "Find two numbers that multiply to 24 and add to 11.",
  steps: [
    "Find two numbers that multiply to 24 and add to 11: 3 and 8.",
    "Write the factored form: (x + 3)(x + 8).",
    "Check: (x + 3)(x + 8) = x² + 8x + 3x + 24 = x² + 11x + 24. ✓"
  ],
  img_question: ""
},
{
  question: "Factor: 4x² − 25",
  type: "algebra",
  correct: "(2x − 5)(2x + 5)",
  variable: "x",
  answerSuffix: "",
  hint: "Recognize this as a difference of squares: a² − b² = (a − b)(a + b).",
  steps: [
    "Write 4x² − 25 as (2x)² − 5².",
    "Apply the difference of squares pattern: (2x − 5)(2x + 5).",
    "Check: (2x − 5)(2x + 5) = 4x² − 25"
  ],
  img_question: ""
},
{
  question: "Solve for x: x² − 4x − 12 = 0. Enter the positive solution.",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "and x = −2",
  hint: "Factor the trinomial, then set each factor equal to zero.",
  steps: [
    "Find two numbers that multiply to −12 and add to −4: −6 and 2.",
    "Factor: (x − 6)(x + 2) = 0.",
    "Set each factor equal to zero: x = 6 or x = −2.",
    "The positive solution is x = 6."
  ],
  img_question: ""
},
{
  question: "Solve for x: (x − 5)² = 36. Enter the positive solution.",
  type: "arithmetic",
  correct: "11",
  variable: "",
  answerSuffix: "and x = −1",
  hint: "Take the square root of both sides, then solve for x. Don't forget the ±.",
  steps: [
    "Take the square root of both sides: x − 5 = ±6.",
    "Solve x − 5 = 6: x = 11.",
    "Solve x − 5 = −6: x = −1.",
    "The positive solution is x = 11."
  ],
  img_question: ""
},
{
  question: "What is the vertex of the parabola y = 2(x − 4)² + 7?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: ", 7)",
  hint: "In vertex form y = a(x − h)² + k, the vertex is (h, k).",
  steps: [
    "The equation is in vertex form: y = a(x − h)² + k.",
    "Identify h = 4 and k = 7.",
    "The vertex is (4, 7).",
    "Enter the x-coordinate: 4."
  ],
  img_question: ""
},
{
  question: "Find the axis of symmetry of y = x² − 10x + 21.",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Use the formula x = −b ÷ (2a). Identify a and b from the equation first.",
  steps: [
    "Identify a = 1 and b = −10.",
    "Apply the formula: x = −(−10) ÷ (2 × 1) = 10 ÷ 2 = 5.",
    "The axis of symmetry is x = 5."
  ],
  img_question: ""
},
{
  question: "Use the quadratic formula to solve x² − 2x − 15 = 0. Enter the positive solution.",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "and x = −3",
  hint: "Identify a, b, and c, then substitute into x = (−b ± √(b² − 4ac)) ÷ 2a.",
  steps: [
    "Identify a = 1, b = −2, c = −15.",
    "Compute the discriminant: b² − 4ac = 4 − 4(1)(−15) = 4 + 60 = 64.",
    "Apply the formula: x = (2 ± √64) ÷ 2 = (2 ± 8) ÷ 2.",
    "Solve: x = (2 + 8) ÷ 2 = 5 or x = (2 − 8) ÷ 2 = −3.",
    "The positive solution is x = 5."
  ],
  img_question: ""
},
{
  question: "A ball is launched upward. Its height in feet is modeled by h(t) = −t² + 8t. At what time does the ball reach its maximum height?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "seconds",
  hint: "Use the axis of symmetry formula t = −b ÷ (2a) to find the time of the maximum.",
  steps: [
    "Identify a = −1 and b = 8.",
    "Apply the axis of symmetry formula: t = −8 ÷ (2 × −1) = −8 ÷ −2 = 4.",
    "The ball reaches its maximum height at t = 4 seconds."
  ],
  img_question: ""
},
{
  question: "The graph shows a parabola. What are the zeros of the function? Enter the smaller zero.",
  type: "arithmetic",
  correct: "-4",
  variable: "",
  answerSuffix: "and x = 2",
  hint: "The zeros are the x-values where the parabola crosses the x-axis.",
  steps: [
    "Locate the points where the parabola crosses the x-axis.",
    "The parabola crosses at (−4, 0) and (2, 0).",
    "The zeros are x = −4 and x = 2.",
    "Enter the smaller zero: x = −4."
  ],
  img_question: "../../Images/world_5_lesson_4_question_9.jpg"
},
{
  question: "A rectangular garden has a length that is 4 feet greater than its width. Its area is 77 square feet. What is the width of the garden?",
  type: "arithmetic",
  correct: "7",
  variable: "",
  answerSuffix: "ft",
  hint: "Let the width be x and the length be x + 4. Set up an area equation and solve the resulting quadratic.",
  steps: [
    "Let width = x and length = x + 4.",
    "Set up the area equation: x(x + 4) = 77.",
    "Expand: x² + 4x = 77.",
    "Rearrange: x² + 4x − 77 = 0.",
    "Factor: find two numbers that multiply to −77 and add to 4: −7 and 11.",
    "Factored form: (x − 7)(x + 11) = 0.",
    "Solve: x = 7 or x = −11.",
    "A width cannot be negative, so the width is 7 feet."
  ],
  img_question: ""
},
];