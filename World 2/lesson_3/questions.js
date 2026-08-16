const lessonQuestions = [
{
  question: "In which quadrant does the point (−3, 5) lie?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Check the sign of each coordinate and match it to a quadrant.",
  steps: [
    "The x-value is −3 (negative) and the y-value is 5 (positive).",
    "A point with a negative x-value and a positive y-value lies in Quadrant II.",
    "The answer is Quadrant II."
  ],
  img_question: ""
},
{
  question: "What is the y-coordinate of any point that lies on the x-axis?",
  type: "arithmetic",
  correct: "0",
  variable: "",
  answerSuffix: "",
  hint: "Think about where the x-axis sits relative to the y-axis.",
  steps: [
    "The x-axis is the horizontal number line that passes through the origin.",
    "Every point on the x-axis has a y-value of 0.",
    "The y-coordinate is 0."
  ],
  img_question: ""
},
{
  question: "What is the distance between the points (2, 7) and (9, 7)?",
  type: "arithmetic",
  correct: "7",
  variable: "",
  answerSuffix: "",
  hint: "Both points share the same y-value, so subtract the x-values.",
  steps: [
    "Since both points have the same y-coordinate (7), they lie on a horizontal line.",
    "The distance is the difference between the x-values: 9 − 2 = 7.",
    "The distance between the two points is 7."
  ],
  img_question: ""
},
{
  question: "Point A is at (4, −3) and point B is at (4, 8). What is the distance between A and B?",
  type: "arithmetic",
  correct: "11",
  variable: "",
  answerSuffix: "",
  hint: "Both points share the same x-value, so subtract the y-values.",
  steps: [
    "Since both points have the same x-coordinate (4), they lie on a vertical line.",
    "The distance is the difference between the y-values: 8 − (−3) = 8 + 3 = 11.",
    "The distance between A and B is 11."
  ],
  img_question: ""
},
{
  question: "What is the midpoint of the segment connecting (2, 4) and (10, 8)?",
  type: "algebra",
  correct: "(6, 6)",
  variable: "",
  answerSuffix: "",
  hint: "Average the x-values and average the y-values separately.",
  steps: [
    "Midpoint x-coordinate: (2 + 10) ÷ 2 = 12 ÷ 2 = 6",
    "Midpoint y-coordinate: (4 + 8) ÷ 2 = 12 ÷ 2 = 6",
    "The midpoint is (6, 6)."
  ],
  img_question: ""
},
{
  question: "What is the midpoint of the segment connecting (−4, 6) and (8, −2)?",
  type: "algebra",
  correct: "(2, 2)",
  variable: "",
  answerSuffix: "",
  hint: "Average the x-values and average the y-values, keeping track of negative signs.",
  steps: [
    "Midpoint x-coordinate: (−4 + 8) ÷ 2 = 4 ÷ 2 = 2",
    "Midpoint y-coordinate: (6 + (−2)) ÷ 2 = 4 ÷ 2 = 2",
    "The midpoint is (2, 2)."
  ],
  img_question: ""
},
{
  question: "Point M is the midpoint of segment AB. Point A is at (1, 3) and point M is at (5, 7). What are the coordinates of point B?",
  type: "algebra",
  correct: "(9, 11)",
  variable: "",
  answerSuffix: "",
  hint: "The midpoint is the average of the endpoints. Work backwards to find B.",
  steps: [
    "Let B = (x, y). The midpoint formula gives: ((1 + x) ÷ 2, (3 + y) ÷ 2) = (5, 7).",
    "For the x-coordinate: (1 + x) ÷ 2 = 5, so 1 + x = 10, and x = 9.",
    "For the y-coordinate: (3 + y) ÷ 2 = 7, so 3 + y = 14, and y = 11.",
    "Point B is at (9, 11)."
  ],
  img_question: ""
},
{
  question: "What is the distance between the points (0, 0) and (6, 8)?",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "",
  hint: "Picture a right triangle with legs of 6 and 8. Can you recognize the side lengths?",
  steps: [
    "The horizontal distance between the points is 6 − 0 = 6.",
    "The vertical distance between the points is 8 − 0 = 8.",
    "Use the Pythagorean theorem: d² = 6² + 8² = 36 + 64 = 100.",
    "Take the square root: d = √100 = 10.",
    "The distance between the two points is 10."
  ],
  img_question: ""
},
{
  question: "What is the distance between the points (1, 2) and (4, 6)?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Find the horizontal and vertical distances, then apply the Pythagorean theorem.",
  steps: [
    "The horizontal distance is 4 − 1 = 3.",
    "The vertical distance is 6 − 2 = 4.",
    "Use the Pythagorean theorem: d² = 3² + 4² = 9 + 16 = 25.",
    "Take the square root: d = √25 = 5.",
    "The distance between the two points is 5."
  ],
  img_question: ""
},
{
  question: "The midpoint of segment PQ is (4, 5). Point P is at (1, 1). What is the distance between point Q and the midpoint?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "First find the coordinates of Q using the midpoint formula, then find the distance from Q to the midpoint.",
  steps: [
    "Let Q = (x, y). Use the midpoint formula: ((1 + x) ÷ 2, (1 + y) ÷ 2) = (4, 5).",
    "For the x-coordinate: (1 + x) ÷ 2 = 4, so 1 + x = 8, and x = 7.",
    "For the y-coordinate: (1 + y) ÷ 2 = 5, so 1 + y = 10, and y = 9.",
    "Point Q is at (7, 9). Now find the distance from Q (7, 9) to the midpoint (4, 5).",
    "Horizontal distance: 7 − 4 = 3. Vertical distance: 9 − 5 = 4.",
    "Use the Pythagorean theorem: d² = 3² + 4² = 9 + 16 = 25.",
    "Take the square root: d = √25 = 5.",
    "The distance between point Q and the midpoint is 5."
  ],
  img_question: ""
},

];