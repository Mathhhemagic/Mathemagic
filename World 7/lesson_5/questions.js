const lessonQuestions = [
{
  question: "Find the distance between the points (1, 2) and (4, 6).",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Use the distance formula: d = √((x₂ − x₁)² + (y₂ − y₁)²).",
  steps: [
    "Substitute into the distance formula: d = √((4 − 1)² + (6 − 2)²).",
    "Simplify: d = √(3² + 4²) = √(9 + 16) = √25.",
    "d = 5."
  ],
  img_question: ""
},
{
  question: "Find the midpoint of the segment with endpoints (2, 4) and (10, 8).",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: ", 6)",
  hint: "Average the x-coordinates and average the y-coordinates separately.",
  steps: [
    "x-coordinate of midpoint: (2 + 10) ÷ 2 = 6.",
    "y-coordinate of midpoint: (4 + 8) ÷ 2 = 6.",
    "Midpoint = (6, 6)."
  ],
  img_question: ""
},
{
  question: "What is the center of the circle (x − 5)² + (y − 3)² = 36?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: ", 3)",
  hint: "In the standard form (x − h)² + (y − k)² = r², the center is (h, k). Watch the signs.",
  steps: [
    "Identify h and k from the equation: h = 5 and k = 3.",
    "The center is (5, 3)."
  ],
  img_question: ""
},
{
  question: "What is the radius of the circle (x + 2)² + (y − 4)² = 49?",
  type: "arithmetic",
  correct: "7",
  variable: "",
  answerSuffix: "",
  hint: "In the standard form, r² is the number on the right side. Take its square root to find r.",
  steps: [
    "Identify r² from the equation: r² = 49.",
    "Take the square root: r = 7."
  ],
  img_question: ""
},
{
  question: "What is the center of the circle (x + 3)² + (y − 7)² = 16?",
  type: "arithmetic",
  correct: "-3",
  variable: "",
  answerSuffix: ", 7)",
  hint: "The signs inside the parentheses are opposite the coordinates of the center.",
  steps: [
    "Rewrite as (x − (−3))² + (y − 7)² = 16.",
    "Identify h = −3 and k = 7.",
    "The center is (−3, 7).",
    "Enter the x-coordinate of the center: −3."
  ],
  img_question: ""
},
{
  question: "Find the distance between the points (−3, 1) and (5, 7).",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "",
  hint: "Subtract the coordinates carefully, including the negative sign, then apply the distance formula.",
  steps: [
    "Substitute into the distance formula: d = √((5 − (−3))² + (7 − 1)²).",
    "Simplify: d = √(8² + 6²) = √(64 + 36) = √100.",
    "d = 10."
  ],
  img_question: ""
},
{
  question: "One endpoint of a segment is (3, 7) and the midpoint is (8, 10). What is the x-coordinate of the other endpoint?",
  type: "arithmetic",
  correct: "13",
  variable: "",
  answerSuffix: "",
  hint: "Set up the midpoint formula for the x-coordinates and solve for the unknown endpoint.",
  steps: [
    "Set up the midpoint formula: (3 + x) ÷ 2 = 8.",
    "Multiply both sides by 2: 3 + x = 16.",
    "Subtract 3: x = 13."
  ],
  img_question: ""
},
{
  question: "A circle has the equation x² + y² = 64. What is the radius?",
  type: "arithmetic",
  correct: "8",
  variable: "",
  answerSuffix: "",
  hint: "A circle centered at the origin has equation x² + y² = r². Find r by taking the square root of the right side.",
  steps: [
    "Identify r²: r² = 64.",
    "Take the square root: r = 8.",
    "The circle is centered at the origin with radius 8."
  ],
  img_question: ""
},
{
  question: "A circle has a center of (4, −3) and a radius of 6. Which of the following is its equation? Enter the number of the correct option.\n1: (x + 4)² + (y − 3)² = 6. \n2: (x − 4)² + (y + 3)² = 36. \n3: (x − 4)² + (y − 3)² = 36. \n4: (x + 4)² + (y + 3)² = 36.",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Use the standard form (x − h)² + (y − k)² = r². Substitute the center and radius, and watch the signs.",
  steps: [
    "Substitute h = 4, k = −3, and r = 6 into (x − h)² + (y − k)² = r².",
    "The equation is (x − 4)² + (y + 3)² = 36.",
    "This matches option 2."
  ],
  img_question: ""
},
{
  question: "The endpoints of a diameter of a circle are (2, 3) and (8, 11). What is the radius of the circle?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Find the length of the diameter using the distance formula, then divide by 2.",
  steps: [
    "Find the diameter using the distance formula: d = √((8 − 2)² + (11 − 3)²).",
    "Simplify: d = √(6² + 8²) = √(36 + 64) = √100 = 10.",
    "Radius = diameter ÷ 2 = 10 ÷ 2 = 5."
  ],
  img_question: ""
},



]