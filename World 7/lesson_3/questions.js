const lessonQuestions = [
{
  question: "A triangle has angles of 58° and 74°. What is the measure of the third angle?",
  type: "arithmetic",
  correct: "48",
  variable: "",
  answerSuffix: "°",
  hint: "The three angles of a triangle always add to 180°.",
  steps: [
    "The three angles must sum to 180°.",
    "Third angle = 180° − 58° − 74° = 48°."
  ],
  img_question: ""
},
{
  question: "Two similar triangles have corresponding sides of 4 and 12. What is the scale factor from the smaller triangle to the larger triangle?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Divide the larger corresponding side by the smaller corresponding side.",
  steps: [
    "Scale factor = larger side ÷ smaller side.",
    "Scale factor = 12 ÷ 4 = 3."
  ],
  img_question: ""
},
{
  question: "Can side lengths of 5, 9, and 15 form a triangle?  Enter 1 for yes and 0 for no.",
  type: "arithmetic",
  correct: "0",
  variable: "",
  answerSuffix: "",
  hint: "Check whether the sum of every pair of sides is greater than the remaining side.",
  steps: [
    "Check: 5 + 9 = 14, which is not greater than 15.",
    "Since this condition fails, the side lengths cannot form a triangle.",
    "Enter 0 for no."
  ],
  img_question: ""
},
{
  question: "The diagram shows a triangle with an exterior angle. What is the value of x?",
  type: "arithmetic",
  correct: "115",
  variable: "",
  answerSuffix: "°",
  hint: "An exterior angle equals the sum of the two non-adjacent interior angles.",
  steps: [
    "Apply the exterior angle theorem: x = 65° + 50°.",
    "x = 115°."
  ],
  img_question: "../../Images/world_7_lesson_3_question_4.jpg"
},
{
  question: "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
  type: "arithmetic",
  correct: "13",
  variable: "",
  answerSuffix: "",
  hint: "Use the Pythagorean theorem: a² + b² = c².",
  steps: [
    "Substitute into a² + b² = c²: 5² + 12² = c².",
    "Simplify: 25 + 144 = c².",
    "c² = 169, so c = √169 = 13."
  ],
  img_question: ""
},
{
  question: "A right triangle has a hypotenuse of 17 and one leg of 8. What is the length of the other leg?",
  type: "arithmetic",
  correct: "15",
  variable: "",
  answerSuffix: "",
  hint: "Use a² + b² = c² and solve for the missing leg.",
  steps: [
    "Substitute into a² + b² = c²: 8² + b² = 17².",
    "Simplify: 64 + b² = 289.",
    "Subtract: b² = 225.",
    "Take the square root: b = 15."
  ],
  img_question: ""
},
{
  question: "A 45°-45°-90° triangle has legs of length 7. What is the length of the hypotenuse?",
  type: "algebra",
  correct: "7\\sqrt{2}",
  variable: "",
  answerSuffix: "",
  hint: "In a 45°-45°-90° triangle, the hypotenuse equals the leg multiplied by √2.",
  steps: [
    "Apply the 45°-45°-90° ratio: hypotenuse = leg × √2.",
    "Hypotenuse = 7√2."
  ],
  img_question: ""
},
{
  question: "A 30°-60°-90° triangle has a shortest side of length 6. What is the length of the hypotenuse?",
  type: "arithmetic",
  correct: "12",
  variable: "",
  answerSuffix: "",
  hint: "In a 30°-60°-90° triangle, the hypotenuse is twice the shortest side.",
  steps: [
    "The shortest side is opposite the 30° angle.",
    "Apply the 30°-60°-90° ratio: hypotenuse = 2x = 2(6) = 12."
  ],
  img_question: ""
},
{
  question: "Two similar triangles are shown. What is the value of x?",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "",
  hint: "Set up a proportion using corresponding sides, then solve for x.",
  steps: [
    "Identify the corresponding sides: 4 corresponds to 8, and 5 corresponds to x.",
    "Set up the proportion: 4/8 = 5/x.",
    "Cross multiply: 4x = 40.",
    "Solve: x = 10."
  ],
  img_question: "../../Images/world_7_lesson_3_question_9.jpg"
},
{
  question: "A 30°-60°-90° triangle has a hypotenuse of 16. What is the length of the longer leg?",
  type: "algebra",
  correct: "8\\sqrt{3}",
  variable: "",
  answerSuffix: "",
  hint: "Work backward from the hypotenuse to find the shortest side, then use the ratio to find the longer leg.",
  steps: [
    "In a 30°-60°-90° triangle, the hypotenuse = 2x, so x = hypotenuse ÷ 2 = 16 ÷ 2 = 8.",
    "The longer leg = x√3 = 8√3."
  ],
  img_question: ""
},


];