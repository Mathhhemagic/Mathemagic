const lessonQuestions = [
{
  question: "The point (4, −3) is reflected across the x-axis. What are the coordinates of the image? Enter the y-coordinate.",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Reflecting across the x-axis changes the sign of the y-coordinate only.",
  steps: [
    "Reflecting across the x-axis: (x, y) becomes (x, −y).",
    "(4, −3) becomes (4, 3).",
    "The y-coordinate of the image is 3."
  ],
  img_question: ""
},
{
  question: "The point (−5, 2) is reflected across the y-axis. What is the x-coordinate of the image?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Reflecting across the y-axis changes the sign of the x-coordinate only.",
  steps: [
    "Reflecting across the y-axis: (x, y) becomes (−x, y).",
    "(−5, 2) becomes (5, 2).",
    "The x-coordinate of the image is 5."
  ],
  img_question: ""
},
{
  question: "The point (3, 7) is translated 5 units left and 4 units up. What is the x-coordinate of the point?",
  type: "arithmetic",
  correct: "-2",
  variable: "",
  answerSuffix: "",
  hint: "Moving left subtracts from the x-coordinate. Moving up adds to the y-coordinate.",
  steps: [
    "Subtract 5 from the x-coordinate: 3 − 5 = −2.",
    "Add 4 to the y-coordinate: 7 + 4 = 11.",
    "The image is at (−2, 11).",
    "The x-coordinate is −2."
  ],
  img_question: ""
},
{
  question: "The point (2, 5) is rotated 90° counterclockwise about the origin. What is the x-coordinate of the coordinate?",
  type: "arithmetic",
  correct: "-5",
  variable: "",
  answerSuffix: "",
  hint: "A 90° counterclockwise rotation changes (x, y) to (−y, x).",
  steps: [
    "Apply the rule: (x, y) becomes (−y, x).",
    "(2, 5) becomes (−5, 2).",
    "The x-coordinate of the image is −5."
  ],
  img_question: ""
},
{
  question: "Two similar triangles have corresponding sides of 5 and 20. A second side of the smaller triangle is 9. What is the corresponding side of the larger triangle?",
  type: "arithmetic",
  correct: "36",
  variable: "",
  answerSuffix: "",
  hint: "Find the scale factor first, then multiply the known side by it.",
  steps: [
    "Scale factor = 20 ÷ 5 = 4.",
    "Multiply the corresponding side: 9 × 4 = 36."
  ],
  img_question: ""
},
{
  question: "The point (3, 4) is dilated by a scale factor of 3 about the origin. What is the y-coordinate of the coordinate?",
  type: "arithmetic",
  correct: "12",
  variable: "",
  answerSuffix: "",
  hint: "Multiply both coordinates by the scale factor.",
  steps: [
    "Multiply each coordinate by 3: (3 × 3, 4 × 3) = (9, 12).",
    "The y-coordinate of the image is 12."
  ],
  img_question: ""
},
{
  question: "Two similar triangles have a scale factor of 4. The smaller triangle has an area of 7 square units. What is the area of the larger triangle?",
  type: "arithmetic",
  correct: "112",
  variable: "",
  answerSuffix: "square units",
  hint: "The area scale factor is the square of the side-length scale factor.",
  steps: [
    "Area scale factor = 4² = 16.",
    "Area of larger triangle = 7 × 16 = 112 square units."
  ],
  img_question: ""
},
{
  question: "Two similar rectangles have a scale factor of 5. The smaller rectangle has an area of 6 square units. What is the area of the larger rectangle?",
  type: "arithmetic",
  correct: "150",
  variable: "",
  answerSuffix: "square units",
  hint: "The area scale factor is the square of the side-length scale factor.",
  steps: [
    "Area scale factor = 5² = 25.",
    "Area of larger rectangle = 6 × 25 = 150 square units."
  ],
  img_question: ""
},
{
  question: "Two similar triangles share a pair of equal angles. The sides of the smaller triangle are 6, 8, and 10. The longest side of the larger triangle is 25. What is the shortest side of the larger triangle?",
  type: "arithmetic",
  correct: "15",
  variable: "",
  answerSuffix: "",
  hint: "Find the scale factor using the longest sides, then apply it to the shortest side.",
  steps: [
    "Scale factor = 25 ÷ 10 = 2.5.",
    "Shortest side of larger triangle = 6 × 2.5 = 15."
  ],
  img_question: ""
},

{
  question: "A rectangular pool is 10 m long and 6 m wide. A border of equal width is built around the outside of the pool. The total area including the border is 192 square meters. What is the width of the border?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "m",
  hint: "Let the border width be x. The new dimensions are (10 + 2x) and (6 + 2x). Set up an area equation and solve.",
  steps: [
    "Let the border width be x.",
    "New dimensions: length = 10 + 2x, width = 6 + 2x.",
    "Set up the area equation: (10 + 2x)(6 + 2x) = 192.",
    "Expand: 60 + 32x + 4x² = 192.",
    "Rearrange: 4x² + 32x − 132 = 0.",
    "Divide by 4: x² + 8x − 33 = 0.",
    "Factor: (x + 11)(x − 3) = 0.",
    "Solve: x = −11 or x = 3.",
    "A width cannot be negative, so the border is 3 meters wide."
  ],
  img_question: ""
},


];