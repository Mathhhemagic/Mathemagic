const lessonQuestions = [
{
  question: "A rectangle has a length of 11 m and a width of 6 m. What is its area?",
  type: "arithmetic",
  correct: "66",
  variable: "",
  answerSuffix: "m²",
  hint: "Use A = lw.",
  steps: [
    "Substitute into A = lw: A = 11 × 6.",
    "Simplify: A = 66 m²."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 7. What is its area? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "49",
  variable: "",
  answerSuffix: "π",
  hint: "Use A = πr². Square the radius first.",
  steps: [
    "Substitute into A = πr²: A = π(7)².",
    "Simplify: A = 49π."
  ],
  img_question: ""
},
{
  question: "What is the area of the composite figure shown?",
  type: "arithmetic",
  correct: "70",
  variable: "",
  answerSuffix: "cm²",
  hint: "Split the figure into two rectangles. Find each area separately and add.",
  steps: [
    "Rectangle 1: A = 8 × 7 = 56 cm².",
    "Rectangle 2: A = 7 × 2 = 14 cm².",
    "Total area: 56 + 14 = 70 cm²."
  ],
  img_question: "../../Images/world_7_lesson_6_question_3.jpg"
},
{
  question: "A cylinder has a radius of 5 cm and a height of 9 cm. What is its volume? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "225",
  variable: "",
  answerSuffix: "π cm³",
  hint: "Use V = πr²h. Square the radius first, then multiply by the height.",
  steps: [
    "Substitute into V = πr²h: V = π(5)²(9).",
    "Simplify: V = π(25)(9) = 225π cm³."
  ],
  img_question: ""
},
{
  question: "A sphere has a radius of 6 ft. What is its volume? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "288",
  variable: "",
  answerSuffix: "π ft³",
  hint: "Use V = 4πr³ ÷ 3. Cube the radius first.",
  steps: [
    "Substitute into V = 4πr³ ÷ 3: V = 4π(6)³ ÷ 3.",
    "Simplify: V = 4π(216) ÷ 3 = 864π ÷ 3 = 288π ft³."
  ],
  img_question: ""
},
{
  question: "A triangle has angles of 42° and 103°. What is the measure of the third angle?",
  type: "arithmetic",
  correct: "35",
  variable: "",
  answerSuffix: "°",
  hint: "The three angles of a triangle always add to 180°.",
  steps: [
    "Third angle = 180° − 42° − 103° = 35°."
  ],
  img_question: ""
},
{
  question: "A 30°-60°-90° triangle has a hypotenuse of 20. What is the length of the shorter leg?",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "",
  hint: "In a 30°-60°-90° triangle, the hypotenuse is twice the shortest side.",
  steps: [
    "The hypotenuse = 2x, so x = hypotenuse ÷ 2 = 20 ÷ 2 = 10.",
    "The shorter leg is 10."
  ],
  img_question: ""
},
{
  question: "A right triangle has legs of 15 and 20. What is the length of the hypotenuse?",
  type: "arithmetic",
  correct: "25",
  variable: "",
  answerSuffix: "",
  hint: "Check whether the legs are multiples of a common Pythagorean triple.",
  steps: [
    "Notice that 15 = 3 × 5 and 20 = 4 × 5, so this is a multiple of the 3-4-5 triple.",
    "Hypotenuse = 5 × 5 = 25."
  ],
  img_question: ""
},
{
  question: "Find the distance between the points (−1, 2) and (5, 10).",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "",
  hint: "Use the distance formula: d = √((x₂ − x₁)² + (y₂ − y₁)²).",
  steps: [
    "Substitute into the distance formula: d = √((5 − (−1))² + (10 − 2)²).",
    "Simplify: d = √(6² + 8²) = √(36 + 64) = √100.",
    "d = 10."
  ],
  img_question: ""
},
{
  question: "A circle has the equation (x − 3)² + (y + 5)² = 81. What is the radius of the circle, and what are the coordinates of its center? Enter the radius.",
  type: "arithmetic",
  correct: "9",
  variable: "",
  answerSuffix: "; center (3, −5)",
  hint: "In standard form (x − h)² + (y − k)² = r², the radius is the square root of the right side.",
  steps: [
    "Identify r² = 81. Take the square root: r = 9.",
    "Identify h = 3 and k = −5 (note the sign flip for k).",
    "The radius is 9 and the center is (3, −5)."
  ],
  img_question: ""
},
]