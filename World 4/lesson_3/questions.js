const lessonQuestions = [
{
  question: "Function A is given by y = 4x + 1. The table shows Function B. Which function has a greater initial value (Just enter the letter)?",
  type: "algebra",
  correct: "B",
  variable: "",
  answerSuffix: "",
  hint: "The initial value is the output when x = 0.",
  steps: [
    "Function A: when x = 0, y = 4(0) + 1 = 1. Initial value of A = 1.",
    "Function B: the table shows y = 6 when x = 0. Initial value of B = 6.",
    "6 > 1, so Function B has the greater initial value."
  ],
  img_question: "../../Images/world_4_lesson_3_question_1.jpg"
},
{
  question: "The table shows Function A. Function B is given by y = 5x + 3. Which function has a greater rate of change (Just enter the letter)?",
  type: "algebra",
  correct: "B",
  variable: "",
  answerSuffix: "",
  hint: "Find each function's rate of change, then compare.",
  steps: [
    "Function A rate of change: (11 − 7)/(2 − 1) = 4.",
    "Function B rate of change: the coefficient of x in y = 5x + 3 is 5.",
    "5 > 4, so Function B has the greater rate of change.",
  ],
  img_question: "../../Images/world_4_lesson_3_question_2.jpg"
},
{
  question: "The graph shows Function A, and Function B is given by y = 2x + 6. Which function has a greater initial value (Just enter the letter)?",
  type: "algebra",
  correct: "B",
  variable: "",
  answerSuffix: "",
  hint: "Read the y-intercept of Function A from the graph, then compare it to Function B's y-intercept.",
  steps: [
    "Function A: the graph crosses the y-axis at (0, 3). Initial value of A = 3.",
    "Function B: when x = 0, y = 2(0) + 6 = 6. Initial value of B = 6.",
    "6 > 3, so Function B has the greater initial value.",
  ],
  img_question: "../../Images/world_4_lesson_3_question_3.jpg"
},
{
  question: "The table shows Function A. What is the rate of change of Function A?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Pick any two rows from the table and compute the change in y divided by the change in x.",
  steps: [
    "Choose two rows from the table: (1, 5) and (2, 8).",
    "Rate of change = (8 − 5) / (2 − 1) = 3/1 = 3."
  ],
  img_question: "../../Images/world_4_lesson_3_question_4.jpg"
},
{
  question: "The table shows Function A and the graph shows Function B. Which function has a greater rate of change from x = 1 to x = 2? (If the rate of change is the same, enter the numerical value of the rate of change)",
  type: "algebra",
  correct: "4",
  variable: "",
  answerSuffix: "",
  hint: "Find the rate of change for each function separately, then compare.",
  steps: [
    "Function A rate of change from the table: (8 − 4) / (2 − 1) = 4.",
    "Function B rate of change from the graph: the line passes through (0, 1) and (2, 9), so slope = (9 − 1) / (2 − 0) = 8/2 = 4.",
    "Both functions have the same rate of change: 4.",
    "Enter the shared rate of change: 4."
  ],
  img_question: "../../Images/world_4_lesson_3_question_5.jpg"
},
{
  question: "Function A is given by y = 3x + 7. The table shows Function B. What is the positive difference between their initial values?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Find the initial value of each function (output when x = 0), then subtract.",
  steps: [
    "Function A: when x = 0, y = 3(0) + 7 = 7. Initial value = 7.",
    "Function B: the table shows y = 4 when x = 0. Initial value = 4.",
    "Positive difference = 7 − 4 = 3."
  ],
  img_question: "../../Images/world_4_lesson_3_question_6.jpg"
},
{
  question: "The table shows Function A. Function B has a rate of change of 6 and an initial value of 1. At x = 3, which function has a greater output (Just enter the letter)?",
  type: "algebra",
  correct: "A",
  variable: "",
  answerSuffix: "",
  hint: "Find the output of each function at x = 3, then compare.",
  steps: [
    "Function A: read from the table — at x = 3, y = 22.",
    "Function B: equation is y = 6x + 1. At x = 3, y = 6(3) + 1 = 19.",
    "22 > 19, so Function A has a greater output at x = 3.",
  ],
  img_question: "../../Images/world_4_lesson_3_question_7.jpg"
},
{
  question: "The graph shows Function A. The table shows Function B. What is the positive differences of the rate of change from x = 0 to x = 2?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "",
  hint: "Find the slope of the graphed line and the rate of change from the table, then find the difference.",
  steps: [
    "Function A rate of change from the graph: the line passes through (0, 0) and (2, 6), so slope = (6− 0) / (2 − 0) = 3.",
    "Function B rate of change from the table: (18 − 4) / (2 − 0) = 7.",
    "Function B has the greater rate of change.",
    "Difference = 7 − 3 = 4."
  ],
  img_question: "../../Images/world_4_lesson_3_question_8.jpg"
},
{
  question: "Function B has no initial value listed, but its rate of change is 5 and f(2) = 14. What is the initial value of Function B?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "",
  hint: "Use the rate of change to work backward from f(2) = 14 to find the output at x = 0.",
  steps: [
    "Function B has a rate of change of 5, so each step back by 1 decreases the output by 5.",
    "f(1) = 14 − 5 = 9.",
    "f(0) = 9 − 5 = 4.",
    "The initial value of Function B is 4."
  ],
  img_question: ""
},
{
  question: "The graph shows Function A and the table shows Function B. Which function has a greater value at x = 5 (Just enter the letter)?",
  type: "algebra",
  correct: "B",
  variable: "",
  answerSuffix: "",
  hint: "Extend each function to x = 5 using its rate of change, then compare.",
  steps: [
    "Function A from the graph: passes through (0, 1) and (2, 5), so slope = (5 − 1)/(2 − 0) = 2. Equation: y = 2x + 1. At x = 5: y = 2(5) + 1 = 11.",
    "Function B rate of change from the table: (13 − 9)/(2 − 1) = 4. Initial value = 9 − 4 = 5. Equation: y = 4x + 1. At x = 5: y = 4(5) + 1 = 21.",
    "21 > 11, so Function B has the greater value at x = 5.",
  ],
  img_question: "../../Images/world_4_lesson_3_question_10.jpg"
},

];