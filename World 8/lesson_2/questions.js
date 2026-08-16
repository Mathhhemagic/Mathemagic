const lessonQuestions = [
{
  question: "A circle has a radius of 9 and a central angle of 90°. What is the arc length? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "\\frac{9}{2}",
  variable: "",
  answerSuffix: "π",
  hint: "Use arc length = θ ÷ 360 × 2πr. The fraction 90/360 simplifies to 1/4.",
  steps: [
    "Substitute into the formula: arc length = 90/360 × 2π(9).",
    "Simplify the fraction: 1/4 × 18π.",
    "Arc length = 18π/4 = 9π/2."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 12 and a central angle of 60°. What is the arc length? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "π",
  hint: "Use arc length = θ ÷ 360 × 2πr. Simplify 60/360 first.",
  steps: [
    "Simplify the fraction: 60/360 = 1/6.",
    "Substitute: arc length = 1/6 × 2π(12) = 1/6 × 24π.",
    "Arc length = 4π."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 5 and a central angle of 144°. What is the sector area? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "π",
  hint: "Use sector area = θ ÷ 360 × πr². Simplify 144/360 first.",
  steps: [
    "Simplify the fraction: 144/360 = 2/5.",
    "Substitute: sector area = 2/5 × π(5)² = 2/5 × 25π.",
    "Sector area = 10π."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 8 and a central angle of 270°. What is the sector area? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "48",
  variable: "",
  answerSuffix: "π",
  hint: "Use sector area = θ ÷ 360 × πr². Note that 270/360 = 3/4.",
  steps: [
    "Simplify the fraction: 270/360 = 3/4.",
    "Substitute: sector area = 3/4 × π(8)² = 3/4 × 64π.",
    "Sector area = 48π."
  ],
  img_question: ""
},
{
  question: "Convert 120° to radians.",
  type: "arithmetic",
  correct: "\\frac{2}{3}",
  variable: "",
  answerSuffix: "π",
  hint: "Multiply the degree measure by π ÷ 180, then simplify.",
  steps: [
    "Multiply: 120 × π/180.",
    "Simplify: 120/180 = 2/3.",
    "Result: 2π/3 radians."
  ],
  img_question: ""
},
{
  question: "Convert π/6 radians to degrees.",
  type: "arithmetic",
  correct: "30",
  variable: "",
  answerSuffix: "°",
  hint: "Multiply by 180 ÷ π to convert from radians to degrees.",
  steps: [
    "Multiply: π/6 × 180/π.",
    "The π cancels: 180/6 = 30.",
    "Result: 30°."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 10 and a central angle of π/5 radians. What is the arc length? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "π",
  hint: "Use s = rθ. The angle is already in radians, so substitute directly.",
  steps: [
    "Substitute into s = rθ: s = 10 × π/5.",
    "Simplify: s = 10π/5 = 2π."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 7 and a central angle of π/2 radians. What is the arc length? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "\\frac{7}{2}",
  variable: "",
  answerSuffix: "π",
  hint: "Use s = rθ with r = 7 and θ = π/2.",
  steps: [
    "Substitute into s = rθ: s = 7 × π/2.",
    "Simplify: s = 7π/2."
  ],
  img_question: ""
},
{
  question: "A circle has a radius of 6, with two radii extending from the center, forming a central angle of 120°. What is the area of the formed sector? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "12",
  variable: "",
  answerSuffix: "π",
  hint: "Use sector area = θ ÷ 360 × πr².",
  steps: [
    "From the problem: r = 6 and central angle = 120°.",
    "Simplify the fraction: 120/360 = 1/3.",
    "Substitute: sector area = 1/3 × π(6)² = 1/3 × 36π.",
    "Sector area = 12π."
  ],
  img_question: ""
},
{
  question: "A circle has a circumference of 16π. A sector of the circle has a central angle of 45°. What is the arc length of the sector? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "π",
  hint: "Find the radius from the circumference first using C = 2πr, then apply the arc length formula.",
  steps: [
    "Find the radius: C = 2πr = 16π, so r = 8.",
    "Apply the arc length formula: arc length = 45/360 × 2π(8).",
    "Simplify: 1/8 × 16π = 2π."
  ],
  img_question: ""
},
];