const lessonQuestions = [
{
  question: "A right triangle has an angle of θ. The side opposite θ is 7 and the hypotenuse is 14. What is sin(θ)?",
  type: "arithmetic",
  correct: "\\frac{1}{2}",
  variable: "",
  answerSuffix: "",
  hint: "sin(θ) = opposite ÷ hypotenuse.",
  steps: [
    "Identify the opposite side and hypotenuse: opposite = 7, hypotenuse = 14.",
    "sin(θ) = 7 ÷ 14 = 1/2."
  ],
  img_question: ""
},
{
  question: "A right triangle has an angle of 45° and a hypotenuse of 10. What is the length of the side opposite the 45° angle? Round to the nearest tenth.",
  type: "arithmetic",
  correct: "7.1",
  variable: "",
  answerSuffix: "",
  hint: "Use sin(45°) = opposite ÷ hypotenuse. sin(45°) = √2/2 ≈ 0.707.",
  steps: [
    "Set up: sin(45°) = opposite ÷ 10.",
    "sin(45°) = √2/2 ≈ 0.707.",
    "Solve: opposite = 10 × 0.707 ≈ 7.1."
  ],
  img_question: ""
},
{
  question: "A person stands 40 feet from the base of a building. The angle of elevation to the top of the building is 30°. How tall is the building? Round to the nearest tenth.",
  type: "arithmetic",
  correct: "23.1",
  variable: "",
  answerSuffix: "ft",
  hint: "Draw a right triangle. The distance from the person to the building is the adjacent side. Use tan(30°).",
  steps: [
    "Set up: tan(30°) = height ÷ 40.",
    "Recall that tan(30°) = 1/√3 ≈ 0.577.",
    "Solve: height = 40 × 0.577 ≈ 23.1 feet."
  ],
  img_question: ""
},
{
  question: "A right triangle has an opposite side of 8 and a hypotenuse of 17. What is the measure of angle θ? Round to the nearest degree.",
  type: "arithmetic",
  correct: "28",
  variable: "",
  answerSuffix: "°",
  hint: "Set up sin(θ) = opposite ÷ hypotenuse, then apply the inverse sine function.",
  steps: [
    "Set up: sin(θ) = 8 ÷ 17 ≈ 0.471.",
    "Apply the inverse: θ = sin⁻¹(0.471).",
    "θ ≈ 28°."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 15 and a central angle of 48°. What is the arc length? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "π",
  hint: "Use arc length = θ ÷ 360 × 2πr. Simplify 48/360 first.",
  steps: [
    "Simplify the fraction: 48/360 = 2/15.",
    "Substitute: arc length = 2/15 × 2π(15) = 2/15 × 30π.",
    "Arc length = 4π."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 10 and a central angle of 216°. What is the sector area? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "60",
  variable: "",
  answerSuffix: "π",
  hint: "Use sector area = θ ÷ 360 × πr². Simplify 216/360 first.",
  steps: [
    "Simplify the fraction: 216/360 = 3/5.",
    "Substitute: sector area = 3/5 × π(10)² = 3/5 × 100π.",
    "Sector area = 60π."
  ],
  img_question: ""
},
{
  question: "Convert 3π/4 radians to degrees.",
  type: "arithmetic",
  correct: "135",
  variable: "",
  answerSuffix: "°",
  hint: "Multiply by 180 ÷ π to convert from radians to degrees.",
  steps: [
    "Multiply: 3π/4 × 180/π.",
    "The π cancels: 3 × 180/4 = 540/4 = 135.",
    "Result: 135°."
  ],
  img_question: ""
},
{
  question: "Two similar triangles have a scale factor of 6. The smaller triangle has an area of 8 square units. What is the area of the larger triangle?",
  type: "arithmetic",
  correct: "288",
  variable: "",
  answerSuffix: "square units",
  hint: "The area scale factor is the square of the side-length scale factor.",
  steps: [
    "Area scale factor = 6² = 36.",
    "Area of larger triangle = 8 × 36 = 288 square units."
  ],
  img_question: ""
},
{
  question: "The point (−3, 6) is rotated 90° counterclockwise about the origin. What is the y-coordinate of the image?",
  type: "arithmetic",
  correct: "-3",
  variable: "",
  answerSuffix: "",
  hint: "A 90° counterclockwise rotation changes (x, y) to (−y, x).",
  steps: [
    "Apply the rule: (x, y) becomes (−y, x).",
    "(−3, 6) becomes (−6, −3).",
    "The y-coordinate of the image is −3."
  ],
  img_question: ""
},
{
  question: "A square garden has a side length of 8 m. A circular fountain is placed inside the garden, touching all four sides. What is the area of the garden that is outside the fountain? Round to the nearest tenth.",
  type: "arithmetic",
  correct: "13.7",
  variable: "",
  answerSuffix: "m²",
  hint: "Find the area of the square and the area of the circle separately. The radius of the circle is half the side length of the square. Then subtract.",
  steps: [
    "Area of the square: A = 8² = 64 m².",
    "The circle touches all four sides, so its diameter = 8 m and radius = 4 m.",
    "Area of the circle: A = π(4)² = 16π ≈ 50.3 m².",
    "Remaining area: 64 − 50.3 = 13.7 m²."
  ],
  img_question: ""
},



];