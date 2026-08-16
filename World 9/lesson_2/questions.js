const lessonQuestions = [
{
  question: "A bag contains 4 red marbles and 6 blue marbles. What is the probability of randomly choosing a red marble?",
  type: "arithmetic",
  correct: "\\frac{2}{5}",
  variable: "",
  answerSuffix: "",
  hint: "Probability = favorable outcomes ÷ total outcomes.",
  steps: [
    "Total marbles: 4 + 6 = 10.",
    "Favorable outcomes (red): 4.",
    "P(red) = 4/10 = 2/5."
  ],
  img_question: ""
},
{
  question: "The probability of winning a raffle is 15%. What is the probability of not winning?",
  type: "arithmetic",
  correct: "85",
  variable: "",
  answerSuffix: "%",
  hint: "The complement of an event is 1 minus the probability of the event.",
  steps: [
    "P(not winning) = 100% − 15% = 85%."
  ],
  img_question: ""
},
{
  question: "A fair six-sided die is rolled. What is the probability of rolling a number greater than 4?",
  type: "arithmetic",
  correct: "\\frac{1}{3}",
  variable: "",
  answerSuffix: "",
  hint: "Count how many outcomes are greater than 4, then divide by the total number of outcomes.",
  steps: [
    "Numbers greater than 4 on a six-sided die: 5 and 6. That is 2 outcomes.",
    "Total outcomes: 6.",
    "P(greater than 4) = 2/6 = 1/3."
  ],
  img_question: ""
},
{
  question: "A coin is flipped three times. What is the probability of getting heads all three times?",
  type: "arithmetic",
  correct: "\\frac{1}{8}",
  variable: "",
  answerSuffix: "",
  hint: "The flips are independent events. Multiply the probability of heads for each flip.",
  steps: [
    "P(heads) = 1/2 for each flip.",
    "P(heads and heads and heads) = 1/2 × 1/2 × 1/2 = 1/8."
  ],
  img_question: ""
},
{
  question: "A spinner has 8 equal sections numbered 1 through 8. What is the probability of spinning an even number or a number greater than 6?",
  type: "arithmetic",
  correct: "\\frac{5}{8}",
  variable: "",
  answerSuffix: "",
  hint: "List the favorable outcomes carefully to avoid counting any number twice.",
  steps: [
    "Even numbers: 2, 4, 6, 8.",
    "Numbers greater than 6: 7, 8.",
    "Combined (no duplicates): 2, 4, 6, 7, 8. That is 5 outcomes.",
    "P = 5/8."
  ],
  img_question: ""
},
{
  question: "A bag contains 5 green marbles and 3 yellow marbles. A marble is chosen, replaced, then another is chosen. What is the probability of choosing green both times?",
  type: "arithmetic",
  correct: "\\frac{25}{64}",
  variable: "",
  answerSuffix: "",
  hint: "Since the marble is replaced, the events are independent. Multiply the probabilities.",
  steps: [
    "Total marbles: 5 + 3 = 8.",
    "P(green) = 5/8.",
    "Since the marble is replaced, the events are independent.",
    "P(green and green) = 5/8 × 5/8 = 25/64."
  ],
  img_question: ""
},
{
  question: "A fair six-sided die is rolled and a coin is flipped. What is the probability of rolling a 3 and flipping tails?",
  type: "arithmetic",
  correct: "\\frac{1}{12}",
  variable: "",
  answerSuffix: "",
  hint: "Rolling a die and flipping a coin are independent events. Multiply their probabilities.",
  steps: [
    "P(rolling a 3) = 1/6.",
    "P(tails) = 1/2.",
    "P(3 and tails) = 1/6 × 1/2 = 1/12."
  ],
  img_question: ""
},
{
  question: "The table shows the results of a survey of 40 students about their favorite subject. What is the probability that a randomly selected student chose math or science?",
  type: "arithmetic",
  correct: "\\frac{3}{4}",
  variable: "",
  answerSuffix: "",
  hint: "Add the number of students who chose math and those who chose science, then divide by the total.",
  steps: [
    "Students who chose math: 18. Students who chose science: 12.",
    "Total who chose math or science: 18 + 12 = 30.",
    "P(math or science) = 30/40 = 3/4."
  ],
  img_question: "../../Images/world_9_lesson_2_question_8.jpg"
},
{
  question: "A class has 12 boys and 8 girls. Two students are selected one at a time with replacement. What is the probability that both students selected are girls?",
  type: "arithmetic",
  correct: "\\frac{4}{25}",
  variable: "",
  answerSuffix: "",
  hint: "Since selections are made with replacement, the events are independent. Multiply the probabilities.",
  steps: [
    "Total students: 12 + 8 = 20.",
    "P(girl) = 8/20 = 2/5.",
    "Since selections are with replacement, the events are independent.",
    "P(girl and girl) = 2/5 × 2/5 = 4/25."
  ],
  img_question: ""
},
{
  question: "A bag contains 3 red, 4 blue, and 5 green marbles. A marble is drawn at random. What is the probability that it is not blue?",
  type: "arithmetic",
  correct: "\\frac{2}{3}",
  variable: "",
  answerSuffix: "",
  hint: "Find the probability of drawing blue first, then use the complement.",
  steps: [
    "Total marbles: 3 + 4 + 5 = 12.",
    "P(blue) = 4/12 = 1/3.",
    "P(not blue) = 1 − 1/3 = 2/3."
  ],
  img_question: ""
},

];