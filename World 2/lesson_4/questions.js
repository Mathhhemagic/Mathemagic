const lessonQuestions = [
{
  question: "What is the slope of a line that rises 6 units for every 3 units it runs?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Slope equals rise divided by run.",
  steps: [
    "Slope = rise ÷ run",
    "Slope = 6 ÷ 3 = 2",
    "The slope of the line is 2."
  ],
  img_question: ""
},
{
  question: "A line passes through (1, 2) and (5, 10). What is the slope of the line?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Subtract the y-values to find the rise, and subtract the x-values to find the run.",
  steps: [
    "Rise = 10 − 2 = 8",
    "Run = 5 − 1 = 4",
    "Slope = rise ÷ run = 8 ÷ 4 = 2",
    "The slope of the line is 2."
  ],
  img_question: ""
},
{
  question: "What is the slope of the line passing through (−1, 4) and (3, −4)?",
  type: "arithmetic",
  correct: "-2",
  variable: "",
  answerSuffix: "",
  hint: "Apply the slope formula. Watch the signs carefully.",
  steps: [
    "Slope = (y₂ − y₁) ÷ (x₂ − x₁)",
    "Slope = (−4 − 4) ÷ (3 − (−1))",
    "Slope = −8 ÷ 4 = −2",
    "The slope of the line is −2."
  ],
  img_question: ""
},
{
  question: "A line passes through (2, 3) and (6, 3). What is the slope of the line?",
  type: "arithmetic",
  correct: "0",
  variable: "",
  answerSuffix: "",
  hint: "What kind of line has the same y-value at every point?",
  steps: [
    "Slope = (y₂ − y₁) ÷ (x₂ − x₁)",
    "Slope = (3 − 3) ÷ (6 − 2) = 0 ÷ 4 = 0",
    "A slope of 0 means the line is horizontal."
  ],
  img_question: ""
},
{
  question: "What is the slope of the line passing through (0, 1) and (4, 7)?",
  type: "arithmetic",
  correct: "\\frac{3}{2}",
  variable: "",
  answerSuffix: "",
  hint: "Subtract the y-values and the x-values, then simplify the fraction.",
  steps: [
    "Slope = (y₂ − y₁) ÷ (x₂ − x₁)",
    "Slope = (7 − 1) ÷ (4 − 0) = 6 ÷ 4",
    "Simplify: 6/4 = 3/2",
    "The slope of the line is 3/2."
  ],
  img_question: ""
},
{
  question: "What is the slope of the line passing through (−3, 5) and (3, −1)?",
  type: "arithmetic",
  correct: "-1",
  variable: "",
  answerSuffix: "",
  hint: "Apply the slope formula and simplify.",
  steps: [
    "Slope = (y₂ − y₁) ÷ (x₂ − x₁)",
    "Slope = (−1 − 5) ÷ (3 − (−3))",
    "Slope = −6 ÷ 6 = −1",
    "The slope of the line is −1."
  ],
  img_question: ""
},
{
  question: "A line has a slope of 2 and passes through the points (2, 1) and (5, y). What is the value of y?",
  type: "algebra",
  correct: "7",
  variable: "y",
  answerSuffix: "",
  hint: "Set up the slope formula with the known slope and solve for y.",
  steps: [
    "Slope = (y − 1) ÷ (5 − 2) = 2",
    "Simplify the denominator: (y − 1) ÷ 3 = 2",
    "Multiply both sides by 3: y − 1 = 6",
    "Add 1 to both sides: y = 7"
  ],
  img_question: ""
},
{
  question: "Two points on a line are (k, 3) and (4, 11). If the slope of the line is 4, what is the value of k?",
  type: "algebra",
  correct: "2",
  variable: "k",
  answerSuffix: "",
  hint: "Plug the two points and the slope into the slope formula, then solve for k.",
  steps: [
    "Slope = (11 − 3) ÷ (4 − k) = 4",
    "Simplify the numerator: 8 ÷ (4 − k) = 4",
    "Multiply both sides by (4 − k): 8 = 4(4 − k)",
    "Distribute: 8 = 16 − 4k",
    "Subtract 16 from both sides: −8 = −4k",
    "Divide both sides by −4: k = 2"
  ],
  img_question: ""
},
{
  question: "Line A passes through (0, 5) and (3, 20). Line B passes through (1, 4) and (5, 12). Which line has the greater slope?",
  type: "algebra",
  correct: "A",
  variable: "",
  answerSuffix: "",
  hint: "Calculate the slope of each line separately, then compare.",
  steps: [
    "Slope of Line A = (20 − 5) ÷ (3 − 0) = 15 ÷ 3 = 5",
    "Slope of Line B = (12 − 4) ÷ (5 − 1) = 8 ÷ 4 = 2",
    "5 > 2, so line A has the greater slope",
  ],
  img_question: ""
},
{
  question: "A line passes through (−2, −3) and (4, 9). A second point on this line has an x-value of 7. What is its y-value?",
  type: "arithmetic",
  correct: "15",
  variable: "",
  answerSuffix: "",
  hint: "Find the slope of the line first, then use it to find how much y changes from x = 4 to x = 7.",
  steps: [
    "Find the slope: (9 − (−3)) ÷ (4 − (−2)) = 12 ÷ 6 = 2",
    "The slope is 2, meaning y increases by 2 for every 1-unit increase in x.",
    "From x = 4 to x = 7 is a run of 3, so the rise is 3 × 2 = 6.",
    "Starting from the point (4, 9): y = 9 + 6 = 15",
    "The y-value of the point at x = 7 is 15."
  ],
  img_question: ""
},


];