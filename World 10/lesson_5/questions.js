var lessonQuestions = [
{
  question: "If f(x) = x² + 2x − 3 and g(x) = 2x + 1, for what positive value of x does f(x) = g(x)?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Set f(x) equal to g(x) and solve the resulting equation.",
  steps: [
    "Set f(x) = g(x): x² + 2x − 3 = 2x + 1.",
    "Subtract 2x + 1 from both sides: x² − 4 = 0.",
    "Factor: (x − 2)(x + 2) = 0.",
    "Solve: x = 2 or x = −2.",
    "Check x = 2: f(2) = 4 + 4 − 3 = 5. g(2) = 2(2) + 1 = 5. ✓",
    "The positive value is x = 2."
  ],
  img_question: ""
},
{
  question: "A system of equations has no solution. One equation is y = 3x − 5. The other equation is y = 3x + k. What value of k would give the system no solution?",
  type: "arithmetic",
  correct: "7",
  variable: "",
  answerSuffix: "",
  hint: "A system has no solution when the lines are parallel — same slope, different y-intercepts.",
  steps: [
    "Both lines have slope 3, so they are parallel.",
    "For no solution, the y-intercepts must be different.",
    "Any value of k ≠ −5 gives no solution.",
    "Enter 7 as one valid example."
  ],
  img_question: ""
},
{
  question: "The function f(x) = 2(x − 3)² − 8 is graphed in the xy-plane. What are the x-intercepts? Enter the larger x-intercept.",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "and x = 1",
  hint: "Set f(x) = 0 and solve for x using square roots.",
  steps: [
    "Set 2(x − 3)² − 8 = 0.",
    "Add 8 to both sides: 2(x − 3)² = 8.",
    "Divide by 2: (x − 3)² = 4.",
    "Take the square root: x − 3 = ±2.",
    "Solve: x = 5 or x = 1.",
    "The larger x-intercept is x = 5."
  ],
  img_question: ""
},
{
  question: "A circle has the equation x² + y² − 6x + 4y − 12 = 0. What is the radius of the circle?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Complete the square for both x and y terms to rewrite the equation in standard form.",
  steps: [
    "Group x and y terms: (x² − 6x) + (y² + 4y) = 12.",
    "Complete the square for x: (x² − 6x + 9) = (x − 3)². Add 9 to both sides.",
    "Complete the square for y: (y² + 4y + 4) = (y + 2)². Add 4 to both sides.",
    "Rewrite: (x − 3)² + (y + 2)² = 12 + 9 + 4 = 25.",
    "The radius is √25 = 5."
  ],
  img_question: ""
},
{
  question: "Two workers can paint a house together in 6 hours. Worker A alone can paint the house in 10 hours. How many hours would it take Worker B to paint the house alone?",
  type: "arithmetic",
  correct: "15",
  variable: "",
  answerSuffix: "hours",
  hint: "Use the work rate formula: 1/A + 1/B = 1/T, where T is the time working together.",
  steps: [
    "Set up the equation: 1/10 + 1/B = 1/6.",
    "Subtract 1/10 from both sides: 1/B = 1/6 − 1/10.",
    "Find a common denominator: 1/B = 5/30 − 3/30 = 2/30 = 1/15.",
    "Therefore B = 15 hours."
  ],
  img_question: ""
},
{
  question: "The graph of f(x) is a parabola that passes through (0, 3), (1, 0), and (3, 0). What is the equation of f(x)?",
  type: "algebra",
  correct: "x² − 4x + 3",
  variable: "x",
  answerSuffix: "",
  hint: "Use the x-intercepts to write the factored form, then use the third point to find the leading coefficient.",
  steps: [
    "The x-intercepts are x = 1 and x = 3, so the factored form is f(x) = a(x − 1)(x − 3).",
    "Substitute (0, 3): 3 = a(0 − 1)(0 − 3) = a(3) = 3a.",
    "Solve: a = 1.",
    "Expand: f(x) = (x − 1)(x − 3) = x² − 4x + 3."
  ],
  img_question: ""
},
{
  question: "A rectangle's length is 3 more than twice its width. Its area is 54 square units. What is the width of the rectangle?",
  type: "arithmetic",
  correct: "4.5",
  variable: "",
  answerSuffix: "",
  hint: "Let the width be w and the length be 2w + 3. Set up an area equation and solve the quadratic.",
  steps: [
    "Let width = w and length = 2w + 3.",
    "Set up: w(2w + 3) = 54.",
    "Expand: 2w² + 3w = 54.",
    "Rearrange: 2w² + 3w − 54 = 0.",
    "Use the quadratic formula: w = (−3 ± √(9 + 432)) ÷ 4 = (−3 ± √441) ÷ 4 = (−3 ± 21) ÷ 4.",
    "Positive solution: w = (−3 + 21) ÷ 4 = 18 ÷ 4 = 4.5.",
    "The width is 4.5 units."
  ],
  img_question: ""
},
{
  question: "In the xy-plane, line p passes through the origin and is perpendicular to the line 2x − 4y = 8. What is the value of y on line p when x = 6?",
  type: "arithmetic",
  correct: "-12",
  variable: "",
  answerSuffix: "",
  hint: "Find the slope of the given line, then take the negative reciprocal for the perpendicular slope. Line p passes through the origin.",
  steps: [
    "Rewrite 2x − 4y = 8 in slope-intercept form: y = (1/2)x − 2. Slope = 1/2.",
    "Perpendicular slope = −1 ÷ (1/2) = −2.",
    "Line p passes through the origin: y = −2x.",
    "Substitute x = 6: y = −2(6) = −12."
  ],
  img_question: ""
},
{
  question: "A data set has 6 values with a mean of 10 and a range of 12. Five of the values are 4, 8, 10, 14, and 16. What is the sixth value?",
  type: "arithmetic",
  correct: "8",
  variable: "",
  answerSuffix: "",
  hint: "Use the mean to find the total sum, then subtract the known values.",
  steps: [
    "Total sum = mean × number of values = 10 × 6 = 60.",
    "Sum of known values: 4 + 8 + 10 + 14 + 16 = 52.",
    "Sixth value = 60 − 52 = 8.",
    "Check the range: max = 16, min = 4, range = 12. ✓"
  ],
  img_question: ""
},
{
  question: "The number of bacteria in a sample doubles every 3 hours. The sample starts with 50 bacteria. How many bacteria will there be after 12 hours?",
  type: "arithmetic",
  correct: "800",
  variable: "",
  answerSuffix: "",
  hint: "Find how many doubling periods fit into 12 hours, then apply the growth model.",
  steps: [
    "Number of doubling periods in 12 hours: 12 ÷ 3 = 4.",
    "The model is y = 50(2)⁴.",
    "Calculate 2⁴ = 16.",
    "Multiply: 50 × 16 = 800.",
    "There will be 800 bacteria after 12 hours."
  ],
  img_question: ""
},

];
