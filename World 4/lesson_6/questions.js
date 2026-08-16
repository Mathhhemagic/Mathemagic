const lessonQuestions = [
{
  question: "If f(x) = 3x − 5, what is f(4)?",
  type: "arithmetic",
  correct: "7",
  variable: "",
  answerSuffix: "",
  hint: "Substitute x = 4 into the function and simplify.",
  steps: [
    "Substitute x = 4 into f(x) = 3x − 5.",
    "f(4) = 3(4) − 5 = 12 − 5 = 7."
  ],
  img_question: ""
},
{
  question: "The graph shows f(x). For how many values of x does f(x) = 1?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Draw a horizontal line at y = 1 and count how many times it crosses the graph.",
  steps: [
    "Draw a horizontal line at y = 1 across the graph.",
    "Count the number of intersections with the curve.",
    "The line crosses the graph at three distinct points.",
    "f(x) = 1 for 3 values of x."
  ],
  img_question: "../../Images/world_4_lesson_6_question_2.jpg"
},
{
  question: "Function A is given by y = 2x + 5. Function B is shown in the table. Out of the two functions, what is the greatest rate of change?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Find the rate of change for each function and compare. Enter the greater rate of change.",
  steps: [
    "Function A rate of change: the coefficient of x in y = 2x + 5 is 2.",
    "Function B rate of change from the table: (11 − 8) ÷ (2 − 1) = 3.",
    "3 > 2, so Function B has the greater rate of change.",
    "Enter the greater rate of change: 3."
  ],
  img_question: "../../Images/world_4_lesson_6_question_3.jpg"
},
{
  question: "The function g(x) = f(x) + 4 is a transformation of f(x). If f(3) = 2, what is g(3)?",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "",
  hint: "Adding a constant to f(x) shifts the output up by that amount.",
  steps: [
    "g(x) = f(x) + 4 shifts every output of f(x) up by 4.",
    "g(3) = f(3) + 4 = 2 + 4 = 6."
  ],
  img_question: ""
},
{
  question: "The graph shows the function f(x). What is the range of f(x)?",
  type: "arithmetic",
  correct: "-3",
  variable: "",
  answerSuffix: "≤ f(x) ≤ 5",
  hint: "The range is determined by the lowest and highest y-values on the graph.",
  steps: [
    "Find the lowest y-value on the graph: y = −3.",
    "Find the highest y-value on the graph: y = 5.",
    "The range is −3 ≤ f(x) ≤ 5.",
    "Enter the lower bound: −3."
  ],
  img_question: "../../Images/world_4_lesson_6_question_5.jpg"
},
{
  question: "A piecewise function is defined as f(x) = 2x + 1 for x < 3, and f(x) = 10 for x ≥ 3. What is f(5)?",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "",
  hint: "Determine which piece of the function applies when x = 5.",
  steps: [
    "Since 5 ≥ 3, use the second piece: f(x) = 10.",
    "f(5) = 10."
  ],
  img_question: ""
},
{
  question: "The function h(x) = f(x − 2) is a horizontal transformation of f(x). If the point (3, 7) is on f(x), what point is on h(x)?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: ", 7)",
  hint: "Replacing x with (x − 2) shifts the graph 2 units to the right. Add 2 to the x-coordinate.",
  steps: [
    "h(x) = f(x − 2) shifts the graph of f(x) two units to the right.",
    "The point (3, 7) on f(x) moves to (3 + 2, 7) = (5, 7) on h(x).",
    "Enter the x-coordinate of the new point: 5."
  ],
  img_question: ""
},
{
  question: "If f(x) = 2x + 3 and f(x) = 15, what is x?",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "",
  hint: "Set the function equal to 15 and solve for x.",
  steps: [
    "Set 2x + 3 = 15.",
    "Subtract 3 from both sides: 2x = 12.",
    "Divide by 2: x = 6."
  ],
  img_question: ""
},
{
  question: "The graph shows f(x). Over what interval is f(x) decreasing? Enter the left endpoint of the interval.",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "< x < 4",
  hint: "A function is decreasing where the graph falls from left to right. Read the x-values of that section.",
  steps: [
    "Read the graph from left to right.",
    "The graph rises from x = −2 to x = 1, reaching a peak at (1, 6).",
    "The graph falls from x = 1 to x = 4.",
    "The function is decreasing on the interval 1 < x < 4.",
    "Enter the left endpoint: 1."
  ],
  img_question: "../../Images/world_4_lesson_6_question_9.jpg"
},
{
  question: "A piecewise function is defined as f(x) = x² for x ≤ 0, and f(x) = 2x + 1 for x > 0. What is f(−3) + f(4)?",
  type: "arithmetic",
  correct: "18",
  variable: "",
  answerSuffix: "",
  hint: "Evaluate each piece separately using the correct rule for each input, then add.",
  steps: [
    "For f(−3): since −3 ≤ 0, use f(x) = x². f(−3) = (−3)² = 9.",
    "For f(4): since 4 > 0, use f(x) = 2x + 1. f(4) = 2(4) + 1 = 9.",
    "f(−3) + f(4) = 9 + 9 = 18."
  ],
  img_question: ""
},
]