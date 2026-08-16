var lessonQuestions = [
{
  question: "Let f(x) = x² − 4 and g(x) = x + 2. What is f(x) ÷ g(x) for all values where g(x) ≠ 0?",
  type: "algebra",
  correct: "x − 2",
  variable: "x",
  answerSuffix: "",
  hint: "Factor the numerator completely, then cancel any common factors with the denominator.",
  steps: [
    "Factor the numerator: x² − 4 = (x − 2)(x + 2).",
    "Write the expression: (x − 2)(x + 2) ÷ (x + 2).",
    "Cancel the common factor (x + 2): result is x − 2.",
    "Restriction: x ≠ −2."
  ],
  img_question: ""
},
{
  question: "A line passes through the points (k, 3) and (2k, 7). If the slope of the line is 2, what is the value of k?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Use the slope formula with the two given points and set it equal to 2.",
  steps: [
    "Apply the slope formula: (7 − 3) ÷ (2k − k) = 2.",
    "Simplify: 4 ÷ k = 2.",
    "Multiply both sides by k: 4 = 2k.",
    "Divide by 2: k = 2."
  ],
  img_question: ""
},
{
  question: "The function h(x) = −2x² + 12x − 10 models the height of a projectile in feet, where x is the horizontal distance in feet. What is the maximum height the projectile reaches?",
  type: "arithmetic",
  correct: "8",
  variable: "",
  answerSuffix: "ft",
  hint: "Find the x-coordinate of the vertex using x = −b ÷ (2a), then substitute into h(x).",
  steps: [
    "Identify a = −2 and b = 12.",
    "Find the vertex x-coordinate: x = −12 ÷ (2 × −2) = −12 ÷ −4 = 3.",
    "Substitute x = 3: h(3) = −2(3)² + 12(3) − 10 = −18 + 36 − 10 = 8.",
    "The maximum height is 8 feet."
  ],
  img_question: ""
},
{
  question: "In the xy-plane, a circle has center (3, −2) and passes through the point (7, 1). What is the area of the circle? Leave your answer in terms of π.",
  type: "arithmetic",
  correct: "25",
  variable: "",
  answerSuffix: "π",
  hint: "Find the radius by calculating the distance between the center and the given point, then use A = πr².",
  steps: [
    "Find the radius using the distance formula: r = √((7 − 3)² + (1 − (−2))²).",
    "Simplify: r = √(4² + 3²) = √(16 + 9) = √25 = 5.",
    "Find the area: A = π(5)² = 25π."
  ],
  img_question: ""
},
{
  question: "The sum of three consecutive even integers is 78. What is the largest of the three integers?",
  type: "arithmetic",
  correct: "28",
  variable: "",
  answerSuffix: "",
  hint: "Let the three consecutive even integers be n, n + 2, and n + 4. Set up an equation and solve.",
  steps: [
    "Let the integers be n, n + 2, and n + 4.",
    "Set up: n + (n + 2) + (n + 4) = 78.",
    "Simplify: 3n + 6 = 78.",
    "Subtract 6: 3n = 72.",
    "Divide by 3: n = 24.",
    "The three integers are 24, 26, and 28.",
    "The largest is 28."
  ],
  img_question: ""
},
{
  question: "A population is modeled by P(t) = 800(0.75)^t, where t is time in years. During which year does the population first drop below 200?",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Evaluate P(t) for increasing values of t until the population first drops below 200.",
  steps: [
    "P(1) = 800(0.75)¹ = 600.",
    "P(2) = 800(0.75)² = 450.",
    "P(3) = 800(0.75)³ = 337.5.",
    "P(4) = 800(0.75)⁴ ≈ 253.1.",
    "P(5) = 800(0.75)⁵ ≈ 189.8.",
    "The population first drops below 200 during year 5."
  ],
  img_question: ""
},
{
  question: "Two similar cones have a scale factor of 3. The smaller cone has a volume of 12π cubic units. What is the volume of the larger cone?",
  type: "arithmetic",
  correct: "324",
  variable: "",
  answerSuffix: "π cubic units",
  hint: "The volume scale factor is the cube of the side-length scale factor.",
  steps: [
    "Volume scale factor = 3³ = 27.",
    "Volume of larger cone = 12π × 27 = 324π cubic units."
  ],
  img_question: ""
},
{
  question: "If sin(θ) = 3/5 and θ is an acute angle, what is the value of tan(θ)?",
  type: "arithmetic",
  correct: "\\frac{3}{4}",
  variable: "",
  answerSuffix: "",
  hint: "Use the Pythagorean theorem to find the missing side, then apply tan = opposite ÷ adjacent.",
  steps: [
    "sin(θ) = 3/5 means opposite = 3 and hypotenuse = 5.",
    "Find the adjacent side: 3² + adjacent² = 5².",
    "adjacent² = 25 − 9 = 16, so adjacent = 4.",
    "tan(θ) = opposite ÷ adjacent = 3/4."
  ],
  img_question: ""
},
{
  question: "A survey of 300 people finds that 180 own a dog, 120 own a cat, and 60 own both. How many people own neither a dog nor a cat?",
  type: "arithmetic",
  correct: "60",
  variable: "",
  answerSuffix: "people",
  hint: "Use the inclusion-exclusion principle: total who own at least one pet = dog + cat − both.",
  steps: [
    "People who own at least one pet: 180 + 120 − 60 = 240.",
    "People who own neither: 300 − 240 = 60."
  ],
  img_question: ""
},
{
  question: "The table shows the results of a study on exercise habits and sleep quality for 200 adults. A researcher claims that adults who exercise regularly are more than twice as likely to report good sleep quality as those who do not exercise. Is the claim correct? Enter 1 for correct and 0 for incorrect.",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "",
  hint: "Find the proportion of good sleepers among exercisers and among non-exercisers, then compare.",
  steps: [
    "Exercisers with good sleep: 90 out of 120. Proportion = 90/120 = 3/4 = 75%.",
    "Non-exercisers with good sleep: 30 out of 80. Proportion = 30/80 = 3/8 = 37.5%.",
    "75% is exactly twice 37.5%, so exercisers are at least twice as likely to report good sleep.",
    "The claim is correct. Enter 1."
  ],
  img_question: "A two-way table with row labels 'Exercises Regularly' and 'Does Not Exercise' and a 'Total' row. Column labels are 'Good Sleep Quality', 'Poor Sleep Quality', and 'Total'. Values: Exercises Regularly: 90, 30, 120. Does Not Exercise: 30, 50, 80. Total: 120, 80, 200. All labels and values are clearly shown."
},
];
