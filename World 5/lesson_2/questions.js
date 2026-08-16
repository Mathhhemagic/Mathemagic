const lessonQuestions = [
 {
  question: "What is the vertex of the parabola y = (x − 4)² + 7?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: ", 7)",
  hint: "In vertex form y = a(x − h)² + k, the vertex is (h, k). Watch the sign inside the parentheses.",
  steps: [
    "The equation is in vertex form: y = a(x − h)² + k.",
    "Identify h and k: h = 4 and k = 7.",
    "The vertex is (4, 7)."
  ],
  img_question: ""
},
{
  question: "What is the vertex of the parabola y = (x + 3)² − 5?",
  type: "arithmetic",
  correct: "-3",
  variable: "",
  answerSuffix: ", −5)",
  hint: "Be careful with the sign: if the equation contains (x + 3), the x-coordinate of the vertex is −3.",
  steps: [
    "The equation is in vertex form: y = a(x − h)² + k.",
    "Rewrite as y = (x − (−3))² + (−5), so h = −3 and k = −5.",
    "The vertex is (−3, −5)."
  ],
  img_question: ""
},
{
  question: "Does the parabola y = −2x² + 4x − 1 open upward or downward? Enter 1 for upward and −1 for downward.",
  type: "arithmetic",
  correct: "-1",
  variable: "",
  answerSuffix: "",
  hint: "Look at the coefficient of x². Its sign determines the opening direction.",
  steps: [
    "Identify the value of a: a = −2.",
    "Since a = −2 is negative, the parabola opens downward."
  ],
  img_question: ""
},
{
  question: "What is the axis of symmetry of the parabola y = (x − 6)² + 1?",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "",
  hint: "The axis of symmetry passes through the vertex. Read the x-coordinate of the vertex from vertex form.",
  steps: [
    "The vertex is at (6, 1).",
    "The axis of symmetry is the vertical line through the vertex: x = 6."
  ],
  img_question: ""
},
{
  question: "Find the axis of symmetry of y = x² − 10x + 3.",
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
  question: "Find the x-intercepts of y = x² − 7x + 12. Enter the smaller x-intercept.",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "and x = 4",
  hint: "Set y = 0 and factor the trinomial.",
  steps: [
    "Set y = 0: x² − 7x + 12 = 0.",
    "Factor: find two numbers that multiply to 12 and add to −7: −3 and −4.",
    "Factored form: (x − 3)(x − 4) = 0.",
    "Solutions: x = 3 or x = 4.",
    "The x-intercepts are (3, 0) and (4, 0). The smaller x-intercept is 3."
  ],
  img_question: ""
},
{
  question: "The graph shows a parabola. What are the zeros of the function?",
  type: "arithmetic",
  correct: "-2",
  variable: "",
  answerSuffix: "and x = 4",
  hint: "The zeros are the x-values where the parabola crosses the x-axis.",
  steps: [
    "Locate the points where the parabola crosses the x-axis.",
    "The parabola crosses the x-axis at (−2, 0) and (4, 0).",
    "The zeros are x = −2 and x = 4.",
    "Enter the smaller zero: x = −2."
  ],
  img_question: "../../Images/world_5_lesson_2_question_7.jpg"
},
{
  question: "What is the vertex of the parabola y = x² − 8x + 7?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: ", −9)",
  hint: "Find the axis of symmetry using x = −b ÷ (2a), then substitute that x-value into the equation to find y.",
  steps: [
    "Find the axis of symmetry: x = −(−8) ÷ (2 × 1) = 8 ÷ 2 = 4.",
    "Substitute x = 4 into the equation: y = (4)² − 8(4) + 7 = 16 − 32 + 7 = −9.",
    "The vertex is (4, −9)."
  ],
  img_question: ""
},
{
  question: "How many x-intercepts does the parabola y = x² + 4 have?",
  type: "arithmetic",
  correct: "0",
  variable: "",
  answerSuffix: "",
  hint: "Set y = 0 and try to solve. Think about whether x² can equal a negative number.",
  steps: [
    "Set y = 0: x² + 4 = 0.",
    "Subtract 4 from both sides: x² = −4.",
    "Since x² cannot be negative for any real number, there are no real solutions.",
    "The parabola has 0 x-intercepts."
  ],
  img_question: ""
},
{
  question: "The graph shows a downward-opening parabola with vertex at (2, 9). What are the x-intercepts?",
  type: "arithmetic",
  correct: "-1",
  variable: "",
  answerSuffix: "and x = 5",
  hint: "Use the axis of symmetry: the two x-intercepts are symmetric about x = 2.",
  steps: [
    "The vertex is at (2, 9) and the parabola opens downward, so it has two x-intercepts.",
    "The x-intercepts are symmetric about the axis of symmetry x = 2.",
    "From the graph, the parabola crosses the x-axis at (−1, 0) and (5, 0).",
    "Check symmetry: the midpoint of −1 and 5 is (−1 + 5) ÷ 2 = 2",
    "Enter the smaller x-intercept: x = −1."
  ],
  img_question: "../../Images/world_5_lesson_2_question_10.jpg"
},



];