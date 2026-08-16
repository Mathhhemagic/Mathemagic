const lessonQuestions = [
  {
  question: "Solve for x: x + 5 > 9",
  type: "inequality",
  correct: "x > 4",
  variable: "x",
  answerSuffix: "",
  hint: "Subtract 5 from both sides to isolate x.",
  steps: [
    "x + 5 > 9",
    "Subtract 5 from both sides: x > 9 − 5",
    "x > 4"
  ],
  img_question: ""
},
{
  question: "Solve for x: 4x ≤ 28",
  type: "inequality",
  correct: "x <= 7",
  variable: "x",
  answerSuffix: "",
  hint: "Divide both sides by 4. Does the inequality sign flip?",
  steps: [
    "4x ≤ 28",
    "Divide both sides by 4: x ≤ 28 ÷ 4",
    "x ≤ 7"
  ],
  img_question: ""
},
{
  question: "Solve for x: −3x < 12",
  type: "inequality",
  correct: "x > −4",
  variable: "x",
  answerSuffix: "",
  hint: "Divide both sides by −3. Remember what happens to the inequality sign.",
  steps: [
    "−3x < 12",
    "Divide both sides by −3 and flip the inequality sign: x > 12 ÷ (−3)",
    "x > −4"
  ],
  img_question: ""
},
{
  question: "Solve for x: 2x − 3 ≥ 7",
  type: "inequality",
  correct: "x >= 5",
  variable: "x",
  answerSuffix: "",
  hint: "Add 3 to both sides first, then divide.",
  steps: [
    "2x − 3 ≥ 7",
    "Add 3 to both sides: 2x ≥ 10",
    "Divide both sides by 2: x ≥ 5"
  ],
  img_question: ""
},
{
  question: "Solve for x: −4x + 6 > −10",
  type: "inequality",
  correct: "x < 4",
  variable: "x",
  answerSuffix: "",
  hint: "Subtract 6 from both sides, then divide by −4. Don't forget the flip.",
  steps: [
    "−4x + 6 > −10",
    "Subtract 6 from both sides: −4x > −16",
    "Divide both sides by −4 and flip the inequality sign: x < 4"
  ],
  img_question: ""
},
{
  question: "A store requires customers to spend at least $50 to receive free shipping. Maria has already added $32 worth of items to her cart. What is the minimum additional amount, in dollars, she must spend to qualify?",
  type: "inequality",
  correct: "18",
  variable: "",
  answerSuffix: "$",
  hint: "Write an inequality and solve for the minimum additional amount.",
  steps: [
    "Let a represent the additional amount Maria must spend.",
    "The total must be at least $50: 32 + a ≥ 50",
    "Subtract 32 from both sides: a ≥ 18",
    "The minimum additional amount Maria must spend is $18."
  ],
  img_question: ""
},
{
  question: "Solve for x: −3 < 2x + 1 < 9",
  type: "inequality",
  correct: "−2 < x < 4",
  variable: "x",
  answerSuffix: "",
  hint: "Subtract 1 from all three parts, then divide all three parts by 2.",
  steps: [
    "−3 < 2x + 1 < 9",
    "Subtract 1 from all three parts: −4 < 2x < 8",
    "Divide all three parts by 2: −2 < x < 4"
  ],
  img_question: ""
},
{
  question: "Solve for x: 3(x − 2) ≤ 2x + 1",
  type: "inequality",
  correct: "x <= 7",
  variable: "x",
  answerSuffix: "",
  hint: "Distribute first, then move variable terms to one side.",
  steps: [
    "3(x − 2) ≤ 2x + 1",
    "Distribute: 3x − 6 ≤ 2x + 1",
    "Subtract 2x from both sides: x − 6 ≤ 1",
    "Add 6 to both sides: x ≤ 7"
  ],
  img_question: ""
},
{
  question: "A taxi charges a flat fee of $3 plus $2 per mile. Jenna wants to spend no more than $15. What is the maximum number of whole miles she can travel?",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "miles",
  hint: "Write an inequality using the flat fee and the per-mile cost.",
  steps: [
    "Let m represent the number of miles traveled.",
    "The total cost must be no more than $15: 3 + 2m ≤ 15",
    "Subtract 3 from both sides: 2m ≤ 12",
    "Divide both sides by 2: m ≤ 6",
    "The maximum number of whole miles Jenna can travel is 6."
  ],
  img_question: ""
},
{
  question: "For what values of x is the inequality −2(3x − 4) ≥ 4x − 8 satisfied? Enter the largest integer value of x that satisfies the inequality.",
  type: "arithmetic",
  correct: "1",
  variable: "",
  answerSuffix: "",
  hint: "Distribute, collect terms, and remember to flip the sign if you divide by a negative.",
  steps: [
    "−2(3x − 4) ≥ 4x − 8",
    "Distribute: −6x + 8 ≥ 4x − 8",
    "Subtract 4x from both sides: −10x + 8 ≥ −8",
    "Subtract 8 from both sides: −10x ≥ −16",
    "Divide both sides by −10 and flip the inequality sign: x ≤ \\frac{8}{5}",
    "Since x ≤ 1.6, the largest integer value of x that satisfies the inequality is 1."
  ],
  img_question: ""
},


];