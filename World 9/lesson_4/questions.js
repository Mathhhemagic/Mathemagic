const lessonQuestions = [

  {
    question: "A survey of 100 students asked whether they play a sport. The results: 30 freshmen play a sport, 20 freshmen do not, 25 sophomores play a sport, and 25 sophomores do not. What is the probability that a randomly selected student plays a sport?",
    type: "arithmetic",
    correct: "\\frac{11}{20}",
    variable: "",
    answerSuffix: "",
    hint: "Divide the total number of students who play a sport by the total number of students surveyed.",
    steps: [
      "Total students who play a sport: 30 + 25 = 55.",
      "Total students surveyed: 100.",
      "P(plays a sport) = 55/100 = 11/20."
    ],
    img_question: ""
  },
  {
    question: "A survey of 100 students asked whether they play a sport. The results: 30 freshmen play a sport, 20 freshmen do not, 25 sophomores play a sport, and 25 sophomores do not. What is the probability that a randomly selected freshman plays a sport?",
    type: "arithmetic",
    correct: "\\frac{3}{5}",
    variable: "",
    answerSuffix: "",
    hint: "This is a conditional probability. The denominator is the total number of freshmen, not the total number of students.",
    steps: [
      "The condition is that the student is a freshman. Total freshmen: 30 + 20 = 50.",
      "Freshmen who play a sport: 30.",
      "P(plays a sport | freshman) = 30/50 = 3/5."
    ],
    img_question: ""
  },
  {
    question: "A survey of 200 students asked about their preferred study location. Results: 60 freshmen prefer home, 40 freshmen prefer school, 50 sophomores prefer home, and 50 sophomores prefer school. What percentage of all students prefer studying at home?",
    type: "arithmetic",
    correct: "55",
    variable: "",
    answerSuffix: "%",
    hint: "Divide the total number of students who prefer studying at home by the total number of students, then multiply by 100.",
    steps: [
      "Total students who prefer studying at home: 60 + 50 = 110.",
      "Total students surveyed: 200.",
      "110 ÷ 200 = 0.55 = 55%."
    ],
    img_question: ""
  },
  {
    question: "A survey of 200 students asked about their preferred study location. Results: 60 freshmen prefer home, 40 freshmen prefer school, 50 sophomores prefer home, and 50 sophomores prefer school. What percentage of sophomores prefer studying at school?",
    type: "arithmetic",
    correct: "50",
    variable: "",
    answerSuffix: "%",
    hint: "Use only the sophomore row. Divide sophomores who prefer school by the total number of sophomores.",
    steps: [
      "Sophomores who prefer studying at school: 50.",
      "Total sophomores: 50 + 50 = 100.",
      "50 ÷ 100 = 0.50 = 50%."
    ],
    img_question: ""
  },
  {
    question: "A school of 800 students randomly surveys 80 students and finds that 24 prefer a later start time. Based on the sample, how many students in the entire school would be expected to prefer a later start time?",
    type: "arithmetic",
    correct: "240",
    variable: "",
    answerSuffix: "students",
    hint: "Find the proportion from the sample, then apply it to the full population.",
    steps: [
      "Proportion from the sample: 24/80 = 3/10.",
      "Apply to the full school: 3/10 × 800 = 240.",
      "An estimated 240 students would prefer a later start time."
    ],
    img_question: ""
  },
  {
    question: "A researcher wants to find out how residents of a city feel about a new highway. She surveys only drivers at a highway rest stop. Is this sample likely to be biased? Enter 1 for yes and 0 for no.",
    type: "arithmetic",
    correct: "1",
    variable:"" ,
    answerSuffix: "",
    hint: "Think about whether the people surveyed represent all residents of the city.",
    steps: [
      "The sample consists only of drivers at a highway rest stop.",
      "These people are more likely to use highways and may favor the new highway.",
      "This does not represent all city residents, so the sample is biased.",
      "Enter 1 for yes."
    ],
    img_question: ""
  },
  {
    question: "A survey of 120 people asked about their preferred exercise. Results: 40 prefer running, 30 prefer swimming, 25 prefer cycling, and 25 prefer weightlifting. What is the probability that a randomly selected person prefers running?",
    type: "arithmetic",
    correct: "\\frac{1}{3}",
    variable: "",
    answerSuffix: "",
    hint: "Divide the number of people who prefer running by the total number of people surveyed.",
    steps: [
      "People who prefer running: 40.",
      "Total people surveyed: 120.",
      "P(running) = 40/120 = 1/3."
    ],
    img_question: ""
  },
  {
    question: "A survey question asks: 'Don't you agree that the school cafeteria serves unhealthy food?' Why might this question produce biased results? Enter 1 if the question is biased and 0 if it is not.",
    type: "arithmetic",
    correct: "1",
    variable: "",
    answerSuffix: "",
    hint: "Consider whether the wording of the question encourages a particular response.",
    steps: [
      "The question uses the phrase 'Don't you agree,' which pushes respondents toward a yes answer.",
      "Leading questions like this can bias survey results.",
      "Enter 1 for biased."
    ],
    img_question: ""
  },
  {
    question: "A survey of 150 athletes asked about their grade and sport. Results: 40 freshmen play basketball, 30 freshmen play soccer, 20 freshmen do track, 30 sophomores play basketball, 20 sophomores play soccer, and 10 sophomores do track. What is the probability that a randomly selected athlete is a sophomore who plays basketball?",
    type: "arithmetic",
    correct: "\\frac{1}{5}",
    variable: "",
    answerSuffix: "",
    hint: "Find the number of sophomore basketball players and divide by the total number of athletes surveyed.",
    steps: [
      "Sophomore basketball players: 30.",
      "Total athletes surveyed: 150.",
      "P(sophomore and basketball) = 30/150 = 1/5."
    ],
    img_question: ""
  },
  {
    question: "A city of 50,000 residents randomly surveys 500 residents and finds that 175 support a new recycling program. Based on the sample, approximately how many residents in the entire city would be expected to support the program?",
    type: "arithmetic",
    correct: "17500",
    variable: "",
    answerSuffix: "residents",
    hint: "Find the proportion from the sample and apply it to the full population.",
    steps: [
      "Proportion from the sample: 175/500 = 7/20.",
      "Apply to the full city: 7/20 × 50,000 = 17,500.",
      "An estimated 17,500 residents would support the program."
    ],
    img_question: ""
  }


];