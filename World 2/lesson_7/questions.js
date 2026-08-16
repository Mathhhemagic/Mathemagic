const lessonQuestions = [
{
  question: "Solve for x: 4(x + 2) = 3x + 14",
  type: "algebra",
  correct: "6",
  variable: "x",
  answerSuffix: "",
  hint: "Distribute on the left side first, then move variable terms to one side.",
  steps: [
    "Distribute: 4x + 8 = 3x + 14",
    "Subtract 3x from both sides: x + 8 = 14",
    "Subtract 8 from both sides: x = 6"
  ],
  img_question: ""
},
{
  question: "Solve for x: −3x + 7 ≥ 1. What is the largest integer value of x that satisfies the inequality?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Isolate x, and remember to flip the inequality sign if you divide by a negative number.",
  steps: [
    "−3x + 7 ≥ 1",
    "Subtract 7 from both sides: −3x ≥ −6",
    "Divide both sides by −3 and flip the inequality sign: x ≤ 2",
    "The largest integer value of x that satisfies the inequality is 2."
  ],
  img_question: ""
},
{
  question: "Solve for x: −1 ≤ 3x − 4 < 8. What is the smallest integer value of x that satisfies the inequality?",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "",
  hint: "Add 4 to all three parts, then divide all three parts by 3.",
  steps: [
    "Add 4 to all three parts: −1 + 4 ≤ 3x < 8 + 4",
    "Simplify: 3 ≤ 3x < 12",
    "Divide all three parts by 3: 1 ≤ x < 4",
    "The smallest integer value of x that satisfies the inequality is 1."
  ],
  img_question: ""
},
{
  question: "Points A(−3, 1) and B(5, 7) are on the coordinate plane. What is the distance from point A to the midpoint of segment AB?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Find the midpoint first, then use the Pythagorean theorem to find the distance.",
  steps: [
    "Midpoint M = ((−3 + 5) ÷ 2, (1 + 7) ÷ 2) = (1, 4)",
    "Horizontal distance from A(−3, 1) to M(1, 4): 1 − (−3) = 4",
    "Vertical distance: 4 − 1 = 3",
    "Use the Pythagorean theorem: d² = 4² + 3² = 16 + 9 = 25",
    "d = √25 = 5"
  ],
  img_question: ""
},
{
  question: "What is the slope of the line passing through (1, 3) and (7, 6)?",
  type: "arithmetic",
  correct: "\\frac{1}{2}",
  variable: "",
  answerSuffix: "",
  hint: "Divide the rise by the run using the slope formula.",
  steps: [
    "Slope = (y₂ − y₁) ÷ (x₂ − x₁)",
    "Slope = (6 − 3) ÷ (7 − 1) = 3 ÷ 6",
    "Simplify: 3/6 = 1/2",
    "The slope of the line is 1/2."
  ],
  img_question: ""
},
{
  question: "A line has slope −2 and passes through (3, 5) and (x, 11). What is the value of x?",
  type: "algebra",
  correct: "0",
  variable: "x",
  answerSuffix: "",
  hint: "Set up the slope formula equal to −2 and solve for x.",
  steps: [
    "Slope = (11 − 5) ÷ (x − 3) = −2",
    "Simplify the numerator: 6 ÷ (x − 3) = −2",
    "Multiply both sides by (x − 3): 6 = −2(x − 3)",
    "Distribute: 6 = −2x + 6",
    "Subtract 6 from both sides: 0 = −2x",
    "Divide both sides by −2: x = 0"
  ],
  img_question: ""
},
{
  question: "What is the x-intercept of the line 5x − 2y = 20?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "",
  hint: "Set y = 0 and solve for x.",
  steps: [
    "Set y = 0: 5x − 2(0) = 20",
    "Simplify: 5x = 20",
    "Divide both sides by 5: x = 4",
    "The x-intercept is (4, 0)."
  ],
  img_question: ""
},
{
  question: "A line is perpendicular to y = ²⁄₃x + 1 and passes through (4, 1). What is the y-intercept of this line?",
  type: "arithmetic",
  correct: "7",
  variable: "",
  answerSuffix: "",
  hint: "Find the perpendicular slope, then substitute the given point into y = mx + b to solve for b.",
  steps: [
    "The slope of y = (2/3)x + 1 is 2/3. The perpendicular slope is its negative reciprocal: −3/2.",
    "Use y = mx + b with m = −3/2 and the point (4, 1).",
    "Substitute: 1 = −(3/2)(4) + b",
    "Simplify: 1 = −6 + b",
    "Add 6 to both sides: b = 7",
    "The y-intercept of the line is 7."
  ],
  img_question: ""
},
{
  question: "A line passes through (0, −2) and (3, 4). What is the value of y when x = 7?",
  type: "arithmetic",
  correct: "12",
  variable: "",
  answerSuffix: "",
  hint: "Find the slope and y-intercept, write the equation, then substitute x = 7.",
  steps: [
    "Slope = (4 − (−2)) ÷ (3 − 0) = 6 ÷ 3 = 2",
    "Since the line passes through (0, −2), the y-intercept is −2.",
    "Equation: y = 2x − 2",
    "Substitute x = 7: y = 2(7) − 2 = 14 − 2 = 12"
  ],
  img_question: ""
},
{
  question: "Service Plan A charges $25 upfront plus $10 per month. Service Plan B charges $5 upfront plus $14 per month. After how many months will both plans cost the same total amount?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "months",
  hint: "Write an equation for each plan, set them equal, and solve.",
  steps: [
    "Plan A total cost: y = 10x + 25",
    "Plan B total cost: y = 14x + 5",
    "Set them equal: 10x + 25 = 14x + 5",
    "Subtract 10x from both sides: 25 = 4x + 5",
    "Subtract 5 from both sides: 20 = 4x",
    "Divide both sides by 4: x = 5",
    "Both plans cost the same after 5 months."
  ],
  img_question: ""
},
];