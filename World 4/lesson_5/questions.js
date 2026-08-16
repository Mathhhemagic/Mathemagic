const lessonQuestions = [
{
question: "A function is defined by f(x) = x + 3 for x < 2 and f(x) = x² for x ≥ 2. What is f(1)?",
type: "arithmetic",
correct: "4",
variable: "",
answerSuffix: "",
hint: "Since 1 is less than 2, use the first rule.",
steps: [
"Since 1 < 2, use f(x) = x + 3.",
"f(1) = 1 + 3.",
"f(1) = 4."
],
img_question: ""
},
{
question: "A function is defined by f(x) = 2x − 1 for x < 3 and f(x) = x + 5 for x ≥ 3. What is f(3)?",
type: "arithmetic",
correct: "8",
variable: "",
answerSuffix: "",
hint: "Because the condition includes x ≥ 3, use the second rule.",
steps: [
"Since 3 ≥ 3, use f(x) = x + 5.",
"f(3) = 3 + 5.",
"f(3) = 8."
],
img_question: ""
},
{
question: "A function is defined by f(x) = x² for x ≤ 1 and f(x) = 3x + 2 for x > 1. What is f(−2)?",
type: "arithmetic",
correct: "4",
variable: "",
answerSuffix: "",
hint: "Determine which interval contains −2 before choosing a rule.",
steps: [
"Since −2 ≤ 1, use f(x) = x².",
"f(−2) = (−2)².",
"f(−2) = 4."
],
img_question: ""
},
{
question: "The graph of a nonlinear function has a lowest point at (−2, 5). What is the minimum value of the function?",
type: "arithmetic",
correct: "5",
variable: "",
answerSuffix: "",
hint: "The minimum value is the y-coordinate of the lowest point.",
steps: [
"The lowest point on the graph is (−2, 5).",
"The y-coordinate of this point is 5.",
"Therefore, the minimum value is 5."
],
img_question: ""
},
{
question: "A nonlinear function decreases from x = −4 to x = 1 and then increases from x = 1 to x = 5. At which x-value does the function change from decreasing to increasing?",
type: "arithmetic",
correct: "1",
variable: "",
answerSuffix: "",
hint: "Look for the x-value where the function stops decreasing and begins increasing.",
steps: [
"The function decreases until x = 1.",
"The function increases after x = 1.",
"Therefore, the function changes direction at x = 1."
],
img_question: ""
},
{
  question: "The graph of f(x) = x² is transformed into g(x) = (x − 3)² + 4. What is the y-coordinate of the vertex of g(x)?",
  type: "arithmetic",
  correct: "4",
  variable: "",
  answerSuffix: "",
  hint: "The number added outside the parentheses determines the vertical shift of the vertex.",
  steps: [
    "The vertex of f(x) = x² is (0, 0).",
    "The expression x − 3 shifts the graph 3 units to the right.",
    "The +4 shifts the graph 4 units up.",
    "The new vertex is at (3, 4).",
    "The y-coordinate of the vertex is 4."
  ],
  img_question: ""
},
{
question: "A function is defined by f(x) = 4 − x for x < 0 and f(x) = x² + 1 for x ≥ 0. What is f(−5)?",
type: "arithmetic",
correct: "9",
variable: "",
answerSuffix: "",
hint: "Since −5 is less than 0, use the rule for x < 0.",
steps: [
"Since −5 < 0, use f(x) = 4 − x.",
"f(−5) = 4 − (−5).",
"f(−5) = 9."
],
img_question: ""
},
{
question: "A piecewise function is defined by f(x) = 2x + 4 for x < 2 and f(x) = x² − 1 for x ≥ 2. For what value of x does f(x) equal 8 using the second rule?",
type: "algebra",
correct: "3",
variable: "x",
answerSuffix: "",
hint: "Use the second rule and set its expression equal to 8.",
steps: [
"Use the second rule because x ≥ 2.",
"x² − 1 = 8.",
"x² = 9.",
"x = 3 or x = −3.",
"The condition x ≥ 2 eliminates −3.",
"Therefore, x = 3."
],
img_question: ""
},
{
question: "A nonlinear graph decreases rapidly from x = −5 to x = 0 and decreases slowly from x = 0 to x = 4. What number starts the interval where the function has a steeper slope?",
type: "arithmetic",
correct: "-5",
variable: "",
answerSuffix: "to 0",
hint: "A steeper sloper is represented by a faster rate of decrease.",
steps: [
"The graph decreases rapidly from x = −5 to x = 0.",
"The graph decreases slowly from x = 0 to x = 4.",
"Therefore, the function is decreasing more rapidly over the interval from −5 to 0."
],
img_question: ""
},
{
question: "A function is defined by f(x) = x² + 2 for x < 1 and f(x) = 2x + 5 for x ≥ 1. What is f(4)?",
type: "arithmetic",
correct: "13",
variable: "",
answerSuffix: "",
hint: "Since 4 is greater than or equal to 1, use the second rule.",
steps: [
"Since 4 ≥ 1, use f(x) = 2x + 5.",
"f(4) = 2(4) + 5.",
"f(4) = 8 + 5.",
"f(4) = 13."
],
img_question: ""
}


]