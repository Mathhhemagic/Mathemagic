const lessonQuestions = [
{
  question: "A ball is thrown upward. Its height in feet is modeled by h(t) = −16t² + 32t. What is the height of the ball at t = 1 second?",
  type: "arithmetic",
  correct: "16",
  variable: "",
  answerSuffix: "ft",
  hint: "Substitute t = 1 into the function and simplify.",
  steps: [
    "Substitute t = 1 into h(t) = −16t² + 32t.",
    "h(1) = −16(1)² + 32(1) = −16 + 32 = 16.",
    "The height of the ball at t = 1 second is 16 feet."
  ],
  img_question: ""
},
{
  question: "A ball is launched upward. Its height in feet is modeled by h(t) = −t² + 6t. At what time does the ball hit the ground? Enter the positive value of t.",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "seconds",
  hint: "Set h(t) = 0 and solve for t. Discard any negative solution.",
  steps: [
    "Set h(t) = 0: −t² + 6t = 0.",
    "Factor: t(−t + 6) = 0.",
    "Set each factor equal to zero: t = 0 or −t + 6 = 0.",
    "Solve: t = 0 or t = 6.",
    "t = 0 represents the launch time, so the ball hits the ground at t = 6 seconds."
  ],
  img_question: ""
},
{
  question: "The height of a rocket in feet is modeled by h(t) = −4t² + 24t + 4, where t is time in seconds. At what time does the rocket reach its maximum height?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "seconds",
  hint: "Use the axis of symmetry formula t = −b ÷ (2a) to find the time of the maximum.",
  steps: [
    "Identify a = −4 and b = 24.",
    "Apply the axis of symmetry formula: t = −24 ÷ (2 × −4) = −24 ÷ −8 = 3.",
    "The rocket reaches its maximum height at t = 3 seconds."
  ],
  img_question: ""
},
{
  question: "The height of a rocket in feet is modeled by h(t) = −4t² + 24t + 4. What is the maximum height the rocket reaches?",
  type: "arithmetic",
  correct: "40",
  variable: "",
  answerSuffix: "ft",
  hint: "Substitute the time of maximum height into h(t) to find the maximum value.",
  steps: [
    "From the previous problem, the maximum occurs at t = 3.",
    "Substitute t = 3: h(3) = −4(3)² + 24(3) + 4 = −36 + 72 + 4 = 40.",
    "The maximum height is 40 feet."
  ],
  img_question: ""
},
{
  question: "A rectangular garden has a width of x feet and a length that is 5 feet greater than its width. If the area of the garden is 36 square feet, what is the width?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "ft",
  hint: "Write an equation using Area = length × width, then solve the resulting quadratic.",
  steps: [
    "Let width = x and length = x + 5.",
    "Set up the area equation: x(x + 5) = 36.",
    "Expand: x² + 5x = 36.",
    "Rearrange: x² + 5x − 36 = 0.",
    "Factor: (x + 9)(x − 4) = 0.",
    "Solve: x = −9 or x = 4.",
    "A width cannot be negative, so the width is 4 feet."
  ],
  img_question: ""
},
{
  question: "A company's profit in dollars is modeled by P(x) = −2x² + 40x − 150, where x is the number of items sold. How many items should the company sell to maximize profit?",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "items",
  hint: "Find the x-coordinate of the vertex using x = −b ÷ (2a).",
  steps: [
    "Identify a = −2 and b = 40.",
    "Apply the axis of symmetry formula: x = −40 ÷ (2 × −2) = −40 ÷ −4 = 10.",
    "The company should sell 10 items to maximize its profit."
  ],
  img_question: ""
},
{
  question: "A company's profit in dollars is modeled by P(x) = −2x² + 40x − 150, where x is the number of items sold. What is the maximum profit?",
  type: "arithmetic",
  correct: "50",
  variable: "",
  answerSuffix: "$",
  hint: "Substitute the number of items that maximizes profit into P(x).",
  steps: [
    "From the previous problem, profit is maximized at x = 10.",
    "Substitute x = 10: P(10) = −2(10)² + 40(10) − 150 = −200 + 400 − 150 = 50.",
    "The maximum profit is $50."
  ],
  img_question: ""
},
{
  question: "The graph models the height h(t) in feet of a ball over time t in seconds. What is the maximum height the ball reaches?",
  type: "arithmetic",
  correct: "25",
  variable: "",
  answerSuffix: "ft",
  hint: "The maximum height is the y-coordinate of the vertex.",
  steps: [
    "Locate the vertex of the parabola on the graph.",
    "The vertex is at (3, 25).",
    "The y-coordinate of the vertex represents the maximum height: 25 feet."
  ],
  img_question: "../../Images/world_5_lesson_3_question_8.jpg"
},
{
  question: "A diver jumps from a platform. Her height above the water in feet is modeled by h(t) = −16t² + 8t + 24, where t is time in seconds. At what time does she hit the water? Enter the positive value of t.",
  type: "arithmetic",
  correct: "\\frac{3}{2}",
  variable: "",
  answerSuffix: "seconds",
  hint: "Set h(t) = 0 and solve. Discard any negative solution.",
  steps: [
    "Set h(t) = 0: −16t² + 8t + 24 = 0.",
    "Divide every term by −8: 2t² − t − 3 = 0.",
    "Factor: (2t − 3)(t + 1) = 0.",
    "Solve: t = 3/2 or t = −1.",
    "Time cannot be negative, so the diver hits the water at t = 3/2 seconds."
  ],
  img_question: ""
},
{
  question: "A ball is thrown from a height of 10 feet. Its height in feet is modeled by h(t) = −t² + 4t + 10. A second ball is thrown from the ground and its height is modeled by g(t) = −t² + 6t. At t = 2 seconds, which ball is higher and by how many feet?",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "ft",
  hint: "Evaluate both functions at t = 2, then find the difference.",
  steps: [
    "Evaluate h(2): h(2) = −(2)² + 4(2) + 10 = −4 + 8 + 10 = 14.",
    "Evaluate g(2): g(2) = −(2)² + 6(2) = −4 + 12 = 8.",
    "14 > 8, so the first ball is higher at t = 2.",
    "Difference: 14 − 8 = 6 feet."
  ],
  img_question: ""
},
];