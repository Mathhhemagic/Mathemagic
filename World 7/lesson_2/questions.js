const lessonQuestions = [
{
  question: "A rectangular prism has a length of 5 cm, a width of 4 cm, and a height of 3 cm. What is its volume?",
  type: "arithmetic",
  correct: "60",
  variable: "",
  answerSuffix: "cm³",
  hint: "Use V = lwh. Multiply all three dimensions together.",
  steps: [
    "Substitute into V = lwh: V = 5 × 4 × 3.",
    "Simplify: V = 60 cm³."
  ],
  img_question: ""
},
{
  question: "A rectangular prism has a volume of 120 cubic inches. Its length is 10 inches and its width is 4 inches. What is its height?",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "in.",
  hint: "Use V = lwh and solve for h.",
  steps: [
    "Substitute the known values into V = lwh: 120 = 10 × 4 × h.",
    "Simplify: 120 = 40h.",
    "Divide both sides by 40: h = 3 inches."
  ],
  img_question: ""
},
{
  question: "A triangular prism has a triangular base with a base of 8 m and a height of 5 m. The prism has a length of 12 m. What is its volume?",
  type: "arithmetic",
  correct: "240",
  variable: "",
  answerSuffix: "m³",
  hint: "Find the area of the triangular base first using A = bh ÷ 2, then multiply by the length of the prism.",
  steps: [
    "Find the area of the triangular base: B = 8 × 5 ÷ 2 = 20 m².",
    "Substitute into V = Bh: V = 20 × 12 = 240 m³."
  ],
  img_question: ""
},
{
  question: "A cylinder has a radius of 4 ft and a height of 10 ft. What is its volume? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "160",
  variable: "",
  answerSuffix: "π ft³",
  hint: "Use V = πr²h. Square the radius first, then multiply by the height.",
  steps: [
    "Substitute into V = πr²h: V = π(4)²(10).",
    "Simplify: V = π(16)(10) = 160π ft³."
  ],
  img_question: ""
},
{
  question: "A cylinder has a diameter of 14 cm and a height of 5 cm. What is its volume? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "245",
  variable: "",
  answerSuffix: "π cm³",
  hint: "Divide the diameter by 2 to find the radius before using V = πr²h.",
  steps: [
    "Find the radius: r = 14 ÷ 2 = 7 cm.",
    "Substitute into V = πr²h: V = π(7)²(5).",
    "Simplify: V = π(49)(5) = 245π cm³."
  ],
  img_question: ""
},
{
  question: "A sphere has a radius of 3 cm. What is its volume? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "36",
  variable: "",
  answerSuffix: "π cm³",
  hint: "Use V = 4πr³ ÷ 3. Cube the radius first, then multiply by 4 and divide by 3.",
  steps: [
    "Substitute into V = 4πr³ ÷ 3: V = 4π(3)³ ÷ 3.",
    "Simplify: V = 4π(27) ÷ 3 = 108π ÷ 3 = 36π cm³."
  ],
  img_question: ""
},
{
  question: "A sphere has a diameter of 6 inches. What is its volume? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "36",
  variable: "",
  answerSuffix: "π in³",
  hint: "Divide the diameter by 2 to find the radius, then use V = 4πr³ ÷ 3.",
  steps: [
    "Find the radius: r = 6 ÷ 2 = 3 inches.",
    "Substitute into V = 4πr³ ÷ 3: V = 4π(3)³ ÷ 3.",
    "Simplify: V = 4π(27) ÷ 3 = 108π ÷ 3 = 36π in³."
  ],
  img_question: ""
},
{
  question: "A rectangular prism has a length of 7 ft, a width of 5 ft, and a height of 6 ft. What is its volume?",
  type: "arithmetic",
  correct: "210",
  variable: "",
  answerSuffix: "ft³",
  hint: "Read all three dimensions from the diagram, then use V = lwh.",
  steps: [
    "Read the dimensions from the diagram: l = 7 ft, w = 5 ft, h = 6 ft.",
    "Substitute into V = lwh: V = 7 × 5 × 6.",
    "Simplify: V = 210 ft³."
  ],
  img_question: ""
},
{
  question: "A cylindrical tank has a radius of 6 m and a height of 10 m. A second cylindrical tank has a radius of 3 m and a height of 10 m. How many times greater is the volume of the first tank than the second?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "",
  hint: "Find the volume of each cylinder using V = πr²h, then divide.",
  steps: [
    "Volume of the first tank: V = π(6)²(10) = 360π m³.",
    "Volume of the second tank: V = π(3)²(10) = 90π m³.",
    "Divide: 360π ÷ 90π = 4.",
    "The first tank is 4 times greater in volume."
  ],
  img_question: ""
},
{
  question: "A rectangular prism has a length of 10 cm, a width of 6 cm, and a height of 4 cm. A cylinder with a radius of 2 cm and the same height of 4 cm is removed from its center. What is the remaining volume? Round to the nearest tenth.",
  type: "arithmetic",
  correct: "189.7",
  variable: "",
  answerSuffix: "cm³",
  hint: "Find the volume of the prism and the volume of the cylinder separately, then subtract.",
  steps: [
    "Volume of the rectangular prism: V = 10 × 6 × 4 = 240 cm³.",
    "Volume of the cylinder: V = π(2)²(4) = 16π ≈ 50.3 cm³.",
    "Remaining volume: 240 − 50.3 = 189.7 cm³."
  ],
  img_question: ""
},


];