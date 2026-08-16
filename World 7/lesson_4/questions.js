const lessonQuestions = [
{
  question: "A right triangle has legs of 9 and 12. What is the length of the hypotenuse?",
  type: "arithmetic",
  correct: "15",
  variable: "",
  answerSuffix: "",
  hint: "Check whether the legs are multiples of a common Pythagorean triple.",
  steps: [
    "Notice that 9 = 3 × 3 and 12 = 4 × 3, so this is a multiple of the 3-4-5 triple.",
    "Hypotenuse = 5 × 3 = 15."
  ],
  img_question: ""
},
{
  question: "A right triangle has a hypotenuse of 13 and a leg of 5. What is the length of the other leg?",
  type: "arithmetic",
  correct: "12",
  variable: "",
  answerSuffix: "",
  hint: "Recognize the 5-12-13 Pythagorean triple, or use a² + b² = c² and solve for the missing leg.",
  steps: [
    "Substitute into a² + b² = c²: 5² + b² = 13².",
    "Simplify: 25 + b² = 169.",
    "Subtract: b² = 144.",
    "Take the square root: b = 12."
  ],
  img_question: ""
},
{
  question: "A right triangle has legs of 8 and 15. What is the length of the hypotenuse?",
  type: "arithmetic",
  correct: "17",
  variable: "",
  answerSuffix: "",
  hint: "Check whether the side lengths match a known Pythagorean triple.",
  steps: [
    "Recognize that 8, 15, 17 is a Pythagorean triple.",
    "The hypotenuse is 17.",
    "Verify: 8² + 15² = 64 + 225 = 289 = 17². ✓"
  ],
  img_question: ""
},
{
  question: "A right triangle has legs of 7 and 24. What is the length of the hypotenuse?",
  type: "arithmetic",
  correct: "25",
  variable: "",
  answerSuffix: "",
  hint: "Check whether the side lengths match a known Pythagorean triple.",
  steps: [
    "Recognize that 7, 24, 25 is a Pythagorean triple.",
    "The hypotenuse is 25.",
    "Verify: 7² + 24² = 49 + 576 = 625 = 25². ✓"
  ],
  img_question: ""
},
{
  question: "A person walks 5 miles east and then 12 miles north. How far is the person from the starting point?",
  type: "arithmetic",
  correct: "13",
  variable: "",
  answerSuffix: "miles",
  hint: "The east and north distances form the two legs of a right triangle. Use the Pythagorean theorem to find the straight-line distance.",
  steps: [
    "The legs are 5 and 12.",
    "Recognize the 5-12-13 Pythagorean triple.",
    "The straight-line distance is 13 miles."
  ],
  img_question: ""
},
{
  question: "What is the distance between the points (2, 1) and (6, 4) on the coordinate plane?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Find the horizontal and vertical distances between the two points. These are the legs of a right triangle.",
  steps: [
    "Horizontal distance: 6 − 2 = 4.",
    "Vertical distance: 4 − 1 = 3.",
    "Recognize the 3-4-5 triple: distance = 5."
  ],
  img_question: ""
},
{
  question: "What is the distance between the points (0, 0) and (5, 12) on the coordinate plane?",
  type: "arithmetic",
  correct: "13",
  variable: "",
  answerSuffix: "",
  hint: "Use the horizontal and vertical distances as the legs of a right triangle.",
  steps: [
    "Horizontal distance: 5 − 0 = 5.",
    "Vertical distance: 12 − 0 = 12.",
    "Recognize the 5-12-13 triple: distance = 13."
  ],
  img_question: ""
},
{
  question: "What is the length of the diagonal line of a rectangle with a width of 8 cm and a height of 6 cm?",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "cm",
  hint: "The diagonal is the hypotenuse of a right triangle formed by the length and width of the rectangle.",
  steps: [
    "The legs of the right triangle are 6 cm and 8 cm.",
    "Recognize the 3-4-5 triple scaled by 2: 6 = 3 × 2, 8 = 4 × 2, so hypotenuse = 5 × 2 = 10.",
    "The diagonal is 10 cm."
  ],
  img_question: ""
},
{
  question: "A ladder 20 feet long leans against a wall. The base of the ladder is 12 feet from the wall. How high up the wall does the ladder reach?",
  type: "arithmetic",
  correct: "16",
  variable: "",
  answerSuffix: "ft",
  hint: "The ladder is the hypotenuse, and the base distance and wall height are the legs. Use a² + b² = c².",
  steps: [
    "Substitute into a² + b² = c²: 12² + h² = 20².",
    "Simplify: 144 + h² = 400.",
    "Subtract: h² = 256.",
    "Take the square root: h = 16 feet."
  ],
  img_question: ""
},
{
  question: "A right triangle has a hypotenuse of 26 and a leg of 10. What is the length of the other leg?",
  type: "arithmetic",
  correct: "24",
  variable: "",
  answerSuffix: "",
  hint: "Use a² + b² = c² and solve for the missing leg. Check whether the answer is a multiple of a known triple.",
  steps: [
    "Substitute into a² + b² = c²: 10² + b² = 26².",
    "Simplify: 100 + b² = 676.",
    "Subtract: b² = 576.",
    "Take the square root: b = 24.",
  ],
  img_question: ""
},

];