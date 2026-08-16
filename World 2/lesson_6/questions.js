const lessonQuestions = [
{
  question: "Write the equation of the line with slope 2 passing through (1, 3) in slope-intercept form. What is the y-intercept?",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "",
  hint: "Use point-slope form first, then rearrange to y = mx + b.",
  steps: [
    "Start with point-slope form: y − 3 = 2(x − 1)",
    "Distribute: y − 3 = 2x − 2",
    "Add 3 to both sides: y = 2x + 1",
    "The y-intercept is 1."
  ],
  img_question: ""
},
{
  question: "A line has slope −4 and passes through (3, 5). What is the y-intercept of the line?",
  type: "arithmetic",
  correct: "17",
  variable: "",
  answerSuffix: "",
  hint: "Substitute the slope and point into y = mx + b, then solve for b.",
  steps: [
    "Use y = mx + b with m = −4 and the point (3, 5).",
    "Substitute: 5 = −4(3) + b",
    "Simplify: 5 = −12 + b",
    "Add 12 to both sides: b = 17",
    "The y-intercept is 17."
  ],
  img_question: ""
},
{
  question: "Which of the following is the standard form of y = 3x − 2? Enter the value of C in the equation Ax + By = C.",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Move the x-term to the left side by subtracting it from both sides.",
  steps: [
    "Start with y = 3x − 2.",
    "Subtract 3x from both sides: −3x + y = −2",
    "Multiply both sides by −1 so the x-coefficient is positive: 3x − y = 2",
    "The equation in standard form is 3x − y = 2, so C = 2."
  ],
  img_question: ""
},
{
  question: "A line passes through (0, 6) and (4, 14). What is the equation of the line in slope-intercept form? Enter the slope.",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Find the slope from the two points, then use the y-intercept directly.",
  steps: [
    "Slope = (14 − 6) ÷ (4 − 0) = 8 ÷ 4 = 2",
    "Since the line passes through (0, 6), the y-intercept is 6.",
    "The equation is y = 2x + 6.",
    "The slope is 2."
  ],
  img_question: ""
},
{
  question: "The table below shows values for a linear function. What is the equation of the line? Enter the y-intercept.\n\nx: 2, 5\ny: 7, 13",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Find the slope from the two points in the table, then solve for b.",
  steps: [
    "Slope = (13 − 7) ÷ (5 − 2) = 6 ÷ 3 = 2",
    "Use the point (2, 7): 7 = 2(2) + b",
    "Simplify: 7 = 4 + b",
    "Subtract 4 from both sides: b = 3",
    "The equation is y = 2x + 3, and the y-intercept is 3."
  ],
  img_question: ""
},
{
  question: "A taxi charges a flat fee of $4 plus $3 per mile. How much will a 6-mile ride cost?",
  type: "arithmetic",
  correct: "22",
  variable: "",
  answerSuffix: "$",
  hint: "Write a linear equation using the flat fee as b and the per-mile rate as m.",
  steps: [
    "Let x = number of miles and y = total cost.",
    "The flat fee is $4 (starting value) and the rate is $3 per mile.",
    "Equation: y = 3x + 4",
    "Substitute x = 6: y = 3(6) + 4 = 18 + 4 = 22",
    "A 6-mile ride costs $22."
  ],
  img_question: ""
},
{
  question: "A line passes through (2, 5) and (4, 9). Write the equation in standard form Ax + By = C, where A is positive. What is the value of C?",
  type: "arithmetic",
  correct: "-1",
  variable: "",
  answerSuffix: "",
  hint: "Find slope-intercept form first, then rearrange to standard form.",
  steps: [
    "Slope = (9 − 5) ÷ (4 − 2) = 4 ÷ 2 = 2",
    "Use the point (2, 5): 5 = 2(2) + b, so b = 1",
    "Slope-intercept form: y = 2x + 1",
    "Subtract 2x from both sides: −2x + y = 1",
    "Multiply both sides by −1 so A is positive: 2x − y = −1",
    "The value of C is −1."
  ],
  img_question: ""
},
{
  question: "The table below shows values for a linear function. What is the value of y when x = 9?\n\nx: 0, 3, 6\ny: 10, 4, −2",
  type: "arithmetic",
  correct: "-8",
  variable: "",
  answerSuffix: "",
  hint: "Find the slope from the table, identify the y-intercept, then substitute x = 9.",
  steps: [
    "Slope = (4 − 10) ÷ (3 − 0) = −6 ÷ 3 = −2",
    "Since the table includes (0, 10), the y-intercept is 10.",
    "Equation: y = −2x + 10",
    "Substitute x = 9: y = −2(9) + 10 = −18 + 10 = −8"
  ],
  img_question: ""
},
{
  question: "A line is parallel to y = 3x − 7 and passes through (1, 4). What is the y-intercept of this line?",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "",
  hint: "Parallel lines share the same slope. Use the given point to find b.",
  steps: [
    "Parallel lines have equal slopes, so the slope is 3.",
    "Use y = mx + b with m = 3 and the point (1, 4).",
    "Substitute: 4 = 3(1) + b",
    "Simplify: 4 = 3 + b",
    "Subtract 3 from both sides: b = 1",
    "The y-intercept of the line is 1."
  ],
  img_question: ""
},
{
  question: "Plan A for a phone costs $50 to start and $20 per month. Plan B costs $20 to start and $30 per month. After how many months will both plans cost the same total amount?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "months",
  hint: "Write an equation for each plan and set them equal to each other.",
  steps: [
    "Plan A total cost: y = 20x + 50",
    "Plan B total cost: y = 30x + 20",
    "Set the equations equal: 20x + 50 = 30x + 20",
    "Subtract 20x from both sides: 50 = 10x + 20",
    "Subtract 20 from both sides: 30 = 10x",
    "Divide both sides by 10: x = 3",
    "Both plans cost the same after 3 months."
  ],
  img_question: ""
},


]