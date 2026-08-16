const lessonQuestions = [
{
  question: "What is the slope of the line y = 3x − 5?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "In y = mx + b, the slope is the coefficient of x.",
  steps: [
    "The equation is in slope-intercept form y = mx + b.",
    "The coefficient of x is 3, so the slope is 3."
  ],
  img_question: ""
},
{
  question: "What is the y-intercept of the line y = −2x + 7?",
  type: "arithmetic",
  correct: "7",
  variable: "",
  answerSuffix: "",
  hint: "In y = mx + b, the y-intercept is the constant term b.",
  steps: [
    "The equation is in slope-intercept form y = mx + b.",
    "The constant term is 7, so the y-intercept is 7.",
    "This means the line crosses the y-axis at (0, 7)."
  ],
  img_question: ""
},
{
  question: "What is the x-intercept of the line y = 4x − 8?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Set y = 0 and solve for x.",
  steps: [
    "Set y = 0: 0 = 4x − 8",
    "Add 8 to both sides: 8 = 4x",
    "Divide both sides by 4: x = 2",
    "The x-intercept is (2, 0)."
  ],
  img_question: ""
},
{
  question: "What is the y-intercept of the line 3x + 4y = 24?",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "",
  hint: "Set x = 0 and solve for y.",
  steps: [
    "Set x = 0: 3(0) + 4y = 24",
    "Simplify: 4y = 24",
    "Divide both sides by 4: y = 6",
    "The y-intercept is (0, 6)."
  ],
  img_question: ""
},
{
  question: "Which of the following slopes would make a line parallel to y = −3x + 1? Enter the slope value.",
  type: "arithmetic",
  correct: "-3",
  variable: "",
  answerSuffix: "",
  hint: "Parallel lines have identical slopes.",
  steps: [
    "The slope of y = −3x + 1 is −3.",
    "Parallel lines have the same slope.",
    "A line parallel to y = −3x + 1 must also have a slope of −3."
  ],
  img_question: ""
},
{
  question: "What is the slope of any line perpendicular to y = 4x + 1?",
  type: "arithmetic",
  correct: "\\frac{-1}{4}",
  variable: "",
  answerSuffix: "",
  hint: "The perpendicular slope is the negative reciprocal of the original slope.",
  steps: [
    "The slope of y = 4x + 1 is 4.",
    "To find the perpendicular slope, flip the fraction and change the sign.",
    "The negative reciprocal of 4 is −1/4.",
    "The slope of any perpendicular line is −1/4."
  ],
  img_question: ""
},
{
  question: "A line passes through the y-intercept of y = −2x + 5 and the x-intercept of 2x + y = 10. What is the slope of this line?",
  type: "arithmetic",
  correct: "-1",
  variable: "",
  answerSuffix: "",
  hint: "Find each intercept as a coordinate pair first, then calculate slope.",
  steps: [
    "The y-intercept of y = −2x + 5 is (0, 5).",
    "Find the x-intercept of 2x + y = 10 by setting y = 0: 2x = 10, so x = 5. The x-intercept is (5, 0).",
    "Slope = (0 − 5) ÷ (5 − 0) = −5 ÷ 5 = −1",
    "The slope of the line is −1."
  ],
  img_question: ""
},
{
  question: "What is the value of y when x = 3 for the line y = ²⁄₃x − 4?",
  type: "arithmetic",
  correct: "-2",
  variable: "",
  answerSuffix: "",
  hint: "Substitute x = 3 into the equation and simplify.",
  steps: [
    "y = (2/3)(3) − 4",
    "y = 2 − 4",
    "y = −2"
  ],
  img_question: ""
},
{
  question: "A line with slope 3 passes through the point (2, 7). What is the y-intercept of the line?",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "",
  hint: "Substitute the slope and the point into y = mx + b, then solve for b.",
  steps: [
    "Use y = mx + b with m = 3 and the point (2, 7).",
    "Substitute: 7 = 3(2) + b",
    "Simplify: 7 = 6 + b",
    "Subtract 6 from both sides: b = 1",
    "The y-intercept of the line is 1."
  ],
  img_question: ""
},
{
  question: "Line p passes through the y-intercept of y = −3x + 4 and is perpendicular to y = 2x + 5. What is the x-intercept of line p?",
  type: "arithmetic",
  correct: "8",
  variable: "",
  answerSuffix: "",
  hint: "Find the slope of line p first, then build its equation and set y = 0.",
  steps: [
    "The y-intercept of y = −3x + 4 is (0, 4), so line p passes through (0, 4).",
    "The slope of y = 2x + 5 is 2. The perpendicular slope is the negative reciprocal: −1/2.",
    "Line p has slope −1/2 and y-intercept 4, so its equation is y = −(1/2)x + 4.",
    "Set y = 0 to find the x-intercept: 0 = −(1/2)x + 4",
    "Add (1/2)x to both sides: (1/2)x = 4",
    "Multiply both sides by 2: x = 8",
    "The x-intercept of line p is (8, 0)."
  ],
  img_question: ""
},

]