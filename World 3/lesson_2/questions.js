const lessonQuestions = [
{
question: "For what value of k does the system y = 4x + 7 and y = kx + 7 have no solution?",
type: "arithmetic",
correct: "4",
variable: "",
answerSuffix: "",
hint: "For parallel lines, the slopes must be equal.",
steps: [
"Parallel lines have the same slope.",
"The first equation has slope 4, so k = 4."
],
img_question: ""
},
{
question: "For what value of k does the system y = 3x + 5 and y = 3x + k have infinitely many solutions?",
type: "arithmetic",
correct: "5",
variable: "",
answerSuffix: "",
hint: "For infinitely many solutions, both equations must describe the same line.",
steps: [
"The slopes are already equal.",
"The y-intercepts must also be equal, so k = 5."
],
img_question: ""
},
{
question: "For what value of k does the system y = 2x + 6 and y = 2x + k have no solution, 0 or 6?",
type: "arithmetic",
correct: "0",
variable: "",
answerSuffix: "",
hint: "Parallel lines need equal slopes but different y-intercepts.",
steps: [
"The slopes are both 2.",
"The first y-intercept is 6, so k must be different from 6.",
"Among the choices represented by the problem, k = 0 gives different y-intercepts and therefore no solution."
],
img_question: ""
},
{
question: "The system y = 5x − 8 and 2y = 10x + k has infinitely many solutions. What is k?",
type: "arithmetic",
correct: "-16",
variable: "",
answerSuffix: "",
hint: "Rewrite the second equation so its coefficient of y is 1.",
steps: [
"Divide the second equation by 2: y = 5x + ᵏ⁄₂.",
"For infinitely many solutions, the y-intercepts must be equal.",
"ᵏ⁄₂ = -8.",
"k = -16."
],
img_question: ""
},
{
question: "The system 3x + 2y = 7 and 6x + 4y = k has infinitely many solutions. What is k?",
type: "arithmetic",
correct: "14",
variable: "",
answerSuffix: "",
hint: "The second equation must be exactly twice the first equation.",
steps: [
"Multiply the first equation by 2: 6x + 4y = 14.",
"The second equation must have the same constant term.",
"k = 14."
],
img_question: ""
},
{
question: "The system 4x + 3y = 9 and 8x + 6y = k has no solution. What value of k makes this true, 10 or 18?",
type: "arithmetic",
correct: "10",
variable: "",
answerSuffix: "",
hint: "First compare the second equation with twice the first equation.",
steps: [
"Multiply the first equation by 2: 8x + 6y = 18.",
"For no solution, the left sides must be identical while the constants must be different.",
"k = 10 gives the same left side with a different constant."
],
img_question: ""
},
{
  question: "The system 2x + 3y = 8 and 4x + 6y = 16 has infinitely many solutions. What is y when x = 1?",
  type: "arithmetic",
  correct: "2",
  variable: "",
  answerSuffix: "",
  hint: "Substitute x = 1 into 2x + 3y = 8.",
  steps: [
    "Substitute x = 1 into 2x + 3y = 8.",
    "2(1) + 3y = 8.",
    "3y = 6.",
    "y = 2."
  ],
  img_question: ""
},
{
  question: "The system 5x − 2y = 12 and 10x − 4y = 25 has no solution. If the second equation is changed to 10x − 4y = k, what value of k would make the system have infinitely many solutions?",
  type: "arithmetic",
  correct: "24",
  variable: "",
  answerSuffix: "",
  hint: "Multiply the first equation by 2 and compare the constant terms.",
  steps: [
    "Multiply the first equation by 2: 10x − 4y = 24.",
    "For infinitely many solutions, the second equation must be identical.",
    "k = 24."
  ],
  img_question: ""
},
{
  question: "The system ax + 4y = 12 and 3x + 2y = 6 has infinitely many solutions. What is the value of a?",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "",
  hint: "For infinitely many solutions, multiply the second equation by 2.",
  steps: [
    "Multiply the second equation by 2: 6x + 4y = 12.",
    "For this to match ax + 4y = 12, we need a = 6.",
    "a = 6."
  ],
  img_question: ""
},
{
  question: "The system 3x + 2y = 7 and kx + 4y = 14 has infinitely many solutions. What is k?",
  type: "arithmetic",
  correct: "6",
  variable: "",
  answerSuffix: "",
  hint: "For infinitely many solutions, the second equation must be a scalar multiple of the first.",
  steps: [
    "Multiply the first equation by 2: 6x + 4y = 14.",
    "Compare this with kx + 4y = 14.",
    "k = 6."
  ],
  img_question: ""
}
];