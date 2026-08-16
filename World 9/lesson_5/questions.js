var lessonQuestions = [
{
  question: "Find the mean of the data set: 8, 14, 6, 10, 12.",
  type: "arithmetic",
  correct: "10",
  variable: "",
  answerSuffix: "",
  hint: "Add all the values together, then divide by the number of values.",
  steps: [
    "Add all values: 8 + 14 + 6 + 10 + 12 = 50.",
    "Divide by 5: 50 ÷ 5 = 10.",
    "The mean is 10."
  ],
  img_question: ""
},
{
  question: "Find the median of the data set: 3, 9, 1, 7, 5, 11, 4.",
  type: "arithmetic",
  correct: "5",
  variable: "",
  answerSuffix: "",
  hint: "Arrange the values from least to greatest, then find the middle value.",
  steps: [
    "Arrange in order: 1, 3, 4, 5, 7, 9, 11.",
    "There are 7 values, so the middle value is the 4th: 5.",
    "The median is 5."
  ],
  img_question: ""
},
{
  question: "Two data sets have the same mean of 20. Data set A: 18, 19, 20, 21, 22. Data set B: 10, 15, 20, 25, 30. Which data set has the greater standard deviation?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Standard deviation measures spread. Compare how far each set's values are from the mean.",
  steps: [
    "Data set A values are close to the mean of 20: differences are 2, 1, 0, 1, 2.",
    "Data set B values are much more spread from the mean: differences are 10, 5, 0, 5, 10.",
    "Data set B has greater spread, so it has the greater standard deviation.",
    "Enter 2 for data set B."
  ],
  img_question: ""
},
{
  question: "A fair six-sided die is rolled. What is the probability of rolling a number less than 3?",
  type: "arithmetic",
  correct: "\\frac{1}{3}",
  variable: "",
  answerSuffix: "",
  hint: "Count the outcomes less than 3, then divide by the total number of outcomes.",
  steps: [
    "Numbers less than 3 on a six-sided die: 1 and 2. That is 2 outcomes.",
    "Total outcomes: 6.",
    "P(less than 3) = 2/6 = 1/3."
  ],
  img_question: ""
},
{
  question: "A bag contains 4 red and 6 blue marbles. A marble is drawn, replaced, then another is drawn. What is the probability of drawing blue both times?",
  type: "arithmetic",
  correct: "\\frac{9}{25}",
  variable: "",
  answerSuffix: "",
  hint: "Since the marble is replaced, the events are independent. Multiply the probabilities.",
  steps: [
    "Total marbles: 10. P(blue) = 6/10 = 3/5.",
    "Since the marble is replaced, the events are independent.",
    "P(blue and blue) = 3/5 × 3/5 = 9/25."
  ],
  img_question: ""
},
{
  question: "The line of best fit for a scatterplot is y = −4x + 80, where x is the number of weeks and y is the number of unsold items. How many unsold items are predicted after 12 weeks?",
  type: "arithmetic",
  correct: "32",
  variable: "",
  answerSuffix: "",
  hint: "Substitute x = 12 into the equation and simplify.",
  steps: [
    "Substitute x = 12 into y = −4x + 80.",
    "y = −4(12) + 80 = −48 + 80 = 32.",
    "The predicted number of unsold items after 12 weeks is 32."
  ],
  img_question: ""
},
{
  question: "The scatterplot shows the relationship between two variables. Which description best fits the trend? Enter 1 for positive linear, 2 for negative linear, and 3 for no association.",
  type: "arithmetic",
  correct: "3",
  variable: "",
  answerSuffix: "",
  hint: "Look at whether the points follow a clear upward or downward direction from left to right.",
  steps: [
    "The points are scattered with no clear direction.",
    "There is no clear linear association.",
    "Enter 3."
  ],
  img_question: "../../Images/world_9_lesson_5_question_7.jpg"
},
{
  question: "The table shows the results of a survey of 200 students about their preferred lunch option. What is the probability that a randomly selected student prefers pizza?",
  type: "arithmetic",
  correct: "\\frac{2}{5}",
  variable: "",
  answerSuffix: "",
  hint: "Divide the number of students who prefer pizza by the total number of students surveyed.",
  steps: [
    "Students who prefer pizza: 80.",
    "Total students surveyed: 200.",
    "P(pizza) = 80/200 = 2/5."
  ],
  img_question: "../../Images/world_9_lesson_5_question_8.jpg"
},
{
  question: "The table shows survey results from 120 students. What is the probability that a randomly selected junior owns a car?",
  type: "arithmetic",
  correct: "\\frac{2}{5}",
  variable: "",
  answerSuffix: "",
  hint: "This is a conditional probability. The denominator is the total number of juniors, not all students.",
  steps: [
    "The condition is that the student is a junior. Total juniors: 50.",
    "Juniors who own a car: 20.",
    "P(owns a car | junior) = 20/50 = 2/5."
  ],
  img_question: "../../Images/world_9_lesson_5_question_9.jpg"
},
{
  question: "A town of 20,000 residents randomly surveys 400 residents and finds that 140 support building a new library. A council member claims the survey was biased because it was only conducted online. Assuming the claim is correct, approximately how many residents would be expected to support the library based on the sample — and why might this number be unreliable?",
  type: "arithmetic",
  correct: "7000",
  variable: "",
  answerSuffix: "residents",
  hint: "Find the proportion from the sample and apply it to the population. Then consider whether online-only sampling could bias the results.",
  steps: [
    "Proportion from the sample: 140/400 = 7/20.",
    "Apply to the full town: 7/20 × 20,000 = 7,000.",
    "An estimated 7,000 residents would support the library.",
    "However, an online-only survey may exclude residents without internet access, making the sample unrepresentative and the estimate potentially unreliable."
  ],
  img_question: ""
},

];
