const lessonQuestions = [
{
  question: "A population starts at 300 and grows by 20% each year. Which expression models the population after x years?\nA: y = 300(0.80)ˣ\nB: y = 300(1.20)ˣ\nC: y = 300(1.02)ˣ\nD: y = 20(300)ˣ",
  type: "algebra",
  correct: "B",
  variable: "",
  answerSuffix: "",
  hint: "For a growth rate of r, the growth factor is 1 + r. Write r as a decimal first.",
  steps: [
    "The starting amount is 300, so a = 300.",
    "The growth rate is 20% = 0.20, so the growth factor is 1 + 0.20 = 1.20.",
    "The model is y = 300(1.20)ˣ.",
    "Enter B for option B: y = 300(1.20)ˣ."
  ],
  img_question: ""
},
{
  question: "A laptop is purchased for $1,200 and loses 25% of its value each year. What is the decay factor?",
  type: "arithmetic",
  correct: "0.75",
  variable: "",
  answerSuffix: "",
  hint: "For a decay rate of r, the decay factor is 1 − r. Write r as a decimal.",
  steps: [
    "The decay rate is 25% = 0.25.",
    "Decay factor = 1 − 0.25 = 0.75."
  ],
  img_question: ""
},
{
  question: "A savings account has a balance of $500 and earns 6% interest each year. What is the balance after 1 year?",
  type: "arithmetic",
  correct: "530",
  variable: "",
  answerSuffix: "$",
  hint: "Use y = a(1 + r)ˣ with x = 1.",
  steps: [
    "The starting amount is a = 500 and the growth factor is 1 + 0.06 = 1.06.",
    "Substitute x = 1: y = 500(1.06)¹ = 500 × 1.06 = 530.",
    "The balance after 1 year is $530."
  ],
  img_question: ""
},
{
  question: "The function y = 800(0.90)ˣ models the value of a phone x years after purchase. What was the original value of the phone?",
  type: "arithmetic",
  correct: "800",
  variable: "",
  answerSuffix: "$",
  hint: "The starting value a is the y-intercept. Evaluate the function at x = 0.",
  steps: [
    "Substitute x = 0: y = 800(0.90)⁰ = 800 × 1 = 800.",
    "The original value of the phone was $800."
  ],
  img_question: ""
},
{
  question: "Does the function y = 3(0.6)ˣ represent exponential growth or decay? Enter 1 for growth and 0 for decay.",
  type: "arithmetic",
  correct: "0",
  variable: "",
  answerSuffix: "",
  hint: "Look at the base of the exponential. Is it greater than 1 or between 0 and 1?",
  steps: [
    "The base of the exponential is 0.6.",
    "Since 0 < 0.6 < 1, the function represents exponential decay.",
    "Enter 0 for decay."
  ],
  img_question: ""
},
{
  question: "A town has a population of 4,000 and grows at a rate of 5% per year. What will the population be after 2 years?",
  type: "arithmetic",
  correct: "4410",
  variable: "",
  answerSuffix: "",
  hint: "Use y = a(1 + r)ˣ with a = 4,000, r = 0.05, and x = 2.",
  steps: [
    "The growth factor is 1 + 0.05 = 1.05.",
    "Substitute x = 2: y = 4,000(1.05)².",
    "Calculate (1.05)² = 1.1025.",
    "Multiply: 4,000 × 1.1025 = 4,410.",
    "The population after 2 years is 4,410."
  ],
  img_question: ""
},
{
  question: "The graph shows two exponential functions, f(x) (red) and g(x) (blue). Which function has a greater starting value?",
  type: "algebra",
  correct: "g(x)",
  variable: "",
  answerSuffix: "",
  hint: "The starting value is the y-intercept. Find where each curve crosses the y-axis.",
  steps: [
    "The y-intercept of f(x) is (0, 2).",
    "The y-intercept of g(x) is (0, 5).",
    "Since 5 > 2, g(x) has the greater starting value.",
  ],
  img_question: "../../Images/world_6_lesson_4_question_7.jpg"
},
{
  question: "A bacteria culture starts with 200 cells and doubles every hour. Write the value of the growth factor.",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Doubling means the quantity is multiplied by the same factor each hour. What factor produces doubling?",
  steps: [
    "Doubling means the quantity is multiplied by 2 each hour.",
    "The exponential model is y = 200(2)ˣ.",
    "The growth factor is 2."
  ],
  img_question: ""
},
{
  question: "A bacteria culture starts with 200 cells and doubles every hour. How many cells will there be after 4 hours?",
  type: "arithmetic",
  correct: "3200",
  variable: "",
  answerSuffix: "",
  hint: "Use the model y = 200(2)ˣ with x = 4.",
  steps: [
    "The model is y = 200(2)ˣ.",
    "Substitute x = 4: y = 200(2)⁴.",
    "Calculate 2⁴ = 16.",
    "Multiply: 200 × 16 = 3,200.",
    "There will be 3,200 cells after 4 hours."
  ],
  img_question: ""
},
{
  question: "A car worth $24,000 depreciates at a rate of 12% per year. A motorcycle worth $8,000 depreciates at a rate of 6% per year. After 3 years, what is the positive difference in their values? Round to the nearest dollar.",
  type: "arithmetic",
  correct: "9710",
  variable: "",
  answerSuffix: "$",
  hint: "Find the value of each vehicle after 3 years using y = a(1 − r)ˣ, then subtract.",
  steps: [
    "Car value after 3 years: y = 24,000(0.88)³.",
    "Calculate (0.88)³ = 0.681472. Car value: 24,000 × 0.681472 ≈ $16,355.",
    "Motorcycle value after 3 years: y = 8,000(0.94)³.",
    "Calculate (0.94)³ = 0.830584. Motorcycle value: 8,000 × 0.830584 ≈ $6,645.",
    "Positive difference: 16,355 − 6,645 = $9,710."
  ],
  img_question: ""
},



];