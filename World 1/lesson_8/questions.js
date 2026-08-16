var lessonQuestions = [
{
  question: "What is |−13| − |5|?",
  type: "arithmetic",
  correct: "8",
  variable: "",
  answerSuffix: "",
  hint: "Find the absolute value of each number first, then subtract.",
  steps: [
    "|−13| = 13 and |5| = 5",
    "13 − 5 = 8"
  ],
  img_question: ""
},
{
  question: "What is the greatest value among −7, −4, and −1?",
  type: "arithmetic",
  correct: "-1",
  variable: "",
  answerSuffix: "",
  hint: "On a number line, greater values are always further to the right.",
  steps: [
    "Plot −7, −4, and −1 on a number line.",
    "−1 is the furthest to the right among the three values.",
    "The greatest value is −1."
  ],
  img_question: ""
},
{
  question: "Evaluate: 3 + 4² ÷ 2 − 1",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "",
  hint: "Apply PEMDAS: handle the exponent first, then division, then addition and subtraction left to right.",
  steps: [
    "Evaluate the exponent first: 4² = 16",
    "Expression becomes: 3 + 16 ÷ 2 − 1",
    "Divide: 16 ÷ 2 = 8",
    "Expression becomes: 3 + 8 − 1",
    "Add and subtract left to right: 3 + 8 = 11, then 11 − 1 = 10"
  ],
  img_question: ""
},
{
  question: "What is √144 + 2⁵?",
  type: "arithmetic",
  correct: "44",
  variable: "",
  answerSuffix: "",
  hint: "Evaluate the square root and the exponent separately, then add.",
  steps: [
    "√144 = 12, since 12 × 12 = 144",
    "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
    "12 + 32 = 44"
  ],
  img_question: ""
},
{
  question: "What is ⁵⁄₆ − ¼?",
  type: "arithmetic",
  correct: "\\frac{7}{12}",
  variable: "",
  answerSuffix: "",
  hint: "Find a common denominator for 6 and 4 before subtracting.",
  steps: [
    "The least common denominator of 6 and 4 is 12.",
    "Convert: 5/6 = 10/12 and 1/4 = 3/12",
    "10/12 − 3/12 = 7/12"
  ],
  img_question: ""
},
{
  question: "What is ¾ ÷ ⁹⁄₁₆?",
  type: "arithmetic",
  correct: "\\frac{4}{3}",
  variable: "",
  answerSuffix: "",
  hint: "To divide fractions, multiply by the reciprocal of the second fraction.",
  steps: [
    "Rewrite as multiplication using the reciprocal: 3/4 × 16/9",
    "Multiply numerators: 3 × 16 = 48",
    "Multiply denominators: 4 × 9 = 36",
    "Simplify: 48/36 = 4/3"
  ],
  img_question: ""
},
{
  question: "A jacket originally costs $80. The price increases by 35%. What is the new price?",
  type: "arithmetic",
  correct: "108",
  variable: "",
  answerSuffix: "$",
  hint: "Multiply the original price by 1 plus the percent increase written as a decimal.",
  steps: [
    "35% as a decimal is 0.35.",
    "New price = 80 × (1 + 0.35) = 80 × 1.35",
    "80 × 1.35 = 108",
    "The new price is $108."
  ],
  img_question: ""
},
{
  question: "After a 20% discount, a shirt costs $36. What was the original price?",
  type: "arithmetic",
  correct: "45",
  variable: "",
  answerSuffix: "$",
  hint: "The sale price is 80% of the original. Divide by 0.80 to work backwards.",
  steps: [
    "A 20% discount means the customer pays 100% − 20% = 80% of the original price.",
    "Let the original price = p. Then 0.80 × p = 36.",
    "Divide both sides by 0.80: p = 36 ÷ 0.80 = 45",
    "The original price was $45."
  ],
  img_question: ""
},
{
  question: "A car travels at a constant speed of 55 miles per hour. How many miles does it travel in 2.5 hours?",
  type: "arithmetic",
  correct: "137.5",
  variable: "",
  answerSuffix: "mi",
  hint: "Multiply the rate by the time.",
  steps: [
    "Distance = rate × time",
    "Distance = 55 × 2.5 = 137.5 miles"
  ],
  img_question: ""
},
{
  question: "On a map, 1 inch represents 40 miles. Two cities are 3.5 inches apart on the map. What is the actual distance between the cities?",
  type: "arithmetic",
  correct: "140",
  variable: "",
  answerSuffix: "mi",
  hint: "Set up a proportion: 1 inch is to 40 miles as 3.5 inches is to how many miles?",
  steps: [
    "Set up the proportion: 1/40 = 3.5/x",
    "Cross-multiply: x = 40 × 3.5",
    "x = 140",
    "The actual distance between the cities is 140 miles."
  ],
  img_question: ""
},
]